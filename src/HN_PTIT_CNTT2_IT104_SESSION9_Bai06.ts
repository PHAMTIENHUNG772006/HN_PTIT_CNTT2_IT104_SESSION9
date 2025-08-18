

function firstMatch<T>(array:T[],predicate:(item :T) => boolean):T | undefined{
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