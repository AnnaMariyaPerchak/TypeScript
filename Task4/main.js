let message = document.getElementById('message');
function getSqrt(value) {
    if (typeof value === 'number') {
        if (value < 0) {
            return 'Input positive number';
        }
        else
            return `sqrt(${value})=${Math.sqrt(value)}`;
    }
    else if (typeof value !== "number") {
        if (value == ' ') {
            return 'Input number';
        }
        else
            return `Input number, not anything else type`;
    }
}
message.innerHTML = getSqrt(16);
message.innerHTML += `<br>getSqrt('Hello')=${getSqrt('asdfghj')}<br>`;
message.innerHTML += `getSqrt(' ')=${getSqrt(' ')}<br>`;
message.innerHTML += `getSqrt(-15)=${getSqrt(-15)}<br>`;
