console.log("hello");

console.log(document);

function addTodo() {
    let data = document.getElementById("inputt").value;

    // Create a new div element
    const todo = document.createElement("h4");

    // Set the inner HTML of the new div to the input data
    todo.innerHTML = data + "<button> Delete</button>";

    // Append the new div to the list
    document.querySelector("#list").append(todo);
}


function deleteTodo(id){
    const todo = document.getElementById("todo-"+id);
    
}