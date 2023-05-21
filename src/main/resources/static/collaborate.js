var stompClient = null;
var chat_userId = null;

function connect(userId, userInvitationLink) {
    chat_userId = userId;
    Chat.setUserInvitationLink(userInvitationLink);
    const socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        sendGreeting(userId, userInvitationLink);
        stompClient.subscribe('/topic/receiveChat/' + userInvitationLink, function (receiveMsg) {
            console.log('showGreeting:');
            const receivedMessage = JSON.parse(receiveMsg.body);
            addMessageToChat(receivedMessage.senderName , receivedMessage.message, receivedMessage.senderName  === chat_userId);

        });

        stompClient.subscribe('/topic/receiveBlock/' + userInvitationLink, function (synBlockMsg) {
            console.log('Received block synchronization message:');
            const receivedSynBlockMsg = JSON.parse(synBlockMsg.body);

            // 만약 userId가 현재 사용자의 userId와 같다면 이 이벤트를 무시합니다.
            if (receivedSynBlockMsg.userId === userId) {
                return;
            }

            // Blockly 이벤트를 비활성화합니다.
            Blockly.Events.disable();
            var event = Blockly.Events.fromJson(receivedSynBlockMsg.event, workspace);
            event.run(true);
            // Blockly 이벤트를 다시 활성화합니다.
            Blockly.Events.enable();

        });

    });
}

function sendGreeting(userId, message) {
    console.log('sendGreeting: ' + message);
    stompClient.send("/app/sendChat", {}, JSON.stringify({'name': userId, 'userInvitationLink': message}));
}


function addMessageToChat(senderName, message, isMyMessage) {
    const LR_className = isMyMessage ? "right" : "left";

    if (!message) {
        const chatUl = document.querySelector('.chat ul');

        const newMessage = document.createElement('li');
        newMessage.textContent = senderName+"님이 입장하셨습니다.";
        newMessage.style.fontWeight = 'bold';
        newMessage.style.color = '#4CAF50';
        newMessage.style.margin = '10px 20px';
        newMessage.style.textAlign = 'center';
        chatUl.appendChild(newMessage);


    }else {
        appendMessageTag(LR_className, senderName, message);
    }
}

function appendMessageTag(LR_className, senderName, message) {
    const chatLi = createMessageTag(LR_className, senderName, message);
    $('div.chat:not(.format) ul').append(chatLi);
    $('div.chat').scrollTop($('div.chat').prop('scrollHeight'));
}

function createMessageTag(LR_className, senderName, message) {
    let chatLi = $('div.chat.format ul li').clone();
    chatLi.addClass(LR_className);
    chatLi.find('.sender span').text(senderName);
    chatLi.find('.message span').text(message);
    return chatLi;
}

const Chat = (function () {
    const myName = chat_userId;
    let userInvitationLink;

    function setUserInvitationLink(invitationLink) {
        userInvitationLink = invitationLink;
    }

    function init() {
        $(document).on('keydown', 'div.input-div textarea', function (e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
                //현재 메시지가 없으면 ~님이 입장하셨습니다를 띄우기 때문에
                //메시지가 없으면 전송이 안되게 함
                if(message) {
                    sendMessage(chat_userId, message);
                }
                clearTextarea();
            }
        });
    }

    function sendMessage(senderName, message) {
        console.log("메시지 전송");
        const data = {
            "name": senderName,
            "userInvitationLink": userInvitationLink,
            "message": message
        };

        stompClient.send("/app/sendChat", {}, JSON.stringify(data));
    }

    function clearTextarea() {
        $('div.input-div textarea').val('');
    }

    return {
        'init': init,
        'setUserInvitationLink': setUserInvitationLink
    };
})();

$(function () {
    Chat.init();
});