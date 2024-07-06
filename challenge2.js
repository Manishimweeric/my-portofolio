function ArrayManipulation(arraynumber, target) {
    let startindex = 0;
    let summation = 0;

    for (let a = 0; a < arraynumber.length; a++) {
        sum += arraynumber[a];
        while (summation > target && startindex <= a) {
            summation - arraynumber[startindex];
            startindex++;
        }
        if (summation === target) {
            return true;
        }
    }
    return false;
}
const arraynumber = [4,2,7,1,9,5];
const target = 17;
console.log(ArrayManipulation(arraynumber, target)); 
