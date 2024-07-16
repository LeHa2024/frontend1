// Lấy các phần tử DOM cần thiết
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Mảng lưu trữ các công việc
let todos = [];

// Thêm sự kiện submit cho form
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form submit mặc định
  const todoText = todoInput.value.trim(); // Lấy giá trị nhập vào, loại bỏ khoảng trắng đầu cuối

  if (todoText !== "") {
    // Tạo một đối tượng công việc mới
    const newTodo = {
      // id: Date.now(), // Sử dụng thời gian hiện tại làm id tạm thời
      text: todoText,
    };

    // Thêm công việc vào mảng todos
    todos.push(newTodo);

    // Hiển thị công việc mới trên giao diện
    renderTodoItem(newTodo);

    // Xóa nội dung trong input sau khi thêm công việc
    todoInput.value = "";
  }
});

// Hàm để render một công việc vào danh sách
function renderTodoItem(todo) {
  // Tạo một phần tử <li> mới
  const li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `
    <span>${todo.text}</span>
    <button class="delete-btn" data-id="${todo.id}">Delete</button>
  `;

  // Thêm sự kiện click để xóa công việc
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    deleteTodoItem(todo.id);
  });

  // Thêm công việc vào danh sách
  todoList.appendChild(li);
}

// Hàm để xóa một công việc từ danh sách
function deleteTodoItem(todoId) {
  // Lọc ra công việc cần xóa từ mảng todos
  todos = todos.filter((todo) => todo.id !== todoId);

  // Xóa phần tử có data-id tương ứng trong danh sách
  const todoItem = document.querySelector(
    `.todo-item button[data-id="${todoId}"]`
  ).parentElement;
  todoList.removeChild(todoItem);
}
