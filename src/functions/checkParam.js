export const checkParams = (s) => {
    switch (s) {
        case "people":
            return "name";
        case "films":
            return "title";
        case "starships":
            return "model";
        case "vehicles":
            return "model";
        case "planets":
            return "name";
        case "species":
            return "name";
        case "resident":
            return "name";
    }
}