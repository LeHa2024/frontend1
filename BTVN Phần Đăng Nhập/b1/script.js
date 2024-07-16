const users = [
  {
    username: "bob",
    password: "123",
  },
  {
    username: "alice",
    password: "456",
  },
  // Thêm các user khác vào đây
];
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("btn-login");

loginButton.addEventListener("click", function () {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "" || password === "") {
    alert("Xin vui lòng nhập thông tin đầy đủ");
    return;
  }
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (foundUser) {
    alert("Đăng nhập thành công.");
  } else {
    alert("Tài khoản hoặc mật khẩu không chính xác.");
  }
  usernameInput.value = "";
  passwordInput.value = "";
});
