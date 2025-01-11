import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateSyntax from "./types-syntax/GenerateSyntax.js"

export default (pageData) => {
    const typeSyntaxPage = FetchTemplates()["types-syntax"]

    return typeSyntaxPage.replace(/{title}/g, pageData.title).replace(/{code}/g, GenerateSyntax(pageData))
}