import { allTypes } from "../../../index.js";

export default (type) => {
    if(!type) return "{*}"

    type = type.replace(new RegExp("nil", "g"), "null")

    if (type == "any") return "{*}"
    else if (type == "void") return "{(null|undefined)}"
    else if (type.startsWith("table")) {
        const split = type.split(" ");
        if(split.length == 1) return `{${type.replace(new RegExp("table", "g"), "Object")}}`
        else return `{${split[0].replace(new RegExp("table", "g"), "Object[]")}} ${split.filter((v, i) => i != 0).join(" ")}`
    }
    else if (type.includes("/")) return `{(${type.split("/").map((p) => p.trim()).join("|")})}`;
    else if (type.includes("|")) return `{(${type})}`;
    else if (allTypes.includes(type)) return `{number} ${type}`;
    else return `{${type}}`
}