document.getElementById("addTaskBtn").addEventListener('click', () => {
    const textInput=document.getElementById("taskInput")
    const task=textInput.value.trim()
    
    if(task== "") {
        return alert("Enter a task")
    }

    const li=document.createElement('li')
    li.classList.add("list-group-item")
    
    const span=document.createElement('span')

    
    span.classList.add("task-text")
    span.innerText=task

    li.appendChild(span)

    const completed=document.createElement('i')
    completed.classList.add('bi', 'bi-check','fs-4','text-success','task-icon')

    li.appendChild(completed)

    completed.addEventListener('click', () => {
        span.classList.toggle("completed")
    })

    const deleted=document.createElement('i')
    deleted.classList.add('bi','bi-trash','text-danger','task-icon')
    li.appendChild(deleted)

    deleted.addEventListener('click',()  => {
        li.remove()
    })

    document.getElementById("taskList").appendChild(li)

    textInput.value=""   
})