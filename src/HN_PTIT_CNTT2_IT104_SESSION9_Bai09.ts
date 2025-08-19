function filterByType(array: any[],type: string[]):void{
    let arrayobj: any[] = [];
    array.forEach(e => {
        if (type.includes(typeof e)) {
            arrayobj.push(e);
        }
    })
    console.log(arrayobj);
}


const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];

filterByType(mixedArray, ['number', 'string']);


// const mixedArray1 = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];

// filterByType(mixedArray1, ['object']);