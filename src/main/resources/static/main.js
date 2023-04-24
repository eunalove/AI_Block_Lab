document.getElementById("start-button").addEventListener("click", function() {
    const nickname = document.getElementById("nickname-input").value;

    if (nickname === "") {
        alert("닉네임을 입력해주세요.");
    } else {
        document.getElementById("overlay").style.display = "none";
        // 닉네임이 입력된 후 메인 화면에서 필요한 작업을 수행
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('join-box');
    var btn = document.getElementById('join-button');
    var span = document.getElementById('closeModal');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

