import { existsSync, readFileSync } from 'fs';
import GetFiles from './GetFiles.js'
import axios from 'axios';
import { metadata } from "../../index.js"

export default async (folder) => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.AUTH_REMOTE_TOKEN}` }
    };

    const pages = GetFiles(folder)
    let formattedData = {}

    if (existsSync(`${folder}/getting-started.md`)) {
        formattedData["getting-started"] = readFileSync(`${folder}/getting-started.md`).toString()
    }

    for (const page of pages) {
        if (page.startsWith(`${folder}/getting-started`)) continue;
        if (page.endsWith(".json")) continue
        formattedData[page.replace(`${folder}/`, "").replace(/\//g, ".").replace(".md", "").replace(".README", "")] = readFileSync(page).toString()
    }

    const updateCategory = folder.split("-")[1]

    await axios.post(`https://beta.swiftlycs2.net/api/remote/docs/update`, { pages: formattedData, metadata, startingKey: updateCategory, category: (updateCategory == "scripting" ? "plugin" : "sdk") }, config)
}