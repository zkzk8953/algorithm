// 숫자를 받아서 받은 숫자 부터 0까지 출력해주는 함수


// function count (number) {
//     for(let i = number; i >= 0; i--) {
//         console.log(i);
//     }
// }

// count(20);

// 재귀함수

// function count (number) {
//     console.log(number);

//     if(number == 0) {
//         return;
//     }else {
//         count(number -1);
//     }
// }

// count(20);

// 재귀 함수 연습 문제

function sumNumber (low, high) {
    if(low > high) {
        return 0;
    }else {
        return low + sumNumber(low + 1, high);
    }
}

console.log(sumNumber(1, 10))