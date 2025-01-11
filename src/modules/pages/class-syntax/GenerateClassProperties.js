import GenerateType from "../../languages/GenerateType.js"

export default (pageData, lang) => {
    const data = pageData.properties
    if (data == null) return ""
    if (Object.keys(data).length == 0) return ""

    const properties = []

    for (const key of Object.keys(data)) {
        properties.push(`## ${key} ${data[key].writable ? "" : "(Read-Only)"}\n\`\`\`${lang}\n--- @type ${GenerateType(data[key].type, lang)}\n${pageData.title.toLowerCase()}.${key}\n\`\`\``)
    }

    return `# Properties\nAll the properties for ${pageData.title} class.\n${properties.join("\n")}`
}