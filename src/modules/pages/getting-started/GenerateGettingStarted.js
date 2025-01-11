import FetchPrettyNames from "../../languages/FetchPrettyNames.js"

export default (pageData) => {
    const prettyNames = FetchPrettyNames()
    const langs = Object.keys(pageData.content).filter((v) => prettyNames[v] != undefined)
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
${pageData.content[lang]}
  </TabsContent>`)
    }

    return str.replace(/{defaultValue}/g, langs[0]).replace(/{tabtriggers}/g, tabtriggers.join("\n")).replace(/{tabcontents}/g, tabcontents.join("\n"))
}