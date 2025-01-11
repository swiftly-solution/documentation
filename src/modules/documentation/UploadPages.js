import { readFileSync } from 'fs';
import GetFiles from './GetFiles.js'
import axios from 'axios';
import { metadata } from "../../index.js"

export default async () => {
    const config = {
        headers: { Authorization: `Bearer ${process.env.AUTH_REMOTE_TOKEN}` }
    };

    const pages = GetFiles("output")
    let formattedData = {
        "getting-started": readFileSync("output/getting-started.md").toString()
    }

    for (const page of pages) {
        if (page.startsWith("output/getting-started")) continue;
        if (page.endsWith(".json")) continue
        formattedData[page.replace("output/", "").replace(/\//g, ".").replace(".md", "").replace(".README", "")] = readFileSync(page).toString()
    }

    await axios.post("https://beta.swiftlycs2.net/api/remote/docs/update-scripting", { pages: formattedData, metadata }, config)
}