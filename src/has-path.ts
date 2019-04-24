export const hasPath = (obj: any, path: string[]): boolean => {
    for (let prop of path) {
        if (obj[prop] === undefined) return false;

        obj = obj[prop];
    };

    return true;
}