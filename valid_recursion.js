let gcd = function(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

// 45, 54
// 54, 45
// 45, 9
// 9, 0
// 9 

