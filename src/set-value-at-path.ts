export const setValueAtPath = (obj: any, path: string[], value: any): void => {
    const len: number = path.length;

    for (let i: number = 0; i < len - 1; i++) {
        let elem: any = path[i];
        if (!obj[elem]) obj[elem] = {}

        obj = obj[elem];
    }

    obj[path[len - 1]] = value;
};