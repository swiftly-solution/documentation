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

config();

export var metadata = {};

(async () => {
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