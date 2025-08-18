function withDefault<T>(value?:T | undefined):T | string{
    return value === undefined ? "default" : value;
}


console.log(withDefault());        
console.log(withDefault(42));      
console.log(withDefault(true)); 