const loadToDo=()=>{
    const url=`https://jsonplaceholder.typicode.com/todos`;
    fetch(url)
    .then(response => response.json())
    .then((data) => console.log(data))
};
// // -----------------------
// {
//     "userId": 6,
//     "id": 101,
//     "title": "explicabo enim cumque porro aperiam occaecati minima",
//     "completed": false
// }
// -----------------------
const displayTodo=(todos)=>{
// 1. Get the container
const todoContainer=document.getElementById('todo-container');
todoContainer.innerHTML="";

// 2. Create Element
todos.forEach(todo => {
  console.log(todo);
  const todoCard=document.createElement('div');
    todoCard.innerHTML=`
     <div class="todo-card">
     <p>${todo.completed}</p>
     <h4>${todo.title}</h4>
</div>
    `;
    todoContainer.appendChild(todoCard);
})
}
loadToDo();
