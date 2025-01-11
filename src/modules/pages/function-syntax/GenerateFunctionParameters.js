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
        }
    }
    if (returnParams.length == 0) return "";
    else return `\n${returnParams.join("\n")}`
}