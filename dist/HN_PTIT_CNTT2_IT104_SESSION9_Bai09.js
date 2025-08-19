"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterByType(array, type) {
    let arrayobj = [];
    array.forEach(e => {
        if (type.includes(typeof e)) {
            arrayobj.push(e);
        }
    });
    console.log(arrayobj);
}
const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
filterByType(mixedArray, ['number', 'string']);
// const mixedArray1 = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
// filterByType(mixedArray1, ['object']);
//# sourceMappingURL=HN_PTIT_CNTT2_IT104_SESSION9_Bai09.js.map