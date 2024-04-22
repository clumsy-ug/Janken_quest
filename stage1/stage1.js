const message = document.getElementById('message');
const changeTextElement = document.getElementById('change-text');
// const p1 = document.createElement('p');
// p1.textContent = `あいうえお\nかきくけこ`;
// console.log(p1.textContent);

const newTexts = [
    '＊「ん...？んん...？？んんん...？？',
    '＊「おお！！！人間じゃねぇか！！',
    '＊「おいおいおい...何年ぶりだよ、生の人間はあ！',
    '＊「あのかぼちゃ野郎のせいで、仲間とはぐれちまったし、遠いところに飛ばされちまって、獲物が全然見つからなかったが...',
    '＊「ラッキーだぜぇ。あのかぼちゃ野郎を殺すのは、お前の運を搾り取ってからだぁぁ！！」',
];

let currentTextIndex = 0;
const aElement = document.createElement('a');
aElement.href = 'http://127.0.0.1:5500/stage1/fight.html';
aElement.textContent = '戦う';

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
