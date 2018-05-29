export function isFunction(val) {
    return typeof val === 'function';
}

/**
 * A 'noop' or a function that does nothing
 * This allows for a single function to be created to be used everywhere
 * where a 'do nothing' function is needed.
 * 
 * An example usage is in defaultProps for react objects that accept an event
 * By using noop you can always safely call them without null checking.
 */
export const noop = (...args: any[]) => {};