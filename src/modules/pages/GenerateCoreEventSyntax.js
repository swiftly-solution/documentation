import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateCoreEventSyntax from "./core-event-syntax/GenerateCoreEventSyntax.js"

export default (pageData) => {
    const coreEventSyntaxPage = FetchTemplates()["core-event-syntax"]

    return coreEventSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{code}/g, GenerateCoreEventSyntax(pageData))
}