import { allTypes } from "../../../index.js";

export default (type) => {
    if (type == "any") return "any"
    else if (type == "void") return "nil"
    else if (type.includes("/")) return type.split("/").map((p) => p.trim()).join("|");
    else if (allTypes.includes(type)) return `number ${type}`;
    else return type
}