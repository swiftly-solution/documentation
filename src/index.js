import CoreClassGenerator from "./generator/CoreClassGenerator.js";
import ScriptingGenerator from "./generator/ScriptingGenerator.js";
import FetchData from "./modules/data/FetchData.js";
import { config } from "dotenv";

config();

export var metadata = {};

(async () => {
    await ScriptingGenerator(FetchData("scripting"))
    metadata = {}
    await CoreClassGenerator(FetchData("coreclass"))
})();