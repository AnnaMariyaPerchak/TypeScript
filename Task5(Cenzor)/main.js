let add = document.getElementById('add');
let reset = document.getElementById('reset');
let cenzor = document.getElementById('cenzor');
let words = document.getElementById('words');
let bad_words = document.getElementById('bad_words');
let text = document.getElementById('text');
let bad_words_array = [];
add.addEventListener('click', function () {
    if (!words.value) {
        words.placeholder = 'Please write a word';
    }
    else {
        bad_words_array.push(words.value);
        bad_words.innerText += `${words.value},`;
        words.value = '';
    }
});
reset.addEventListener('click', function () {
    bad_words.innerText = 'Bad words:';
    bad_words_array = [];
});
cenzor.addEventListener('click', function () {
    let str = text.value;
    if (!str) {
        words.placeholder = 'Please write a text';
    }
    else {
        let text_value = str.split(' ');
        text.value = ' ';
        for (let i = 0; i < text_value.length; i++) {
            for (let j = 0; j < bad_words_array.length; j++) {
                if (text_value[i] == bad_words_array[j]) {
                    text_value[i] = '*';
                }
            }
            text.value += `${text_value[i]} `;
        }
    }
});
