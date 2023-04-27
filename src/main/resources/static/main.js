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
    const response = await fetch("/createInvite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });
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

async function updateUser_Invitation_link(userId, user_Invitation_link) {
    return fetch("/updateUser_Invitation_link", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, user_Invitation_link })
    });
}

async function getUser_Invitation_link(userId) {
    const response = await fetch(`/getUser_Invitation_link?userId=${userId}`);
    const { user_Invitation_link } = await response.json();
    return user_Invitation_link;
}

async function onLoggedIn(userId) {
    // 기존 코드

    const inviteUUID = getInviteUUID();
    if (inviteUUID) {
        await handleInviteLink(inviteUUID);
    } else {
        // 새로운 UUID 생성
        const response = await fetch("/createInvite");
        const { inviteUUID } = await response.json();

        // 현재 링크에 UUID 추가
        const newLink = window.location.origin + window.location.pathname + "?invite=" + inviteUUID;
        window.location.href = newLink;
    }

}
