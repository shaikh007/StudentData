const addStudent = document.getElementById("addStudent");
const addTeacher = document.getElementById("addTeacher");
const showFee = document.getElementById("showFee");
const tableBody = document.getElementById("tableBody");

let temp = "";
let count = 100;
addStudent.addEventListener("click", () => {
    console.log("addStudent is clicked");
    temp += `<tr>
                <td>${count++}</td>
                <td>Irfan</td>
                <td>04-05-2022</td>
                <td id="classTeacher">Suma</td>
                <td>20000</td>
            </tr>`;
    tableBody.innerHTML = temp;

});
const classTeacher = document.getElementById("classTeacher");
let temp1 = ""
addTeacher.addEventListener("click", () => {
    console.log("addTeacher ic Clicked");
    temp1 += `<td id="classTeacher"><input type="text"/></td>`
    tableBody.appendChild = temp1;
});