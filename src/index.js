import { existsSync, mkdirSync, rm, writeFileSync } from "fs";
import FetchData from "./modules/data/FetchData.js";
import GeneratePage from "./modules/pages/GeneratePage.js";
import { config } from "dotenv";
import UploadPages from "./modules/documentation/UploadPages.js";

const data = FetchData()
config()

var generatedFiles = 0

const ProcessData = (data, subfolder) => {
    for (var key of Object.keys(data)) {
        const fl = key.replace(new RegExp(":", "g"), "_")
        const page = GeneratePage(data[key], `${subfolder}${fl}`.replace(/\//g, "."))
        generatedFiles++

        if (data[key].template == "category") {
            mkdirSync(`output/${subfolder}${fl}`, { recursive: true })
            if (!existsSync(`output/${subfolder}${fl}/README.md`)) writeFileSync(`output/${subfolder}${fl}/README.md`, page)
            ProcessData(data[key].data, `${subfolder}${fl}/`)
        } else {
            if (page == "") continue;
            writeFileSync(`output/${subfolder}${fl}.md`, page)
        }
    }
}

export var metadata = {}

rm("output", { recursive: true }, async () => {
    var start = Date.now()
    mkdirSync("output")
    ProcessData(data, "")
    writeFileSync("output/metadata.json", JSON.stringify(metadata))
    console.log(`[Swiftly] [Documentation] ${generatedFiles} pages were generated. (${Date.now() - start}ms)`)
    start = Date.now()
    console.log(`[Swiftly] [Documentation] Uploading pages...`)
    await UploadPages()
    console.log(`[Swiftly] [Documentation] ${generatedFiles} pages were uploaded. (${Date.now() - start}ms)`)
})