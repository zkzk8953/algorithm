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
 * 전형적인 루프를 사용한 방법
 * 어떤 수의 계승을 계산하는 알고리즘
 */
function factorial_usual(num) {
    product = 1;

    for(let i = 0; i <= num; i++) {
        product *= i;
    }

    return product;
}

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

/**
 * 배열의 합
 * 주어진 배열 내의 모든 수를 합하는 알고리즘
 */
function arrSum(examArr) {
    if(examArr.length == 1) {
        return examArr[0];
    }else {
        return examArr[0] + arrSum(examArr.slice(1, examArr.length));
    }
}

// console.log(arrSum([1,2,3,4,5]));

/**
 * 문자열 뒤집기
 * 문자열을 뒤집는 reverse 함수를 재귀를 이용하여 작성
 */
function getreversedString(text) {
    if(text.length === 1) {
        return text[0];
    }else {
        return getreversedString(text.slice(1, text.length)) + text[0];
    }
}


// console.log(getreversedString("abc"));

/**
 * x 세기
 * 주어진 문자열에서 "x" 의 개수를 반환하는 함수
 */
function count_x(text, cnt) {
    if(text.length === 0) {
        return 0;
    }

    if(text[0] === "x") {
        return 1 + count_x(text.slice(1, text.length + 1));
    }else {
        return count_x(text.slice(1, text.length + 1));
    }
}

// console.log(count_x("xbxcxd"));

/**
 * 계단 문제
 * n개짜리 계단이 있고 누군가 한 번에 하나 혹은 둘, 세 계단까지 올라갈 수 있을 때
 * 계단 끝까지 올라가는 경로는 몇개 인지 찾는 알고리즘
 */
function number_of_path(n) {
    if(n < 0) return 0;
    else if(n === 1 || n === 0) return 1;
    else return number_of_path(n - 1) + number_of_path(n - 2) + number_of_path(n - 3);
}


// console.log(number_of_path(5));

/**
 * 애너그램 생성
 * 애너그램이란 문자열 내 모든 문자들을 재배열한 문자열이다.
 * 애너그램을 생성해주는 함수를 재귀를 사용해서 구현해보자
 */
function anagrams_of(text) {
    if(text.length === 1) return [...text[0]];

    let collection = [];

    let substring_anagrams = anagrams_of(text.slice(1, text.length + 1));

    // substring_anagrams.forEach((substring_anagram, index) => {
    //     substring_anagram.forEach((string, index2) => {
    //         let copy = substring_anagram;

    //         copy[index2].push(string);

    //         collection.push(copy);
    //     });
    // });

    for(let i = 0; i < substring_anagrams.length; i ++) {
        for(let j = 0; j < substring_anagrams[i].length; j++) {
            let copy = substring_anagrams[i];

            copy[j].push(substring_anagrams[j]);

            collection.push(copy);
        }
    }

    return collection;
}

// console.log("abcd"[0].push("d"));

/**
 * 연습문제 1
 * 문자열 배열을 받아 각 문자열에 쓰인 문자 개수를 반환하는 함수를 재귀적으로 작성하라
 */
function findStringNum (arr) {
    if(arr.length <= 1) {
        return arr[0].split("").length;
    }else {
        return arr[0].split("").length + findStringNum(arr.slice(1, arr.length + 1));
    }
}

/**
 * 연습문제 2
 * 수 배열을 받아 모든 문자열에 쓰인 문자 개수를 반환하는 함수를 재귀적으로 작성하라
 */
function selectEven (inputArr, outputArr = [], index = 0) {
    const newArr = [...outputArr];

    if(inputArr.length <= 1) {
        //base case

        if(inputArr[index] % 2 === 0) {
            newArr.push(inputArr[index])
        }

        return newArr;
    }else {

        if(inputArr[index] % 2 === 0) {
            newArr.push(inputArr[index])
        }

        return selectEven(inputArr.slice(1, inputArr.length + 1), newArr, index + 1);
    }
}

const testArr = [];


// console.log(selectEven(testArr));

/**
 * 연습문제 3 
 * '삼각수'라는 수열이 있다. 1, 3, 6, 10, 15, 21로 시작해 패턴 내 N번째 수까지 일정 패턴이 이어진다. 
 * N번째 값은 N에 바로 앞 숫자를 더한 값이다. 예를 들어 수열에서 7번째 수는 7에 21을 더한 28이다. 
 * 숫자 N을 받아 수열 내 올바른 값을 반환하는 함수를 작성하라. 즉 함수에 숫자 7을 전달하면 함수는 28을 반환해야 한다.
 */
function findTrNumber () {
    if(n < 1) {
        // base case
        // 0번째 값은 0
        return 0
    }else {
        // recursion
        // n번째 값은 n + 이전값
        return n + findTrNumber(n - 1);
    }
}

/**
 * 연습문제 4
 * 문자열을 받아 문자 "x"가 들어 간 첫 번째 인덱스를 반환하는 함수를 재귀적으로 작성하라.
 * 예를 들어 문자열 "abcdefghijklmnopqrstuvwxyz" 애서 "x"는 인덱스 23에 있다.
 * x는 무조건 한번 이상 나타난다.
 */
function findIndexOfX (str , i = 0) {
    if(str.split("")[i] === "x") {
        return i;
    }else {
        return findIndexOfX(str, i + 1);
    }
}

/**
 * 연습문제 5
 * "유일 경로"라고 불리는 문제가 있다. 행과 열로 이뤄진 격자판이 있다고 하자.
 * 행 수 와 열 수를 받아 왼쪽 맨 윗칸에서 오른쪽 맨 아랫칸까지 가는 "최단" 경로의 수를 계산하는 함수를 작성하라.
 */

function uniquePaths(rows, columns) {

    if(rows === 1 || columns === 1) {
        // base case
        // 행 OR 열이 1 이면 경로는 무조건 1
        return 1;
    }else { 
        return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns + 1);
    }
}