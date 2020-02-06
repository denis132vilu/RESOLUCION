var list = [];
var xPoints = [];
var yPoints = [];
var points = [];

function addElement() {
    var inputValue = document.getElementById("element-input").value;
    if (inputValue) {
        list.push(inputValue);
        console.log(list);
        document.getElementById("element-input").value = "";
    } else {
        alert("Input text, please.");
    }

}

function reverseList() {
    if (list.length) {
        alert("Old list: " + list.join(", "));
        for (let i = list.length - 1; i >= 0; i--) {
            list.push(list[i]);
            list.splice(i, 1);
        }
        alert("Reversed list: " + list.join(", "));
    } else {
        alert("Empty list");
    }
}

function addPoints() {
    try {
        xPoints = [];
        yPoints = [];
        var x1Value = parseInt(document.getElementById("x1-point-input").value);
        var y1Value = parseInt(document.getElementById("y1-point-inpyt").value);
        var x2Value = parseInt(document.getElementById("x2-point-input").value);
        var y2Value = parseInt(document.getElementById("y2-point-inpyt").value);
        var x3Value = parseInt(document.getElementById("x3-point-input").value);
        var y3Value = parseInt(document.getElementById("y3-point-inpyt").value);
        var x4Value = parseInt(document.getElementById("x4-point-input").value);
        var y4Value = parseInt(document.getElementById("y4-point-inpyt").value);
        points.push([x1Value, y1Value], [x2Value, y2Value], [x3Value, y3Value], [x4Value, y4Value])
    } catch (error) {
        alert("Error: " + error.message);
        alert("Please, input just integer values!");
    }
}

function validateIfIsSquare() {
    if (points.length) {
        points.sort((a, b) => a[0] - b[0]);
        if (points[0][0] == points[0][1] && points[0][2] == points[0][3]) {
            alert(true);
        }
        alert(false);
    }
}