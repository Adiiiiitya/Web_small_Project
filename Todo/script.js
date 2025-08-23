// let ctr=0;
// function AddTodo(){
// const todo = document.createElement("div");
// const inputVal=document.querySelector("input").value;
// todo.innerHTML="<div style='display: flex';>"+inputVal+"</div><button onclick='deleted("+ctr+")'>Delete</button>";
// todo.setAttribute("id","todo-"+ctr);  //setting id to div
// ctr=ctr+1;
// document.getElementById("To-doList").appendChild(todo);
// }

// function deleted(value){
//     const element = document.getElementById("todo-"+value)
//     element.parentNode.removeChild(element);
// }



//****************************** Different method *********************
todos=[];
function addTodo() {
    todos.push({
    title: document.querySelector("input").value
    })
    render()
}

function deleteLastTodo() {
    todos.splice(todos.length - 1, 1) // remove the last element from the arr
    render()
}


function deleteFirstTodo() {
    todos.splice(0, 1) // remove the last element from the arr
    render()
}

function deletes(){
    BUTTON.onclick = function() {
        DIV.remove()
    }
    render()
}

function createTodo(todo){
    const DIV= document.createElement("div");
    const H1= document.createElement("h1");
    const BUTTON= document.createElement("button");
    BUTTON.innerHTML="Delete"
    H1.innerHTML= todo.title;
    DIV.append(H1)
    DIV.append(BUTTON)
    BUTTON.onclick = function() {
        DIV.remove()
    }
    return DIV;
}

function render(){
    document.querySelector("#todos").innerHTML="";
    for(let i=0;i<todos.length;i++){
        const element = createTodo(todos[i]);
        document.querySelector("#todos").appendChild(element)
    }
}