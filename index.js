// selector

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const task_list = document.querySelector("#tasks");

// events
form.addEventListener("submit", (e) => {
//  prevent from reload   
e.preventDefault();    
const task = input.value;
console.log(task);

if (!task){
 alert("Please add a task"); 
 return; 
}

// creating a task div
const task_el = document.createElement("div")
task_el.classList.add("task");

// creating a task content
const task_content_el = document.createElement("div")
task_el.classList.add("content");

task_el.appendChild(task_content_el);


// creating task list input 
const task_input_el = document.createElement("input")
task_input_el.type = "text";
task_input_el.value = input.value;
task_input_el.setAttribute("readonly", "readonly");
// assigning to task content div
task_content_el.appendChild(task_input_el);

// creating action div

const task_actions_el = document.createElement("div");
task_actions_el.classList.add("actions")

// creating a edit btn
const task_edit_el = document.createElement("button");
task_edit_el.innerText ="Edit";
task_edit_el.classList.add("edit");

// creating a delete btn
const task_delete_el = document.createElement("button");
task_delete_el.innerText ="Delete";
task_delete_el.classList.add("delete");

task_actions_el.appendChild(task_edit_el);
task_actions_el.appendChild(task_delete_el);

task_content_el.appendChild(task_actions_el)
task_list.appendChild(task_el);

input.value = "";

// creating edit button

task_edit_el.addEventListener("click", (e) => {
 console.log( "hello....");
 
 if (task_edit_el.innerText.toLowerCase() === "edit"){
task_edit_el.innerText = "Save";
task_input_el.removeAttribute("readonly");
task_input_el.focus()
 }else{
    task_edit_el.innerText = "Edit";
    task_input_el.setAttribute("readonly","readonly");
 }
});

task_delete_el.addEventListener("click", (e) => {
 task_list.removeChild(task_el);  
})

});