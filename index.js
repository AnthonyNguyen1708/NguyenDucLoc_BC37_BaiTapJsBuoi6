document.getElementById("btn-ket-qua").addEventListener("click", function () {
    var sum = 0;
    var a = 0;
    
    while (sum < 10000) {
        a++;
        sum += a;
    }

    document.getElementById("ket-qua").innerHTML = `<div>Số nguyên dương nhỏ nhất: ${a}</div>`
})


document.getElementById("btn-tinh-tong").addEventListener("click", function() {

    var numbX = document.getElementById("so-x").value*1;
    var numbN = document.getElementById("so-n").value*1;
    var sum = 0;

    for (var i = 1; i <= numbN; i++ ){
        sum += numbX**i
    }

    document.getElementById("tinh-tong").innerHTML = `<div>Tổng: ${sum}</div>`
})


document.getElementById("btn-tinh-gt").addEventListener("click", function() {
    
    var n = document.getElementById("txt-so-n").value * 1;

    var result = 1

    for (var i = 1; i <= n; i++) {
        result = result * i;
    }

    document.getElementById("tinh-gt").innerHTML = `<div>Giai thừa: ${result}</div>`
})

document.getElementById("btn-tao-the").addEventListener("click", function() {

    var content = "";
    for (var i = 0; i < 10; i++) {
        if ((i + 1) % 2 == 0) {
            content += `<div style="background-color: red; color: white">div chẵn</div>` 
        } else {
            content += `<div style="background-color: blue; color: white">div Lẻ</div>`
        }
    }

    console.log(i)

    document.getElementById("tao-the").innerHTML = content 
})

