// 11장 재귀적으로 작성하는 법 (218p ~ 240p)

/**
 * 재귀 카테고리: 반복 실행
 * 재귀 트릭: 추가 인자 넘기기 
 * 숫자로 이루어진 배열을 매개변수로 받아 배열 내 각 숫자를 두 배로 만드는 알고리즘
 * @param {*} array 
 * @param {*} num 
 * @returns 
 */
function double_array(array, num) {
    if(num > array.length -1) {
        // 기저조건
        return;
    }else {
        array[num] *= 2;
        return double_array(array, num + 1);
    }
}

const arr = [2, 4, 6, 8, 10];

// double_array(arr, 0);

// console.log(arr);

/**
 * 재귀 카테고리: 계산
 * 하위 문제의 계산 결과에 기반해 계산해보기
 * 어떤 수의 계승을 계산하는 알고리즘
 */
function factorial(num) {
    if(num === 1) {
        return 1;
    }else {
        return num * factorial(num - 1);
    }
}

// console.log(factorial(3));