import {
    clone,
    lensPath,
    set,
} from 'ramda';

const cloneAndModify = (initialObject, pathsArray, newValue) => set(lensPath(pathsArray), newValue, clone(initialObject));

export default cloneAndModify;