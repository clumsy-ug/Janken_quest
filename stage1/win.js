const message = document.getElementById('message');
const changeTextElement = document.getElementById('change-text');
// const p1 = document.createElement('p');
// p1.textContent = `あいうえお\nかきくけこ`;
// console.log(p1.textContent);

const newTexts = [
    'デビルスライム「...だが、まだまだ我が同胞は残っている。彼らが必ず、お前の運を搾り取るはずだぁ！',
    'デビルスライム「うっ...くそぉぉ！くはっ...」',
];

let currentTextIndex = 0;
const aElement = document.createElement('a');
aElement.href = 'http://127.0.0.1:5500/stage2/start.html';
aElement.textContent = 'はじまりの地に戻る';

changeTextElement.addEventListener('click', () => {
    if (currentTextIndex >= newTexts.length) {
        return;
    }

    const newText = newTexts[currentTextIndex];

    // フェードイン効果を追加
    const fadeDuration = 500;
    const fadeStep = 0.01;

    message.textContent = newText;
    message.style.opacity = 0;
    message.style.visibility = 'visible';

    let opacity = 0;
    const intervalId = setInterval(() => {
        opacity = Math.min(1, opacity + fadeStep);
        message.style.opacity = opacity;

        if (opacity === 1) {
            clearInterval(intervalId);
            currentTextIndex++;

            if (currentTextIndex === newTexts.length) {
                message.parentNode.appendChild(aElement); // 最後のテキストが表示されたらa要素を追加
            }
        }
    }, fadeDuration / (1 / fadeStep));
});
