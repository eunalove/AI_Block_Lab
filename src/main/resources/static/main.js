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

async function createInviteLink() {
    const response = await fetch("/createInvite");
    const { inviteUUID } = await response.json();

    return window.location.origin + window.location.pathname + "?invite=" + inviteUUID;
}

function getInviteUUID() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("invite");
}

async function handleInviteLink(inviteUUID) {
    if (inviteUUID) {
        const response = await fetch("/addUserToInvite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inviteUUID, userId: loggedInUserId })
        });

        if (response.ok) {
            console.log("사용자가 초대 링크에 추가되었습니다.");
        } else {
            console.log("초대 링크에 사용자를 추가하는 데 실패했습니다.");
        }
    }
}

async function onLoggedIn(userId) {
    // 여기에 로그인 후 처리 코드를 작성하세요.
    // 예: 채팅창 열기, 사용자 정보 표시 등

    const inviteUUID = getInviteUUID();
    if (inviteUUID) {
        await handleInviteLink(inviteUUID);
    }
}

