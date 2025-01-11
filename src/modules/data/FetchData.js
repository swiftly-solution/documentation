import { readFileSync } from 'fs'

export default () => {
    return JSON.parse(readFileSync("data/data.json").toString())
}