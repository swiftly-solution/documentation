import GenerateCategory from "./GenerateCategory.js"
import GenerateFile from "./GenerateFile.js"
import GenerateFunctionSyntax from "./GenerateFunctionSyntax.js"
import GenerateGettingStarted from './GenerateGettingStarted.js'
import GenerateClassSyntax from './GenerateClassSyntax.js'
import GenerateCoreEventSyntax from './GenerateCoreEventSyntax.js'
import GenerateTypeSyntax from './GenerateTypeSyntax.js'
import GenerateDescription from './GenerateDescription.js'
import GenerateGameEventSyntax from './GenerateGameEventSyntax.js'
import GenerateCommandSyntax from "./GenerateCommandSyntax.js"
import { metadata } from "../../index.js"

export default (pageData, pageKey) => {
    metadata[pageKey] = { icon: pageData.icon || "", title: pageData.title }

    if (pageData.file != undefined) return GenerateFile(pageData)
    if (pageData.template == "category") return GenerateCategory(pageData)
    if (pageData.template == "function-syntax") return GenerateFunctionSyntax(pageData)
    if (pageData.template == "getting-started") return GenerateGettingStarted(pageData)
    if (pageData.template == "class-syntax") return GenerateClassSyntax(pageData)
    if (pageData.template == "core-event-syntax") return GenerateCoreEventSyntax(pageData)
    if (pageData.template == "game-event-syntax") return GenerateGameEventSyntax(pageData)
    if (pageData.template == "types-syntax") return GenerateTypeSyntax(pageData)
    if (pageData.template == "description") return GenerateDescription(pageData)
    if (pageData.template == "command-syntax") return GenerateCommandSyntax(pageData)
}