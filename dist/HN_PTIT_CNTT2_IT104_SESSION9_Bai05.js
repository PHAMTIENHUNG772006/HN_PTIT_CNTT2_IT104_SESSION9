"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataStore {
    data;
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(indexfind) {
        if (indexfind >= 0 && indexfind < this.data.length) {
            this.data.splice(indexfind, 1);
            console.log("Đã xoá");
        }
        else {
            console.log("không tìm thấy");
        }
    }
}
let data1 = new DataStore([]);
data1.add("hello");
data1.add(1);
data1.add(false);
console.log(data1.getAll());
data1.remove(1);
console.log(data1.getAll());
//# sourceMappingURL=HN_PTIT_CNTT2_IT104_SESSION9_Bai05.js.map