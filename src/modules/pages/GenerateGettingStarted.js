import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateGettingStarted from "./getting-started/GenerateGettingStarted.js"

export default (pageData) => {
    const gettingStartedPage = FetchTemplates()["getting-started"]

    return gettingStartedPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{code}/g, GenerateGettingStarted(pageData))
}