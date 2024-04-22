const message = document.getElementById('message');
const changeTextElement = document.getElementById('change-text');

const newTexts = [
    'パンプキーン「お前になら、俺の夢も もしかすると...',
    'パンプキーン「いや、なんでもない。気にするな。戦いで疲れただろう。ゆっくり休むといい。',
    'パンプキーン「本当の戦いは、ここからだからな...。',
];

let currentTextIndex = 0;
const aElement = document.createElement('a');
aElement.href = 'http://127.0.0.1:5500/stage2/inn.html';
aElement.textContent = '宿屋で休む';

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
