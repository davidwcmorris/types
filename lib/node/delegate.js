"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegate = delegate;
/**
 * Creates a new delegate that, when called, will call each of the provided delegates and return an array of their results.
 * @typeParam TResult The type of the result provided by the functions.
 * @typeParam TArgs The tuple type of the arguments passed into the function.
 * @param delegates The delegates to call when the returned delegate is called.
 */
function delegate(...delegates) {
    return (...args) => delegates.map(delegate => delegate(...args));
}
//# sourceMappingURL=delegate.js.map