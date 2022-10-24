
check = () => {
    let number = parseInt(document.querySelector("#number").value);
    if (number) {
        if (number % 2 === 0) {
            alert(`${number} là số chẳn`)
        }
        else {
            alert(`${number} là số lẻ`)
        }
    }
    else {
        alert("some thing wrong")
    }
}