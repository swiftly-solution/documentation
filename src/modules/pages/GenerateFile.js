import { readFileSync } from 'fs'

export default (pageData) => {
    return readFileSync(pageData.file)
}