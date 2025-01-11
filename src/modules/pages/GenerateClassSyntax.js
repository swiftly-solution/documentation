import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateClassSyntax from "./class-syntax/GenerateClassSyntax.js"

export default (pageData) => {
    const classSyntaxPage = FetchTemplates()["class-syntax"]

    return classSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{code}/g, GenerateClassSyntax(pageData))
}