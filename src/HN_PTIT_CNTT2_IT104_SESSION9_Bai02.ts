function wrapInArray<T>(aray:T):T[]{
    let array:T[] = [];
    array.push(aray);
    return array;
}


console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a: 1 }));
