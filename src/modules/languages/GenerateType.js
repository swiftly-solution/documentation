import GenerateLuaType from "./lua/GenerateLuaType.js"

export default (prop, lang) => {
    if (lang == "lua") return GenerateLuaType(prop)
}