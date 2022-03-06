var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

function displayDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var balance = document.getElementById("balance").value;

    if (!name || !email || !balance) {
        alert("Please fill all the boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);

    cell0.innerHTML = name;
    cell1.innerHTML = email;
    cell2.innerHTML = balance;

    row++;
}
