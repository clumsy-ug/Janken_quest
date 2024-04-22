const message = document.getElementById('message');
const changeTextElement = document.getElementById('change-text');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const newTexts = [
    'パンプキーン「それよりも、お前にはさっそく向かってほしい場所がある。',
    'パンプキーン「その名も『炎の洞窟』だ。',
    'パンプキーン「そこには手ごわいモンスターがいる。お前の次の標的はそいつだ。',
    'パンプキーン「すまんが、ゆっくりと説明している時間はない。こうしている間にもやつらの侵略は進む一方だ。',
    'パンプキーン「覚悟ができたら、『炎の洞窟』へ向かってくれ。',
];

document.addEventListener('DOMContentLoaded', () => {
    changeTextElement.style.display = 'none';
});

function clickFunc() {
    if (this.id === 'yes') {
        newTexts.unshift('パンプキーン「いや、なんでもない。気にするな。');
        newTexts.unshift('パンプキーン「お前になら、俺の夢も もしかすると...');
        newTexts.unshift('パンプキーン「正直、もう戻らないとすら思っていたが、お前の顔を見て安心したよ。');
        newTexts.unshift('パンプキーン「はっはっは。やっぱりな。お前の顔を見てわかってたよ。本当に心強いやつだ。');
    } else {
        newTexts.unshift('パンプキーン「だが、お前は戦わなくてはならない。それがお前の宿命なんだ。その理由はいずれわかる。');
        newTexts.unshift('パンプキーン「うむ。最初はそうだろう。普段は意識しない「運」が、自分の命を守る攻撃手段になるなんて、非現実もいいところだ。頭の中を整理できなかったことはよくわかる。');
    }

    let currentTextIndex = 0;

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

        if (opacity >= 0.00001) {
            yes.removeEventListener('click', clickFunc);
            no.removeEventListener('click', clickFunc);
            yes.style.display = 'none';
            no.style.display = 'none';
        }

        if (opacity === 1) {
            clearInterval(intervalId);
            currentTextIndex++;
        }

        changeTextElement.style.display = 'block';
    }, fadeDuration / (1 / fadeStep));
}

let currentTextIndex = 0;
const aElement = document.createElement('a');
aElement.href = 'https://www.google.co.jp/';
aElement.textContent = '炎の洞窟へ';

changeTextElement.addEventListener('click', () => {
    if (currentTextIndex >= newTexts.length) {
        return;
    }

    const newText = newTexts[currentTextIndex + 1];

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

            if (currentTextIndex === newTexts.length - 1) {
                message.parentNode.appendChild(aElement); // 最後のテキストが表示されたらa要素を追加
            }
        }
    }, fadeDuration / (1 / fadeStep));
});

yes.addEventListener('click', clickFunc, {
    once: true
});

no.addEventListener('click', clickFunc, {
    once: true
});

