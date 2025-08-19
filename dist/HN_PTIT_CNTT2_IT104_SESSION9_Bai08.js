"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObject(keys, values) {
    if (keys.length !== values.length) {
        return;
    }
    let result = {};
    keys.forEach((key, index) => {
        result[key] = values[index];
    });
    return result;
}
const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
console.log(createObject(keys, values));
//# sourceMappingURL=HN_PTIT_CNTT2_IT104_SESSION9_Bai08.js.map