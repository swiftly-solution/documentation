import GenerateType from "../../languages/GenerateType.js"
import GenerateFunctionParameters from "../function-syntax/GenerateFunctionParameters.js"
import GenerateFunctionReturn from "../function-syntax/GenerateFunctionReturn.js"
import ProcessParameters from "../function-syntax/ProcessParameters.js"

export default (pageData, lang) => {
    const data = pageData.functions
    if (data == null) return ""
    if (Object.keys(data).length == 0) return ""

    const functions = []

    for (const key of Object.keys(data)) {
        functions.push(`## ${key}\n\`\`\`${lang}${GenerateFunctionParameters(data[key].params, lang)}\n${GenerateFunctionReturn(data[key].return, lang)}\n${pageData.title.toLowerCase()}${lang == "lua" ? ":" : "."}${key}(${ProcessParameters(data[key].params, lang)})\n\`\`\`${data[key].additional ? `\n${data[key].additional[lang]}` : ""}`)
    }

    return `# Functions\nAll the functions for ${pageData.title} class.\n${functions.join("\n")}`
}