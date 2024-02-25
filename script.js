const inputTask = document.getElementById("taskinput");
const listedTasks = document.getElementById("listedtasks");

function addTask(){
    if (inputTask.value === ''){
        alert("Please input a task to add it to the list.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listedTasks.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "╳";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveList();
}

inputTask.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        e.preventDefault();
        addTask();
    }
})

listedTasks.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
},false);

function saveList(){
    localStorage.setItem("list", listedTasks.innerHTML);
}

function displayList(){
    listedTasks.innerHTML = localStorage.getItem("list");
}

displayList();