import FetchPrettyNames from "../../languages/FetchPrettyNames.js"
import GenerateFunctionParameters from "./GenerateFunctionParameters.js"
import GenerateFunctionReturn from "./GenerateFunctionReturn.js"
import ProcessParameters from "./ProcessParameters.js"

export default (pageData) => {
	const prettyNames = FetchPrettyNames()
	const langs = Object.keys(pageData.variable).filter((v) => prettyNames[v] != undefined)
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
\`\`\`${lang}${GenerateFunctionParameters(pageData.params, lang)}
${GenerateFunctionReturn(pageData.return, lang)}
${pageData.variable[lang]}(${ProcessParameters(pageData.params, lang)})
\`\`\`
${pageData.additional[lang] ? pageData.additional[lang] + "\n" : ""}
  </TabsContent>`)
	}

	return str.replace(/{defaultValue}/g, langs[0]).replace(/{tabtriggers}/g, tabtriggers.join("\n")).replace(/{tabcontents}/g, tabcontents.join("\n"))
}