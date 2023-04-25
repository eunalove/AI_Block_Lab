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

function generateInviteLink(inviteUUID) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    url.searchParams.set("invite", inviteUUID);
    return url.toString();
}

// URL에서 invite 파라미터를 가져오는 함수
function getInviteParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('invite');
}

// 로그인이나 회원가입 후 처리
function onLoggedIn(userId) {
    if (isModalClosed) {
        // 기존 로그인 모달 창을 완전히 삭제합니다.
        const overlay = document.getElementById("overlay");
        overlay.parentNode.removeChild(overlay);
    }

    const invite = getInviteParameter();
    if (invite) {
        // invite 파라미터를 포함한 URL로 리다이렉트
        window.location.href = `/index.html?invite=${invite}`;
    } else {
        // 일반 로그인 처리
        window.location.href = "/index.html";
    }
}