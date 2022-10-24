let vay = prompt("Nhập số tiền vay:");
let laiSuat = prompt("Nhập lãi suất:");
let namVay = prompt("Nhập số năm vay:");

let vayInt = parseFloat(vay)
let laiSuatInt = parseFloat(laiSuat)
let namVayInt = parseFloat(namVay)

let lai = vayInt * (laiSuatInt / 100)

let laiDon = (namVayInt * lai) + vayInt

alert(`Số tiền phải trả sau ${namVay} là : ${laiDon} Triệu đồng`)

