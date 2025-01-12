import { markdownTable } from './markdownTable.js'

export default (pageData) => {
    const gameEventData = [
        ["Key", "Data Type"]
    ]

    for (const key of Object.keys(pageData.params)) {
        gameEventData.push([
            `\`${key}\``,
            `\`${pageData.params[key]}\``
        ])
    }

    return markdownTable(gameEventData, {
        align: ['c', 'c'],
    })
}