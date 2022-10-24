calculate = (cal) => {
    let a = parseFloat(document.querySelector("#number-a").value);
    let b = parseFloat(document.querySelector("#number-b").value);
    let kq = 0;
    if (a && b) {
        if (cal == "add") {
            kq = a + b;
        }
        else if (cal == "sub") {
            kq = a - b;
        }
        else if (cal == "mul") {
            kq = a * b;
        }
        else if (cal == "div") {
            kq = a / b;
        }
        else {
            kq = null;
        }

        alert(`${a} + ${b} = ${kq}`)
    }
    else {
        alert("chưa nhập a, b !!!")
    }

}