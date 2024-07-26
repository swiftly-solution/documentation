const { cpSync, existsSync, mkdirSync, readFileSync, rm, writeFileSync } = require("fs");
const { markdownTable } = require("./markdowntable.cjs")

const FetchData = () => {
    let data = JSON.parse(readFileSync("data/data.json").toString());

    let sdk_data = JSON.parse(readFileSync("data/data_sdk.json").toString());
    data.sdkclasses.data.generated.data = sdk_data

    let gameevents_data = JSON.parse(readFileSync("data/data_gameevents.json").toString());
    data.events.data.gameevents.data = gameevents_data

    writeFileSync("data/data.json", JSON.stringify(data, null, 4))

    return data;
}

const FetchTemplates = () => {
    return JSON.parse(readFileSync("data/templates.json").toString())
}

const data = FetchData();
const templates = FetchTemplates();
var generatedFiles = 0

const languagePrettyNames = {
    lua: "Lua"
}

const GenerateLuaType = (param) => {
    if (param == "any") return "Any* any"
    else return param;
}

const ProcessParameters = (params, language) => {
    const returnParams = [];
    for (const paramkey of Object.keys(params)) {
        let forlang = language;
        let name = paramkey
        if (paramkey.includes("/")) {
            forlang = paramkey.split("/")[0];
            name = paramkey.split("/")[1];
        }

        if (forlang == language) {
            if (language == "lua") returnParams.push(`${name} --[[ ${GenerateLuaType(params[paramkey])} ]]`)
        }
    }
    return returnParams.join(", ");
}

const GenerateFunctionSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.variable)) langs.push(lang)

    const tabs = []

    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n@returns ${data.return[lang]}\n${data.variable[lang]}(${ProcessParameters(data.params, lang)})\n\`\`\`\n${data.additional[lang] || ""}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateGettingStarted = (data) => {
    const langs = []
    for (const lang of Object.keys(data.content)) langs.push(lang)

    const tabs = []

    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n${data.content[lang]}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateEventParameters = (paramsData, lang) => {
    if (Object.keys(paramsData).length == 0) return "";

    if (lang == "lua") {
        return ", " + Object.keys(paramsData).map((key) => `${key} --[[ ${paramsData[key]} ]]`).join(', ')
    }
}

const GenerateCoreEventSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.return)) langs.push(lang)

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n@event returns ${data.return[lang]}\nAddEventHandler("${data.title}", function(event --[[ Event ]]${GenerateEventParameters(data.params, lang)})\n    --[[ ... ]]\n    return EventResult.Continue\nend)\n\`\`\`\n${data.additional[lang] || ""}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateGameEventSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.return)) langs.push(lang)

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n@event returns ${data.return[lang]}\nAddEventHandler("${data.title}", function(event --[[ Event ]])\n    --[[ ... ]]\n    return EventResult.Continue\nend)\n\`\`\`\n${data.additional[lang] || ""}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateGameEventArguments = (data) => {
    const gameEventData = [
        ["Key", "Data Type"]
    ]

    for (const key of Object.keys(data.params)) {
        gameEventData.push([
            `\`${key}\``,
            `\`${data.params[key]}\``
        ])
    }

    return markdownTable(gameEventData, {
        align: ['c', 'c'],
    })
}

const GenerateClassProperties = (classname, data, lang) => {
    if (Object.keys(data).length == 0) return "There are no properties available for this class."

    const properties = []

    for (const key of Object.keys(data)) {
        properties.push(`## ${key} ${data[key].writable ? "" : "(Read-Only)"}\n\`\`\`${lang}\n@type ${data[key].type}\nRead: ${classname}.${key}${data[key].writable ? `\nWrite: ${classname}.${key} = value` : ""}\n\`\`\``)
    }

    return properties.join("\n")
}

const GenerateClassFunctions = (classname, data, lang) => {
    if (data == null) return "There are no functions available for this class."
    if (Object.keys(data).length == 0) return "There are no functions available for this class."

    const functions = []

    for (const key of Object.keys(data)) {
        functions.push(`## ${key}\n\`\`\`${lang}\n@returns ${data[key].return[lang]}\n${classname}:${key}(${ProcessParameters(data[key].params, lang)})\n\`\`\``)
    }

    return functions.join("\n")
}

const GenerateClassSyntax = (data) => {
    const langs = data.languages

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n# Constructor\n\`\`\`${lang}\n${data.title}(${ProcessParameters(data["constructor"], lang)})\n\`\`\`\n# Properties\n${GenerateClassProperties(data.title.toLowerCase(), data.properties, lang)}\n# Functions\n${GenerateClassFunctions(data.title.toLowerCase(), data.functions, lang)}\n${data.additional[lang] || ""}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateTypeData = (data) => {
    const langs = Object.keys(languagePrettyNames)

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n${data.title} = {\n${Object.keys(data.values).map((val) => `    ${val} = ${data.values[val]}`).join(",\n")}\n}\n\`\`\``)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const ProcessTemplate = (data) => {
    const template = templates[data.template]
    if (template == undefined) return "";

    if (data.template == "function-syntax") return template.replace(/{description}/g, data.description).replace(/{code}/g, GenerateFunctionSyntax(data));
    else if (data.template == "getting-started") return template.replace(/{description}/g, data.description).replace(/{code}/g, GenerateGettingStarted(data));
    else if (data.template == "core-event-syntax") return template.replace(/{description}/g, data.description).replace(/{code}/g, GenerateCoreEventSyntax(data));
    else if (data.template == "game-event-syntax") return template.replace(/{description}/g, data.description).replace(/{code}/g, GenerateGameEventSyntax(data)).replace(/{arguments}/g, GenerateGameEventArguments(data));
    else if (data.template == "class-syntax") return template.replace(/{description}/g, data.description).replace(/{code}/g, GenerateClassSyntax(data));
    else if (data.template == "types-syntax") return template.replace(/{code}/g, GenerateTypeData(data))
    else if (data.template == "description") return template.replace(/{description}/g, data.description)
}

const ProcessData = async (data, subfolder) => {
    for (const key of Object.keys(data)) {
        if (data[key].iscategory) {
            generatedFiles++;
            mkdirSync(`output/${subfolder}${key}`, { recursive: true });
            if (!existsSync(`output/${subfolder}${key}/README.md`)) writeFileSync(`output/${subfolder}${key}/README.md`, `---\ntitle: ${data[key].title}\nicon: ${data[key].icon}\norder: ${data[key].order}\nindex: false\ncategory:\n  - Guide\n---\n\n<Catalog />`);
            ProcessData(data[key].data, `${subfolder}${key}/`)
        } else {
            writeFileSync(`output/${subfolder}${key}.md`,
                `---\ntitle: ${data[key].title}\nindex: true\norder: ${data[key].template == "getting-started" ? 1 : 2}\ncategory:\n  - Guide\n---\n\n# ${data[key].title}\n${ProcessTemplate(data[key])}`
            )
            generatedFiles++;
        }
    }
}

rm("output", { recursive: true }, () => {
    const start = Date.now();
    cpSync("data/static", "output", { recursive: true, force: true })
    ProcessData(data, "")
    console.log(`[Swiftly] [Documentation Generator] ${generatedFiles} files were generated from JSON data. (${Date.now() - start}ms)`)
});