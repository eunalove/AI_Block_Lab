document.getElementById("login-button").addEventListener("click", function() {
    const nickname = document.getElementById("nickname-input").value;

    if (nickname === "") {
        alert("닉네임을 입력해주세요.");
    } else {
        document.getElementById("overlay").style.display = "none";
        // 닉네임이 입력된 후 메인 화면에서 필요한 작업을 수행
    }
});

function login(userId, password) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, password: password })
    });
}

// 회원가입 요청
function signUp(userId, password) {
    return fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, password: password })
    });
}


function showToast(message, duration) {
    var toast = document.getElementById('toast');
    var toastMessage = document.getElementById('toastMessage');

    toastMessage.innerText = message;
    toast.classList.add('show');

    setTimeout(function() {
        toast.classList.remove('show');
    }, duration);
}