"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegate = delegate;
/**
 * Creates a new function that, when called, will call each of the provided functions and return an array of their results.
 * @typeParam TResult The type of the result provided by the functions.
 * @typeParam TArgs The tuple type of the arguments passed into the function.
 * @param funcs The functions to call when the returned function is called.
 */
function delegate(...funcs) {
    return (...args) => funcs.map(func => func(...args));
}
//# sourceMappingURL=delegate.js.map