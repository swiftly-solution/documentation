import FetchPrettyNames from "../../languages/FetchPrettyNames.js"
import GenerateFunctionParameters from "../function-syntax/GenerateFunctionParameters.js"
import ProcessParameters from "../function-syntax/ProcessParameters.js"
import GenerateFunctionReturn from "../function-syntax/GenerateFunctionReturn.js"
import GenerateType from "../../languages/GenerateType.js"

export default (pageData) => {
    const prettyNames = FetchPrettyNames()
    const langs = Object.keys(pageData.return).filter((v) => prettyNames[v] != undefined)
    const tabtriggers = []
    const tabcontents = []

    const str = `<Tabs defaultValue="{defaultValue}">
  <TabsList class="grid w-full grid-cols-${langs.length}">
    {tabtriggers}
  </TabsList>
{tabcontents}
</Tabs>`

    for (const lang of langs) {
        tabtriggers.push(`    <TabsTrigger value="${lang}">${prettyNames[lang]}</TabsTrigger>`)
        tabcontents.push(`  <TabsContent value="${lang}">
\`\`\`${lang}${GenerateFunctionParameters({ "event": "Event", ...pageData.params }, lang)}
${GenerateFunctionReturn({ [lang]: "EventResult" }, lang)}
${lang == "lua" ? `--- @event returns ${GenerateType(pageData.return[lang], lang)} via event:SetReturn` : ""}
AddEventHandler("${pageData.title}", function(${ProcessParameters({ "event": "Event", ...pageData.params }, lang)})\n    --[[ ... ]]\n    return EventResult.Continue\nend)
\`\`\`
${pageData.additional[lang] || ""}
  </TabsContent>`)
    }

    return str.replace(/{defaultValue}/g, langs[0]).replace(/{tabtriggers}/g, tabtriggers.join("\n")).replace(/{tabcontents}/g, tabcontents.join("\n"))
}