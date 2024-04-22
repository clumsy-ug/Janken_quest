const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const result = document.getElementById('result');
const enemyresult = document.getElementById('enemyresult');
const nextpage = document.getElementById('nextpage');
let user = '';
let enemy = '';

rock.addEventListener('click', function () {
    user = this.id;
    randomEnemy();
    randomUser();
    compareFunc();
    disableButtons();
}, {
    once: true
});

scissors.addEventListener('click', function () {
    user = this.id;
    randomEnemy();
    randomUser();
    compareFunc();
    disableButtons();
}, {
    once: true
});

paper.addEventListener('click', function () {
    user = this.id;
    randomEnemy();
    randomUser();
    compareFunc();
    disableButtons();
}, {
    once: true
});

const randomEnemy = () => {
    const random = Math.random();
    if (random <= (1 / 3)) {
        enemy = 1;
    } else if (random <= (2 / 3)) {
        enemy = 2;
    } else {
        enemy = 3;
    }
}

const randomUser = () => {
    if (user === 'rock') {
        user = 1;
    } else if (user === 'scissors') {
        user = 2;
    } else {
        user = 3;
    }
}

const eachOther = () => {
    result.textContent = '結果：あいこ';
    result.style.color = 'green';
    nextpage.href = "http://127.0.0.1:5500/stage1/stage1.html";
    nextpage.textContent = "残念...。再戦する";
}

const lose = () => {
    result.textContent = '結果：負け';
    result.style.color = 'red';
    nextpage.href = "http://127.0.0.1:5500/stage1/stage1.html";
    nextpage.textContent = "残念...。再戦する";
}

const win = () => {
    result.textContent = '結果：勝ち';
    result.style.color = 'blue';
    nextpage.href = "http://127.0.0.1:5500/stage1/win.html";
    nextpage.textContent = "次へ進む";
}

const enemyRock = () => {
    enemyresult.textContent = 'グー';
}

const enemyPaper = () => {
    enemyresult.textContent = 'パー';
}

const enemyScissors = () => {
    enemyresult.textContent = 'チョキ';
}

const compareFunc = () => {
    if (enemy === user) {
        eachOther();
        if (enemy === 1) {
            enemyRock();
        } else if (enemy === 2) {
            enemyScissors();
        } else {
            enemyPaper();
        }
    } else if ((enemy === 1 && user === 2) || (enemy === 2 && user === 3) || (enemy === 3 && user === 1)) {
        lose();
        if (enemy === 1) {
            enemyRock();
        } else if (enemy === 2) {
            enemyScissors();
        } else {
            enemyPaper();
        }
    } else {
        win();
        if (enemy === 1) {
            enemyRock();
        } else if (enemy === 2) {
            enemyScissors();
        } else {
            enemyPaper();
        }
    }
}

function disableButtons() {
    rock.disabled = true;
    scissors.disabled = true;
    paper.disabled = true;
}
