const nameTF = document.getElementById("name");
const rollTF = document.getElementById("roll");
const deptTF = document.getElementById("dept");
const addBtn = document.getElementById("addBtn");
const table = document.getElementById("tbl");

addBtn.addEventListener("click", addNewStudent);

function addNewStudent() {
    let name = nameTF.value.trim();
    let roll = rollTF.value.trim();
    let dept = deptTF.value.trim();

 
    if (name === "" || roll === "" || dept === "") {
        alert("All fields are required!");
        return;
    }

   
    const tr = document.createElement("tr");


    const td1 = document.createElement("td");
    td1.innerText = name;
    tr.appendChild(td1);

  
    const td2 = document.createElement("td");
    td2.innerText = roll;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = dept;
    tr.appendChild(td3);

   
    const td4 = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.background = "red";
    delBtn.style.color = "white";

    td4.appendChild(delBtn);
    tr.appendChild(td4);

    delBtn.addEventListener("click", deleteClicked)

    function deleteClicked()
    {
        tr.remove();
    }

  

    table.appendChild(tr);

   
    nameTF.value = "";
    rollTF.value = "";
    deptTF.value = "";
}
