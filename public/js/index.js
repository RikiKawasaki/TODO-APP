const todo = document.querySelectorAll(".todo");
for (let i = 0; i < todo.length; i++) {
    const todos = todo[i];
    todos.classList.add("select-none", "cursor-pointer");
    todos.addEventListener("click", () => {
        todos.classList.toggle("line-through");
    });
}

const today = new Date();
console.log(today.getMonth() + 1);
