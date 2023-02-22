// Author : Ananthu AS
function changebg() {
    document.getElementById("navbg").style.backgroundColor =
        "rgba(0, 0, 0, 0.8)";
}
function validate() {
    let n = /^[A-Za-z]+$/;
    nm = document.getElementById("nam").value;
    em = document.getElementById("e_mail").value;
    if (nm == "") {
        alert("Name field cannot be empty.");
        return false;
    } else if (!n.test(nm)) {
        alert("Enter Correct Name");
        return false;
    } else if (em == "") {
        alert("Email cannot be empty.");
        return false;
    } else {
        alert("Table booked successfully");
        return true;
    }
}
