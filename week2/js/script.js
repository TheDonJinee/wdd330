const numRec = document.querySelector('input#numVal');
function showEntry(){
    let newVal = numRec.value;
    let sum = 0;
    for(i = 0; i <= newVal; i++) {
        sum += i
    }
    document.querySelector('.show').innerHTML = sum;
}