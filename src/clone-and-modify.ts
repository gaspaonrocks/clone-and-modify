import {
    clone,
    lensPath,
    set,
} from 'ramda';

export const cloneAndModify = (initialObject, pathsArray, newValue) => set(lensPath(pathsArray), newValue, clone(initialObject));