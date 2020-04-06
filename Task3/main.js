let result = document.getElementById('result');
function max(...numberArr) {
    let temp = numberArr[0];
    numberArr.forEach(function (val, i) {
        if (temp < numberArr[i]) {
            val = numberArr[i];
            temp = val;
        }
    });
    return temp;
}
result.innerHTML = `f(5,-2)=${max(5, -2)}<br>`;
result.innerHTML += `f(5,-2, 30, 6)=${max(5, -2, 30, 6)}<br>`;
result.innerHTML += `f(3,-9,0)=${max(3, -9, 0)}<br>`;
result.innerHTML += `f(126,56,-876)=${max(126, 56, -876)}`;
