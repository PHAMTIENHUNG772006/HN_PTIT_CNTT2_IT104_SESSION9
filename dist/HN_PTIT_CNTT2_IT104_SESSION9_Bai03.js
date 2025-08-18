"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
let person = { name: "Join" };
let job = { role: "Developer" };
console.log(mergeObjects(person, job));
//# sourceMappingURL=HN_PTIT_CNTT2_IT104_SESSION9_Bai03.js.map