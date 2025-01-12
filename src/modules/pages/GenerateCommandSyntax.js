import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateCommandFlags from "./command-syntax/GenerateCommandFlags.js"

export default (pageData) => {
    const commandSyntaxPage = FetchTemplates()["command-syntax"]

    return commandSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{command}/g, pageData.title).replace(/{arguments}/g, pageData.args).replace(/{flags}/g, GenerateCommandFlags(pageData))
}