let container = document.querySelector(".todo-container")
let addtask = document.querySelector(".add-task")
let input = addtask.querySelector("input")
let addingBtn = addtask.querySelector("span")
let Notaskmassage = document.querySelector('.no-tasks-message')
let taskContent = document.querySelector(".tasks-content")
let count = document.querySelector(".tasks-count").querySelector("span")
let completed = document.querySelector(".tasks-completed").querySelector("span")
count.innerHTML = 0
completed.innerHTML = 0

window.onload = function(){
    input.focus()
}

function addingtasks(){
    let taskBox = document.createElement("span")
taskBox.classList.add("task-box")
taskContent.append(taskBox) 

    deleteBtn = document.createElement("span")
    finished = document.createElement("span")
    deleteBtn.classList.add("delete")
    deleteBtn.innerHTML = "delete"
   finished.innerHTML = input.value
   finished.classList.add("Task-Content")
let arr = [...document.querySelectorAll(".Task-Content")]

taskBox.append(deleteBtn)
    taskBox.append(finished)
count.innerHTML++

arr.forEach((item) =>{
    if(item.innerHTML == input.value){
        alert("type another task name please")
        taskBox.remove()
        count.innerHTML--
    }
})


 
    input.value = ""
    input.focus()
    Notaskmassage.remove()




}
addingBtn.onclick = addingtasks



document.onclick = function(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
        count.innerHTML--
        input.focus()
    }
    if(document.querySelectorAll(".task-box").length ==0){
        taskContent.append(Notaskmassage)
    }

    if(e.target.classList.contains("Task-Content")){
        e.target.classList.toggle("finished")
        if(e.target.classList.contains("finished")){
            completed.innerHTML++
        }else{
            completed.innerHTML--
        }
        input.focus()
    }
}

let deleteAll = document.querySelector(".deleteAll")

deleteAll.onclick = function(){
    count.innerHTML = 0
    completed.innerHTML = 0
    let tasks = document.querySelectorAll(".task-box")
    let arr = [...tasks]
    arr.forEach((item) =>{
        item.remove()
    })    

}
