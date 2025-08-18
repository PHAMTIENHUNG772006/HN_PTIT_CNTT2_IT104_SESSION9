"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstMatch(array, predicate) {
    for (const element of array) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}
const result1 = firstMatch([1, 2, 4, 6], (n) => n % 2 === 0);
console.log(result1);
const result2 = firstMatch(["cat", "house", "car"], (word) => word.length > 4);
console.log(result2);
//# sourceMappingURL=HN_PTIT_CNTT2_IT104_SESSION9_Bai06.js.map