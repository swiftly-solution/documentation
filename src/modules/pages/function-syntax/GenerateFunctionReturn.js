import GenerateType from "../../languages/GenerateType.js"

export default (returnval, language) => {
    if (language == "lua") return `--- @return ${GenerateType(returnval[language], language)}`
    else if(language == "js") return ` * @return ${GenerateType(returnval[language], language)}\n */`;
}