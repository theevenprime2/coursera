function listPrimes(num) {
    var primes = [];
    for(var n = 2;  num > 0;  n++) {
        if(isPrime(n)) {
            primes.push(n);
            --num;
        }
    }
    return primes;
}

function isPrime(n) {
    var max = Math.sqrt(n);
    for(var i = 2;  i <= max;  i++) {
        if( n % i === 0 )
            return false;
    }
    return true;
}

var fs = require('fs');
fs.writeFileSync('primes.txt', listPrimes(100));
