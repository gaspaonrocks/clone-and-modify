export const pathOrDefault = (obj: any, path: string[], defaultValue: any = undefined): any => {
    let value = { ...obj };
    for (let prop of path) {
        if (!value[prop]) return defaultValue;

        value = value[prop];
    };
    return value;
}