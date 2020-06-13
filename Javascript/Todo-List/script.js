var todos = [];

var input = prompt("what would you like to do?");

while (input !== "quit") {
    if (input === "list") {
listTodos();
    }

    else if (input === "new") { 
addTodo();
    }

    else if (input === "delete") {
deleteTodo();
    }

    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");


function listTodos() {
    console.log("**********")
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********")
}

function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
}

function deleteTodo() {
    var index = prompt("Enter index of  todo to delete");
    alert("Item " + todos[index] + " has been deleted");
    todos.splice(index, 1);

}