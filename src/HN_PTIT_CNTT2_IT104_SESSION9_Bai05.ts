class DataStore <T = unknown>{
    private data:T[];
    constructor(data:T[]){
        this.data = data;
    }
    add(item:T) : void{
        this.data.push(item);
    }

    getAll(): T[]{
        return this.data;
    }

    remove(indexfind:number):void {
       if(indexfind >= 0 && indexfind < this.data.length){
        this.data.splice(indexfind,1);
        console.log("Đã xoá");
       }else{
        console.log("không tìm thấy");
       }
    }
}

let data1 = new DataStore<unknown>([]);
data1.add("hello");
data1.add(1);
data1.add(false);

console.log(data1.getAll());
data1.remove(1);
console.log(data1.getAll());

