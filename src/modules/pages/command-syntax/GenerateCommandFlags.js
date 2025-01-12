import { markdownTable } from "../game-event-syntax/markdownTable.js"

const flagDesc = {
    "linked_concommand": "Linked concommand",
    "developmentonly": "Development only",
    "gamedll": "Game DLL",
    "clientdll": "Client DLL",
    "hidden": "Hidden",
    "protected": "Protected",
    "sponly": "Singleplayer only",
    "archive": "Archive",
    "notify": "Notify",
    "userinfo": "User info",
    "something_that_hides": "Something that hides",
    "unlogged": "Unlogged",
    "missing1": "Missing 1",
    "missing2": "Missing 2",
    "missing3": "Missing 3",
    "missing4": "Missing 4",
    "replicated": "Replicated",
    "cheat": "Cheat",
    "per_user": "Per user",
    "demo": "Demo",
    "dontrecord": "Don't record",
    "release": "Release",
    "menubar_item": "Menubar item",
    "not_connected": "Not connected",
    "vconsole_fuzzy_matching": "VConsole fuzzy matching",
    "server_can_execute": "Server can execute",
    "server_cannot_query": "Server cannot query",
    "vconsole_set_focus": "VConsole set focus",
    "clientcmd_can_execute": "Clientcmd can execute",
    "execute_per_tick": "Execute per tick",
    "defensive": "Defensive",
}

export default (pageData) => {
    const flags = pageData.flags

    const commandFlags = [
        ["Flag", "Description"]
    ]

    for (const flag of flags) {
        commandFlags.push([
            `\`${flag}\``,
            `\`${flagDesc[flag]}\``
        ])
    }

    return markdownTable(commandFlags, {
        align: ['c', 'c'],
    })
}