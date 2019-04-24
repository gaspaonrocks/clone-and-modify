export const deepClone = (src, target): object =>
    Object
        .entries(target)
        .reduce((acc, [key, value]) => {
            if (src[key]) return { ...acc, [key]: this.deepClone(src[key], target[key]) };
            else return { ...acc, [key]: value }
        }, src);