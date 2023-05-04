
var stompClient = null;

function connect(userId, userInvitationLink) {
    const socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function(frame) {
        console.log('Connected: ' + frame);
        sendGreeting(userId, userInvitationLink);
        stompClient.subscribe('/topic/greetings/' + userInvitationLink, function(greeting) {
            console.log('showGreeting:');
            addMessageToChat(JSON.parse(greeting.body).content, "user-joined");
        });

    });
}

function sendGreeting(userId, message) {
    console.log('sendGreeting: ' + message);
    stompClient.send("/app/hello", {}, JSON.stringify({ 'name': userId, 'userInvitationLink': message }));
}


function addMessageToChat(content, messageType) {
    console.log("addMessageToChat");
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.classList.add(messageType);
    messageElement.innerText = content;
    chatContent.appendChild(messageElement);
}