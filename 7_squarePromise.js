function squarePromise (promise) {
    try {promise}
    catch(error){
        console.log( error.message )
    }

 if (typeof promise === "number") return promise*promise;
 let parsed = parseInt(promise);

 if (typeof promise !== "number"  && typeof parsed === "number" && !isNaN(parsed)) return parsed * parsed ;
 return `Can not convert ${promise} to a number!`
}

console.log( squarePromise(2))
console.log( squarePromise("-2a"))
console.log( squarePromise("a2"))
console.log( squarePromise({}))


