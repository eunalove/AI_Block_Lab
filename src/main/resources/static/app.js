var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    //connect()함수는 SockJS 및 stomp.js를/gs-guide-websocket 사용하여 SockJS 서버가 연결을 기다리는 에 대한 연결을 엽니 다.
    //성공적으로 연결되면 클라이언트는 /topic/greetings서버가 인사말 메시지를 게시할 대상을 구독합니다.
    // 해당 대상에서 인사말을 받으면 DOM에 단락 요소를 추가하여 인사말 메시지를 표시합니다.
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            showGreeting(JSON.parse(greeting.body).content);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
    // 사용자가 입력한 이름을 검색하고 STOMP 클라이언트를 사용하여 대상으로 보냅니다
    stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});