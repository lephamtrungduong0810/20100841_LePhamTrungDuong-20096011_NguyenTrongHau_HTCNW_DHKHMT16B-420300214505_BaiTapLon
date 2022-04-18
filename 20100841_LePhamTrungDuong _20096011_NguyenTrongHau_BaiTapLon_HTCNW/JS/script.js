const loginTem = `<div class="modal">
        <div class="login-form">
            <h1>Login</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required>
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required>
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="pass">Forgot Password?</div>
                <input type="submit" value="Login">
                <div class="signup_link">
                    Not a member? <a href="#">Signup</a>
                </div>
            </form>
        </div>
    </div>`;


window.addEventListener("load", function() {
    let logIn = document.querySelector(".log-in");
    logIn.addEventListener("click", function() {
        document.body.insertAdjacentHTML("beforeend", loginTem);
    })


    document.addEventListener("click", function(event) {
        // Nếu bấm vào modal thì cũng remove modal
        if (event.target.matches(".modal")) {
            event.target.parentNode.removeChild(event.target);
        }
        // Nếu bấm vào modal-search thì translate nó
        if (event.target.matches(".modal-search")) {
            event.target.style.transform = "translateX(100vw)"
        }
    })

})