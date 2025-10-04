function login() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message');

    // Tên hợp lệ
    const validUsername = "Trang";

    if (username === validUsername) {
        // Chuyển hướng sang trang tiếp theo
        window.location.href = "welcome.html"; // Tạo tệp welcome.html để điều hướng
    } else {
        message.textContent = 'Tên không hợp lệ, vui lòng thử lại!';
        message.style.color = 'red';
    }
}
