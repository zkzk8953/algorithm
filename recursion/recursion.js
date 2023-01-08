// 10장 재귀를 사용한 재귀적 반복 (202p ~ 216p)

/**
 * 숫자를 매개변수로 받아 해당 숫자부터 0까지 출력해주는 함수 (~202p)
 * @param {*} number 
 */
function count (number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }
}

// count(20);

/**
 * 위의 함수를 루프대신 재귀를 사용하여 구현한 함수 (~203p)
 * @param {*} number 
 * @returns 
 */

function count (number) {
    console.log(number);

    if(number == 0) {
        return;
    }else {
        count(number -1);
    }
}

// count(20);

/**
 * 연습문제 1 (214p)
 * @param {*} low 
 * @param {*} high 
 * @returns 
 */
function sumNumber (low, high) {
    if(low > high) {
        // 기저조건
        // 왜 그냥 리턴을 하면 NaN 이 출력 되는가?
        return 0;
    }else {
        return low + sumNumber(low + 1, high);
    }
}

// console.log(sumNumber(1, 10));

/**
 * 연습문제 4 (215p)
 * @param {*} array 
 */
function printNumber(array) {
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] === "object") {
            printNumber(array[i]);
        }else {
            console.log(array[i]);
        }
    }
}

const array = [
    1,
    2,
    3,
    [4,5,6],
    7,
    [8,
        [9, 10, 11,
            [12, 13, 14]
        ]
    ],
    [15, 16, 17, 18, 19,
        [20, 21, 22,
            [23, 24, 25,
                [26, 27, 28, 29]
            ], 30, 31
        ], 32
    ], 33
];

// printNumber(array);