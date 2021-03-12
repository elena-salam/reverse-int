module.exports = function reverse (n) {
    const y =Math.abs(n)
    const a =  String(y).split('').map(Number).reverse().join('');
    return a;
   
}  