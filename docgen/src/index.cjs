const { cpSync, existsSync, mkdirSync, readFileSync, rm, writeFileSync } = require("fs");
const { markdownTable } = require("./markdowntable.cjs")

const FetchData = () => {
    let data = JSON.parse(readFileSync("data/data.json").toString());

    let sdk_data = JSON.parse(readFileSync("data/data_sdk.json").toString());
    data.sdkclasses.data.generated.data = sdk_data

    let gameevents_data = JSON.parse(readFileSync("data/data_gameevents.json").toString());
    data.events.data.gameevents.data = gameevents_data

    let types_data = JSON.parse(readFileSync("data/data_types.json").toString());
    data.types.data.generated.data = types_data

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
    if (param == "any") return "any";
    else if(param == "void") return "nil";
    else if(param.includes("/")) return param.split("/").map((p) => p.trim()).join("|");
    else if(
        data.types.data.generated.data[param.toLowerCase()] != undefined ||
        data.types.data.core.data[param.toLowerCase()] != undefined
    ) return `number ${param}`
    else return param;
}

const GenerateType = (param, lang) => {
    if(lang == "lua") return GenerateLuaType(param);
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
            if (language == "lua") returnParams.push(`${name}`)
        }
    }
    return returnParams.join(", ");
}

const GenerateFunctionParameters = (params, language) => {
    const returnParams = [];
    for (const paramkey of Object.keys(params)) {
        let forlang = language;
        let name = paramkey
        if (paramkey.includes("/")) {
            forlang = paramkey.split("/")[0];
            name = paramkey.split("/")[1];
        }

        if (forlang == language) {
            if (language == "lua") returnParams.push(`--- @param ${name} ${GenerateLuaType(params[paramkey])}`)
        }
    }
    if(returnParams.length == 0) return "";
    else return `\n${returnParams.join("\n")}`
}

const GenerateFunctionSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.variable)) langs.push(lang)

    const tabs = []

    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}${GenerateFunctionParameters(data.params, lang)}\n--- @return ${GenerateType(data.return[lang], lang)}\n${data.variable[lang]}(${ProcessParameters(data.params, lang)})\n\`\`\`\n${data.additional[lang] || ""}`)
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
        return ", " + Object.keys(paramsData).join(', ')
    }
}

const GenerateEventParamTypes = (paramsData, lang) => {
    if (Object.keys(paramsData).length == 0) return "";

    if (lang == "lua") {
        return `\n${Object.keys(paramsData).map((key) => `--- @param ${key} ${paramsData[key]}`).join('\n')}`
    }
}

const GenerateCoreEventSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.return)) langs.push(lang)

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n--- @param event Event${GenerateEventParamTypes(data.params, lang)}\n--- @return number EventResult\n--- @event returns ${GenerateType(data.return[lang], lang)} Via event:SetReturn\nAddEventHandler("${data.title}", function(event${GenerateEventParameters(data.params, lang)})\n    --[[ ... ]]\n    return EventResult.Continue\nend)\n\`\`\`\n${data.additional[lang] || ""}`)
    }

    return `::: tabs\n${tabs.join("\n")}\n:::`
}

const GenerateGameEventSyntax = (data) => {
    const langs = []
    for (const lang of Object.keys(data.return)) langs.push(lang)

    const tabs = []
    for (const lang of langs) {
        tabs.push(`@tab ${languagePrettyNames[lang]}\n\`\`\`${lang}\n--- @param event Event\n--- @return number EventResult\nAddEventHandler("${data.title}", function(event)\n    --[[ ... ]]\n    return EventResult.Continue\nend)\n\`\`\`\n${data.additional[lang] || ""}`)
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
        properties.push(`## ${key} ${data[key].writable ? "" : "(Read-Only)"}\n\`\`\`${lang}\n--- @type ${data[key].type}\nRead: ${classname}.${key}${data[key].writable ? `\nWrite: ${classname}.${key} = value` : ""}\n\`\`\``)
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
    if (Object.keys(data.values).length == 0) return ""

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
    for (var key of Object.keys(data)) {
        const fl = key.replace(new RegExp(":", "g"), "_")
        if (data[key].iscategory) {
            generatedFiles++;
            mkdirSync(`output/${subfolder}${fl}`, { recursive: true });
            if (!existsSync(`output/${subfolder}${fl}/README.md`)) writeFileSync(`output/${subfolder}${fl}/README.md`, `---\ntitle: ${data[key].title}\nicon: ${data[key].icon}\norder: ${data[key].order}\nindex: false\ncategory:\n  - Guide\n---\n\n<Catalog />`);
            ProcessData(data[key].data, `${subfolder}${fl}/`)
        } else {
            let processedData = ProcessTemplate(data[key])
            if (processedData == "") continue;

            writeFileSync(`output/${subfolder}${fl}.md`,
                `---\ntitle: ${data[key].title}\nindex: true\norder: ${data[key].template == "getting-started" ? 1 : 2}\ncategory:\n  - Guide\n---\n\n# ${data[key].title}\n${processedData}`
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