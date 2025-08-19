function  createObject<K extends string, V>(keys: K[], values: V[]): Record<K, V>| undefined{
    if (keys.length !== values.length) {
        return;
    }

    let result = {} as Record<K,V>;

    keys.forEach((key,index) => {
        result[key] = values[index] as V;
    })
    return result;
}


const keys = ['name', 'age', 'email'];

const values = ['Alice', 25, 'alice@example.com'];

console.log(createObject(keys, values));
