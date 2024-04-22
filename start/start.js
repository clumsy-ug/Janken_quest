const message = document.getElementById('message');
const changeTextElement = document.getElementById('change-text');
// const p1 = document.createElement('p');
// p1.textContent = `あいうえお\nかきくけこ`;
// console.log(p1.textContent);

const newTexts = [
    'パンプキーン「ここははじまりの地。すべてのじゃんけんステージに繋がっている異空間だ。',
    'パンプキーン「...信じられないって顔だな。『中古のゲームソフトを起動しただけなのに、なんで？』って顔だ。',
    'パンプキーン「こっちの世界との接続点をもったソフトを、現実世界に5つほどばらまかせてもらった。',
    'パンプキーン「お前がその5つのうちの最後の1つを使った人間ってわけさ。',
    'パンプキーン「理由は簡単。こっちの世界のピンチを救ってほしいから、だ。',
    'パンプキーン「じゃんけんステージにいるやつらが、いろいろな惑星を破壊している。こっちの世界もいつやつらの標的になるかわからない。だからお前たちを呼んだんだ。',
    'パンプキーン「...じゃんけんステージとは何かって？そうだな、言うなれば自分の運をぶつける場所だ。',
    'パンプキーン「そこには恐ろしいモンスターがいる。やつらは人間の運を吸い取ることで生きている',
    'パンプキーン「じゃんけんに負けた人間は、モンスターに運をすべて吸い尽くされ、二度と幸運が訪れなくなってしまうのだ',
    'パンプキーン「俺は人間ではないから、運なんてもんも持ち合わせていない。だから、やつらに攻撃することはできない',
    'パンプキーン「だが、お前たち人間は、やつらと戦い、うまくいけばやつらを倒すことができる',
    'パンプキーン「...どうだ？怖気づいたか？',
    'パンプキーン「...ほう、そうか。ふっふっふ。どうやら久しぶりに骨のある人間がやってきたようだ。',
    'パンプキーン「私もお前の行く末が楽しみになってきた。最後まで見届けさせてもらうぞ',
    'パンプキーン「ではさっそく、じゃんけんステージに招待しよう。」',
];

let currentTextIndex = 0;
const aElement = document.createElement('a');
aElement.href = 'http://127.0.0.1:5500/stage1/stage1.html';
aElement.textContent = 'じゃんけんステージ1へ';

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
