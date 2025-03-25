// 1. todo-input
// 2. todo-button
// 3. filter-todo
// 4. todo-list

// Step 1: Select DOM elements
let todoInput = document.querySelector(".todo-input"); //just target the first element
let todoButton = document.querySelector(".todo-button");
let filterTodo = document.querySelector(".filter-todo");
let todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addTodo); //Need to create the function addTodo
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos); //change: change status based on drop down list

function addTodo(e){
    // when the user click the "+" icon or enter key to submit, the website will reload and add the list
    //Prevent the blank input
    e.preventDefault(); 
    todoInput.value =="";
    
    // Create the todoDiv container
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the new todo list item.
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);  

    // Create the complete button
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = `<i class="fas fa-check"></i>`; // important to add ` to make icon functional, the icon is taken from fontawesome.com
    todoDiv.appendChild(completeButton);

    // Create the delete button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteOrCompleteTodo(e) {
    //Delete the todo list item
    const targetElement = e.target;
    //from the inspector, the user want to access the class
    // console.log(targetElement.classList.contains("complete-btn")); 

    if (targetElement.classList.contains("trash-btn")) {
        //Delete the task
        const todoDiv = targetElement.parentElement; //target certain item in parent element

        todoDiv.classList.add("fall"); //from html to add the fall animation
        
        todoDiv.addEventListener("transitionend", function() {
            todoDiv.remove();
        }); //wait for the animation to end first
        
    }

    if (targetElement.classList.contains("complete-btn")) {
        //Mark the task as completed
        const todoDiv = targetElement.parentElement;
        todoDiv.classList.toggle("completed");
        //the differences between add and toggle is the toggle allows the user to striketrough and remove it when clicked again
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    //will print the All/Uncompleted/Complete based on drop down list chosen by user
    // console.log(e.target.value); 
    todos.forEach(function (todo){
        switch(e.target.value) {
            case "all":
                // console.log("Display all the task.");
                todo.style.display = "flex";
                break;
            case "completed":
                // console.log("Display all completed task.");
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                //console.log("Display all uncompleted task.");
                if (!todo.classList.contains("completed")){ //added the ! in front of the todo
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    }) //inside the array 
}