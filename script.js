const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector('.filter-todo');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

function addTodo(event){
    event.preventDefault();
    console.log("it's clicking");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newToDo=document.createElement("li");
    newToDo.innerText=todoInput.value;
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fa fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fa fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value="";
}
function deleteCheck(e){
    // console.log(e.target);
    const item=e.target;

    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e){
    const todos=todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display='flex';
                }else{
                    todo.style.display="none";
                }
                break;
        }
    });
}