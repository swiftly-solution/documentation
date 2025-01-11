import { readFileSync } from 'fs'

export default () => {
    return JSON.parse(readFileSync("data/languagePrettyNames.json").toString())
}