const anyTypes = ["CTypedBitVec", "uint32_t", "value", "C_", "CAttachmentNameSymbolWithStorage", "CAnimGraphTagOptionalRef", "uint8_t", "V_uuid_t", "PulseValueType_t"]

const GetType = (type) => {
    if (!type) return "any;"

    type = type.replace(new RegExp("nil", "g"), "null")
    type = type.replace("...)", "...args: any[])")
    if (type == "bool") type = "boolean"
    if (type.startsWith("bitfield:")) {
        return "any;";
    }
    for (const t of anyTypes) {
        if (type.includes(t)) return "any;"
    }

    if (type == "Player") return "IPlayer;";
    else if (type == "Memory") return "IMemory;";
    else if (type == "WeaponManager") return "IWeaponManager;"

    if (type.includes("EventResult|null")) type = type.replace("EventResult|null", "EventResult|void");

    if (type == "any") return "any;"
    else if (type == "void") return "null|undefined;"
    else if (type.startsWith("table")) {
        const split = type.split(" ");
        if (split.length == 1) return `${type.replace(new RegExp("table", "g"), "Object")};`
        else return `${split[0].replace(new RegExp("table", "g"), "Object[]")}; // ${split.filter((v, i) => i != 0).join(" ")}`
    }
    else if (type.includes("/")) return `${type.split("/").map((p) => p.trim()).join("|")};`;
    else if (type.includes("|") && !type.includes("fun")) return `${type};`;
    else if (type.includes("fun")) {
        if (type == "function") return `() => void;`
        else if (type == "fun(...args: any[])") return `(...args: any[]) => any;`
        else if (type.includes("):")) {
            const fun = type.split("):")
            return `${fun[0].replace("fun", "")}) => ${fun[1]};`
        } else if (type.includes(")|")) {
            const fun = type.split(")|")
            return `${fun[1].split(" ")[0]} | (${fun[0].replace("fun", "").replace(new RegExp("table", "g"), "Object[]")}) => void);`
        } else return `${type.replace("fun", "").replace(new RegExp("table", "g"), "Object[]")} => void;`
    } else if (type.includes(",")) {
        return `[${type}];`
    } else return `${type};`
}

export default (type) => {
    return `{${GetType(type).slice(0, -1)}}`;
}