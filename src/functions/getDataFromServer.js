import axios from "axios";
import { checkArrays } from "./checkHrefs";
import { deleteParameters } from "./deleteParameters";

export const getDataFromServer = async () => {
    const character = window.location.href.split("/");
    const res = await axios.get("http://swapi.dev/api/" + character[3] + (character[3] === "peoples" ? "people" : "") + "/" + character[4], { cache: true });
    const r = res.data;
    await deleteParameters(r);
    await checkArrays(r);
    return r;
}