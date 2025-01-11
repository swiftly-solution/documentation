import FetchTemplates from '../templates/FetchTemplates.js'

export default (pageData) => {
    const categoryPage = FetchTemplates()["category"]

    return categoryPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description)
}