function mySub(num1, num2) {

    let i = 0;
    if (num1 > num2) {
        while (num1 > num2) {
            i++;
            num1--;
        }
        return(i)
    }else{
        while (num2 > num1) {
            i++;
            num2--;

        }
        return(-i);
    }
    
}
mySub(8, 6)