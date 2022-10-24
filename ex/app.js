let diemKv = 0.75;

onChangeKv = (event) => {
    diemKv = parseInt(event.target.value)
}

tinhDiem = () => {
    let toan = parseInt(document.getElementById("toan").value)
    let van = parseInt(document.getElementById("van").value)
    let anh = parseInt(document.getElementById("anh").value)
    let kq = toan + van + anh + diemKv
    alert(`Điểm: ${kq}`)
}

