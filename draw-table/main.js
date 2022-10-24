validateInput = (row, column) => {
    if (row.length == 0) {
        alert("Chưa nhập số hàng muốn vẽ !!!");
        return false;
    }
    else if (column.length == 0) {
        alert("Chưa nhập số cột muốn vẽ !!!");
        return false;
    }
    else {
        return true;
    }
}

drawTable = () => {
    let rowInput = document.querySelector(".row").value;
    let columnInput = document.querySelector(".column").value;
    let check = validateInput(rowInput, columnInput);
    if (check) {
        let table = document.querySelector("#table");
        let tableCreate = document.createElement("table");

        for (let i = 0; i < parseInt(rowInput); i++) {
            let rowCreate = document.createElement("tr");
            tableCreate.appendChild(rowCreate);

            for (let j = 0; j < parseInt(columnInput); j++) {
                let columnCreate = document.createElement("td");
                const textnode = document.createTextNode("dòng: " + i + " - " + "cột: " + j);
                columnCreate.appendChild(textnode);
                rowCreate.appendChild(columnCreate);
            }
        }
        table.appendChild(tableCreate);
    }
}

deleteTable = () => {
    let table = document.querySelector("#table");
    let tableDraw = document.querySelector("table");

    if (tableDraw != null) {
        table.removeChild(tableDraw);
    }
    else {
        alert("ko có bảng")
    }
}

