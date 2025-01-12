import { existsSync, mkdirSync, rmSync, writeFileSync } from "fs";
import GeneratePage from "../modules/pages/GeneratePage.js";
import UploadPages from "../modules/documentation/UploadPages.js";
import { metadata } from "../index.js";

var generatedFiles = 0

const ProcessData = (data, subfolder) => {
    for (var key of Object.keys(data)) {
        const fl = key.replace(new RegExp(":", "g"), "_")
        const page = GeneratePage(data[key], `${subfolder}${fl}`.replace(/\//g, "."))
        generatedFiles++

        if (data[key].template == "category") {
            mkdirSync(`output-coretypes/${subfolder}${fl}`, { recursive: true })
            if (!existsSync(`output-coretypes/${subfolder}${fl}/README.md`)) writeFileSync(`output-coretypes/${subfolder}${fl}/README.md`, page)
            ProcessData(data[key].data, `${subfolder}${fl}/`)
        } else {
            if (page == "") continue;
            writeFileSync(`output-coretypes/${subfolder}${fl}.md`, page)
        }
    }
}

export default async (data) => {
    try {
        rmSync("output-coretypes", { recursive: true })
    } catch (err) { }
    var start = Date.now()
    mkdirSync("output-coretypes")
    ProcessData(data, "")
    writeFileSync("output-coretypes/metadata.json", JSON.stringify(metadata))
    console.log(`[Swiftly] [Documentation - Core Types] ${generatedFiles} pages were generated. (${Date.now() - start}ms)`)
    start = Date.now()
    console.log(`[Swiftly] [Documentation - Core Types] Uploading pages...`)
    await UploadPages("output-coretypes")
    console.log(`[Swiftly] [Documentation - Core Types] ${generatedFiles} pages were uploaded. (${Date.now() - start}ms)`)
}