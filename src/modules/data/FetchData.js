import { readFileSync } from 'fs'

export default (folder) => {
    return JSON.parse(readFileSync(`data/${folder}/data.json`).toString())
}