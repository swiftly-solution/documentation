import FetchTemplates from "../templates/FetchTemplates.js"
import GenerateFunctionCode from "./function-syntax/GenerateFunctionCode.js"

export default (pageData) => {
    const functionSyntaxPage = FetchTemplates()["function-syntax"]

    return functionSyntaxPage.replace(/{title}/g, pageData.title).replace(/{description}/g, pageData.description).replace(/{code}/g, GenerateFunctionCode(pageData))
}