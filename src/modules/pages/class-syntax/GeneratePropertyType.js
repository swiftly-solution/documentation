import GenerateType from "../../languages/GenerateType.js"

export default (kind, lang) => {
    if(lang == "lua") return `--- @type ${GenerateType(kind, lang)}`
    else if(lang == "js") return `/** @type ${GenerateType(kind, lang)} */`
}