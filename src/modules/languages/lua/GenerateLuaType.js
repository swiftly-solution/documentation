export default (type) => {
    if (type == "any") return "any"
    else if (type == "void") return "nil"
    else if (type.includes("/")) return type.split("/").map((p) => p.trim()).join("|");
    else return type
}