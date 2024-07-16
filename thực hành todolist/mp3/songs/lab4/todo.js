// Hiển thị danh sách công việc
// (gọi API lấy danh sách công việc + render danh sách công việc lên giao diện)
function getTodos() {
  return axios
    .get("https://dummyjson.com/todos?limit=5")
    .then(function (response) {
      return response.data.todos;
    });
}

function createTodo(todo) {
  return axios
    .post("https://dummyjson.com/todos/add", todo)
    .then(function (response) {
      return response.data;
    });
}

function updateTodo(todo) {
  return axios
    .patch(`https://dummyjson.com/todos/${todo.id}`, todo)
    .then(function (response) {
      return response.data;
    });
}

function deleteTodo(todoId) {
  return axios
    .delete(`https://dummyjson.com/todos/${todoId}`)
    .then(function (response) {
      return response.data;
    });
}

function renderItem(todo) {
  const $todoList = $(".todo-list");

  const $li = $(`<li class="todo-item">
      <input type="checkbox" />
      <span class="todo-content">${todo.todo}</span>
      <button class="todo-delete">Xóa</button>
    </li>`)
    .find("input")
    .prop("checked", todo.completed)
    .change(function (e) {
      e.preventDefault();
      todo.completed = e.target.checked;

      updateTodo(todo).then(function () {
        $li.find("input").prop("checked", todo.completed);
      });
    })
    .end()
    .find("button")
    .click(function () {
      deleteTodo(todo.id).then(function () {
        $li.remove();
      });
    })
    .end()
    .appendTo($todoList);
}

function renderTodos(todos) {
  const $todoList = $(".todo-list");

  $todoList.empty();
  $todoList.removeClass("loading");

  if (todos.length === 0) {
    $todoList.addClass("empty");
    $todoList.append("<p>No todos found, add one!</p>");
  } else {
    $todoList.removeClass("empty");

    for (const item of todos) {
      renderItem(item);
    }
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const $input = $(".todo-form input");

  if ($input.val().trim().length === 0) {
    return;
  }

  const todo = {
    todo: $input.val().trim(),
    completed: false,
    userId: 1, // API yêu cầu
  };

  createTodo(todo).then(renderItem);
}

$(function () {
  getTodos().then(renderTodos);

  $(".todo-form").submit(handleSubmit);
});
