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
            mkdirSync(`output-gameevents/${subfolder}${fl}`, { recursive: true })
            if (!existsSync(`output-gameevents/${subfolder}${fl}/README.md`)) writeFileSync(`output-gameevents/${subfolder}${fl}/README.md`, page)
            ProcessData(data[key].data, `${subfolder}${fl}/`)
        } else {
            if (page == "") continue;
            writeFileSync(`output-gameevents/${subfolder}${fl}.md`, page)
        }
    }
}

export default async (data) => {
    try {
        rmSync("output-gameevents", { recursive: true })
    } catch (err) { }
    var start = Date.now()
    mkdirSync("output-gameevents")
    ProcessData(data, "")
    writeFileSync("output-gameevents/metadata.json", JSON.stringify(metadata))
    console.log(`[Swiftly] [Documentation - Game Events] ${generatedFiles} pages were generated. (${Date.now() - start}ms)`)
    start = Date.now()
    console.log(`[Swiftly] [Documentation - Game Events] Uploading pages...`)
    await UploadPages("output-gameevents")
    console.log(`[Swiftly] [Documentation - Game Events] ${generatedFiles} pages were uploaded. (${Date.now() - start}ms)`)
}