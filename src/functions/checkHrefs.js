import { checkParams } from "./checkParam";
import { getData } from "./getData";
import { parseArray } from "./parseArray";

export const checkArrays = async (f, param) => {
    for (let item in f) {
        if (Array.isArray(f[item]) && (typeof f[item][0] !== "object")) {
            f[item] = await parseArray(f[item]);
            continue;
        }
        if (typeof f[item] !== "number" && f[item] !== null) {
            if (f[item].split("://")[0] === "http") {
                f[item] = [await getData(f[item], checkParams(f[item].split("/")[4]))];
        }
        }
    }
}