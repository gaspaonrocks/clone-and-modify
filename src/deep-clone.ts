export const deepClone = (src): object =>
    Object
        .entries(src)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: this.deepClone(src[key]) }), {});