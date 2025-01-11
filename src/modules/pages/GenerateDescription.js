import FetchTemplates from "../templates/FetchTemplates.js"

export default (pageData) => {
    const typeSyntaxPage = FetchTemplates()["description"]

    return typeSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description)
}