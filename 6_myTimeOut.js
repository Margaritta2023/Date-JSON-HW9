    function  myTimeOut(callBack, interval) {

        if ( interval < 0 || typeof(interval) != 'number' ) throw new Error("The interval must be positive number");
        
        let now = Date.now();

        function countTime() {
            if (Date.now() - now >= interval) callBack();
            else requestIdleCallback(countTime);
        }

        requestIdleCallback(countTime);

        }
    
    const fn = () => console.log("hello")

    console.log(myTimeOut(fn, 500) )