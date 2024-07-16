document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  const apiUrl = "http://localhost:3000/api/todos";

  // Function to fetch todos from the server
  const fetchTodos = async () => {
    try {
      const response = await axios.get(apiUrl);
      const todos = response.data;
      displayTodos(todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Function to display todos on the UI
  const displayTodos = (todos) => {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.text;
      li.dataset.todoId = todo.id;
      if (todo.done) {
        li.style.textDecoration = "line-through";
      }
      todoList.appendChild(li);
      li.addEventListener("click", toggleTodo);
    });
  };

  // Function to add a new todo
  const addTodo = async (text) => {
    try {
      const response = await axios.post(apiUrl, { text });
      const newTodo = response.data;
      todoInput.value = "";
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Function to toggle todo status (mark as done or not done)
  const toggleTodo = async (event) => {
    const todoId = event.target.dataset.todoId;
    try {
      await axios.delete(`${apiUrl}/${todoId}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Event listener for todo form submission
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (text !== "") {
      addTodo(text);
    }
  });

  // Initial fetch of todos when the page loads
  fetchTodos();
});
