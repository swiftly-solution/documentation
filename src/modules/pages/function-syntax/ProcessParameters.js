export default (params, language) => {
    const returnParams = [];
    for (const paramkey of Object.keys(params)) {
        let forlang = language;
        let name = paramkey
        if (paramkey.includes("/")) {
            forlang = paramkey.split("/")[0];
            name = paramkey.split("/")[1];
        }

        if (forlang == language) {
            if (language == "lua") returnParams.push(`${name}`)
        }
    }
    return returnParams.join(", ");
}