import { readdirSync, readFileSync } from "fs"

export default () => {
    var templates = {}
    for (const files of readdirSync("data/templates")) {
        templates[files.split('.')[0]] = readFileSync(`data/templates/${files}`).toString()
    }
    return templates
}