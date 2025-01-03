function addTask(){
    var taskInput=document.getElementById("taskInput").value
    var taskList=document.getElementById("taskList")
    if(taskInput==""){
        alert("enter the task")
        return;
    }
    taskInput.value==""
    var listItems=document.createElement("li")
    listItems.innerText=taskInput
    taskList.appendChild(listItems)

    var buttoncontainer=document.createElement('div')
    listItems.appendChild(buttoncontainer)
    buttoncontainer.className="task-button"

    var deleteButton=document.createElement('button')
    buttoncontainer.appendChild(deleteButton)
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
        taskList.removeChild(listItems)

    }


    var completeButton=document.createElement('button')
    buttoncontainer.appendChild(completeButton)
    completeButton.innerText="Completed"
    completeButton.onclick=function(){
        listItems.classList.toggle('Completed')
    }
    testInput.value="";
}
    