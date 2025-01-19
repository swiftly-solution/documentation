import CoreClassGenerator from "./generator/CoreClassGenerator.js";
import ScriptingGenerator from "./generator/ScriptingGenerator.js";
import SDKClassGenerator from "./generator/SDKClassGenerator.js";
import GameEventsGenerator from "./generator/GameEventsGenerator.js"
import CoreTypesGenerator from "./generator/CoreTypesGenerator.js";
import SDKTypesGenerator from "./generator/SDKTypesGenerator.js";
import CommandsGenerator from "./generator/CommandsGenerator.js";
import ConvarsGenerator from './generator/ConvarsGenerator.js'
import FetchData from "./modules/data/FetchData.js";
import { config } from "dotenv";
import { readFileSync } from "fs";

config();

export var metadata = {};
export var allTypes = [];

(async () => {
    allTypes = Object.values(JSON.parse(readFileSync("data/coretypes/data.json").toString())).map((v) => v.title)
    allTypes.push(...Object.values(JSON.parse(readFileSync("data/sdktypes/data.json").toString())).map((v) => v.title))

    await ScriptingGenerator(FetchData("scripting"))
    metadata = {}
    await CoreClassGenerator(FetchData("coreclass"))
    metadata = {}
    await SDKClassGenerator(FetchData("sdkclass"))
    metadata = {}
    await GameEventsGenerator(FetchData("gameevents"))
    metadata = {}
    await CoreTypesGenerator(FetchData("coretypes"))
    metadata = {}
    await SDKTypesGenerator(FetchData("sdktypes"))
    metadata = {}
    await CommandsGenerator(FetchData("commands"))
    metadata = {}
    await ConvarsGenerator(FetchData("convars"))
})();