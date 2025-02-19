import GenerateType from "../../languages/GenerateType.js";

export default (params, language) => {
    const returnParams = [];
    for (const paramkey of Object.keys(params)) {
        let forlang = language;
        let name = paramkey
        if (paramkey.includes("/")) {
            forlang = paramkey.split("/")[0];
            name = paramkey.split("/")[1];
        }

        if (forlang == language) {
            if (language == "lua") returnParams.push(`--- @param ${name} ${GenerateType(params[paramkey], language)}`)
            else if(language == "js") returnParams.push(` * @param ${GenerateType(params[paramkey], language)} ${name}`)
        }
    }

    if(language == "lua") {
        if (returnParams.length == 0) return "";
        else return `\n${returnParams.join("\n")}`
    } else if(language == "js") {
        if (returnParams.length == 0) return "\n/**";
        else return `\n/**\n${returnParams.join("\n")}`
    }
}