/**
 * Inspired by lodash partition.
 * Creates an array of elements split into two groups, the first of which contains elements predicate returns 
 * truthy for, the second of which contains elements predicate returns falsey for. 
 * The predicate is invoked with one argument: (value).
 * @param {*} vals 
 * @param {*} predicate 
 */
export function partition(vals, predicate: (val: any) => bool ) {
    const valsAsArray = Array.isArray(vals) ? vals : Object.values(vals);

    return valsAsArray.reduce((partitioned, val) => {
        if (predicate(val)) {
            partitioned[0].push(val);
        } else {
            partitioned[1].push(val);
        }
        return partitioned;
    }, [[], []]);
}