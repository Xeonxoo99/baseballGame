// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//  - 숫자의 값과 위치가 모두 일치하면 S
// - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

setAnswer();
// 랜덤 숫자 만들기
function setAnswer() { // setAnswer 이라는 함수 만들기
    let answer = ''; // 컴퓨터가 주는 최초 숫자는 공란으로 만들기
    while (answer.length < 3) { // answer이 3자리여야 함으로 인덱스가 0으로 시작하는 컴퓨터 언어에서는 3자리 수가 되기 전까지 반복 진행
        const randomNum = Math.floor(Math.random * 10); // 숫자를 무작위로 만들어야 하기에 random() 메소드를 사용 => 다만, 0.0 ~ 1.0의 사이의 수를 갖고오기에 //인수로 전달받은 값과 같거나 작은 수 중에서 가장 큰 정수를 반환 하는 floor()메소드를 사용 하여 0~9까지의 수를 갖고 올 수 있도록 함
        // 위 randomNum은 사용하는 법 다시 한 번 알아볼 필요 *******
        if (!answer.includes(randomNum)) answer += randomNum // 만약 answer이 공란이 아닌 경우 includes를 사용하여 randomNum이 있는지 확인? 이 후 answer = answer + randomNum???
    }
    let count = 0; // 몇 번 시도했는지 확인 할 수 있는 용도
    console.log(`컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!`); // 시작 시 나타나는 alert문구
    getValue(answer, count);
}

// 입력하기
function checkValue() {
    let promptObj = prompt(''); // JavaScript에서 prompt() 함수는 사용자에게 입력을 요청하는 프롬프트 상자를 화면에 표시하기 위해 사용
    if (value === null) {
        alert(`숫자를 입력하여 맞춰주세요!`);
        return false;
    } else if (value.match(/\D/)) {
        alert(`숫자는 3자리를 입력해주세요..ㅠ`);
        return checkValue()
    } else if (value.length > 3) {
        alert(`숫자는 3자리를 입력해주세요..ㅠ`);
        return checkValue()
    }
    return value;
}

function getValue(answer, count) {
    let value = checkValue()
    if (!value) return; // value가 안들어오면 다시 위로 돌아가는데, 돌아가면 checkValue가 기다린다. // 위에서 만들어둔 조건문에 따라, 알림이 나온다.
    count++; // value가 찍힐 수록? (36줄) count가 0에서부터 늘어난다. (18줄)
    console.log(`${count}번째 시도 : ${value}`); // 시도 횟수와, 본인이 무엇을 적었었는지 나온다.

    let s = 0, b = 0 // 스트라이크 , 볼 0으로 정해놀기
    let str = ''; // 
    value.split('').forEach((e, idx) => { // .split() 은 괄호 안에 있는 문자를 기준으로 분할함 / 왼쪽의 경우 공백
        if (answer.indexOf(e) === idx) s++; // indexOf()는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환 또한, 같은 요소가 2개라면 ('a',2) 등으로 다음 순서의 요소를 가져올 수 있다.
        // 만약 answer이 123 indexOf로 0번째가 1이면 s++ 반복하여 1번째 > 2번째 > else if
        else if (answer.split('').includes(e)) b++; // answer의 공백을 자르고 숫자 하나씩을 보았을 때 includes로 e에 같은 숫자가 있는 지 찾아봄
        // 만약 하나씩 나열 했는데, 0번째에 index에 위치 하지 않고, 숫자가  
    });
    
    if (s === 3) str = `${s}S`; // 스트라이크가 3개면 바로 콘솔로그
    else if (b === 3) str = `${b}B`; // 볼이 3개면 바로 콘솔로그
    else str = `${b}B${s}S`; //그것도 아니면 $볼 $스트라잌으로 콘솔로그
    console.log(str);
    answer !== value ? getValue(answer, count) : console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
    // 랜덤숫자와 입력값이 일치하지 않는다면 ? true (일치하지 않는다.) 본인이 적은 값과, 카운트가 표기 : false (일치한다.) count번만에 맞췄다고 alert띄우기
}