let add = document.getElementById('add') as HTMLInputElement
let reset = document.getElementById('reset') as HTMLInputElement
let cenzor = document.getElementById('cenzor') as HTMLInputElement
let words = document.getElementById('words') as HTMLInputElement
let bad_words = document.getElementById('bad_words') as HTMLElement
let text = document.getElementById('text') as HTMLTextAreaElement

let bad_words_array: string[] = []
add.addEventListener('click', function () {
    if (!words.value) {
        words.placeholder = 'Please write a word'
    } else {
        bad_words_array.push(words.value)
        bad_words.innerText += `${words.value},`
        words.value = ''
    }

})

reset.addEventListener('click',function(){
    bad_words.innerText='Bad words:'
    bad_words_array=[]
})

cenzor.addEventListener('click', function () {
    let str = text.value
    if(!str){
        words.placeholder = 'Please write a text'
    } else {
        let text_value: string[] = str.split(' ');
    text.value = ' '
    for (let i = 0; i < text_value.length; i++) {
        for (let j = 0; j < bad_words_array.length; j++) {
            if (text_value[i] == bad_words_array[j]) {
                text_value[i] = '*'
            }

        }

        text.value += `${text_value[i]} `
    }
    }
    
})