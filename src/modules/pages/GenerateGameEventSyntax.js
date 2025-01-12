import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateGameEventSyntax from "./game-event-syntax/GenerateGameEventSyntax.js"
import GenerateGameEventArguments from "./game-event-syntax/GenerateGameEventArguments.js"

export default (pageData) => {
    const gameEventSyntaxPage = FetchTemplates()["game-event-syntax"]

    return gameEventSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{code}/g, GenerateGameEventSyntax(pageData)).replace(/{arguments}/g, GenerateGameEventArguments(pageData))
}