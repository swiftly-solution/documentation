import GenerateLuaType from "./lua/GenerateLuaType.js"
import GenerateJSType from "./js/GenerateJSType.js"

export default (prop, lang) => {
    if (lang == "lua") return GenerateLuaType(prop)
    else if(lang == "js") return GenerateJSType(prop)
}