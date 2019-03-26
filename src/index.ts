import {
    clone,
    lensPath,
    set,
} from 'ramda';

const cloneAndModify = (initialObject, pathsArray, newValue) => set(lensPath(pathsArray), newValue, clone(initialObject));
const deepClone = (src, target) => Object.entries(target).reduce((acc, [key, value]) => {
    if (src[key]) return { ...acc, [key]: deepClone(src[key], target[key]) };
    else return { ...acc, [key]: value }
}, src)

export {
    cloneAndModify,
    deepClone
};