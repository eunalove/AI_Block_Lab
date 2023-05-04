
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


async function updateUserInvitationLink(userId, invitationLink) {
    const response = await fetch('/api/update-invitation-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, invitationLink })
    });

    return response;
}
