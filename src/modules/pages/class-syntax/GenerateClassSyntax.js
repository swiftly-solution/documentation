import FetchPrettyNames from "../../languages/FetchPrettyNames.js"
import GenerateFunctionParameters from "../function-syntax/GenerateFunctionParameters.js"
import ProcessParameters from "../function-syntax/ProcessParameters.js"
import GenerateClassFunctions from "./GenerateClassFunctions.js"
import GenerateClassProperties from "./GenerateClassProperties.js"

export default (pageData) => {
	const prettyNames = FetchPrettyNames()
	const langs = pageData.languages.filter((v) => prettyNames[v] != undefined)
	const tabtriggers = []
	const tabcontents = []

	const str = `<Tabs defaultValue="{defaultValue}">
	<TabsList class="grid w-full grid-cols-${langs.length}">
	{tabtriggers}
	</TabsList>
{tabcontents}
</Tabs>`

	for (const lang of langs) {
		const props = GenerateClassProperties(pageData, lang)
		tabtriggers.push(`    <TabsTrigger value="${lang}">${prettyNames[lang]}</TabsTrigger>`)
		tabcontents.push(`  <TabsContent value="${lang}">
${pageData.constructor.hide == true ? "" : `# Constructor
\`\`\`${lang}${GenerateFunctionParameters(pageData.constructor, lang)}${lang == "js" ? `\n */` : ""}
${pageData.constructor.hasOwnProperty("ptr_or_class") ? "sdk." : ""}${pageData.title}(${ProcessParameters(pageData.constructor, lang)})
\`\`\``}
${props}${props == "" ? "" : "\n"}${GenerateClassFunctions(pageData, lang)}\n${pageData.additional[lang] ? pageData.additional[lang] + "\n" : ""}
  </TabsContent>`)
	}

	return str.replace(/{defaultValue}/g, langs[0]).replace(/{tabtriggers}/g, tabtriggers.join("\n")).replace(/{tabcontents}/g, tabcontents.join("\n"))
}