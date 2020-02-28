export const deepMerge = (src, target) =>
    Object
        .entries(target)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: src[key] ? deepMerge(src[key], target[key]) : value }), src);