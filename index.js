const syllables = {};
syllables.english = [
    "a",  "i",  "u",  "e",  "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya",       "yu",       "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa",                   "wo",
                            "n"
];
syllables.hiragana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や",       "ゆ",       "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ",                   "を",
                            "ん"
];
syllables.katakana = [
    "ア", "ィ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ",       "ユ",       "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ",                   "ヲ",
                            "ン"
]

function generateWord(count) {
    let words = {};
    words.english = words.hiragana = words.katakana = "";
    const syllablesCount = syllables.english.length;

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * (syllables.english.length));
        words.english += syllables.english[index];
        words.hiragana += syllables.hiragana[index];
        words.katakana += syllables.katakana[index];
    }

    return words;
}

function drawWords(words) {
    document.getElementById("english").textContent = words.english;
    document.getElementById("hiragana").textContent = words.hiragana;
    document.getElementById("katakana").textContent = words.katakana;
}


const MAX_SYLLABLES = 10;
const MIN_SYLLABLES = 1;

let words = generateWord(3);
    drawWords(words);

const generateButton = document.getElementById("generate-button");



generateButton.addEventListener("mouseup", () => {
    let count = document.getElementById("count").value;
    count = count > MAX_SYLLABLES ? MAX_SYLLABLES : count;
    count = count < MIN_SYLLABLES ? MIN_SYLLABLES : count;
    let words = generateWord(count);
    drawWords(words);
});