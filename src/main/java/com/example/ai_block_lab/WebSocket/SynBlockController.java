package com.example.ai_block_lab.WebSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.concurrent.locks.ReentrantLock;

@Controller
public class SynBlockController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private BlockLockManager blockLockManager;


    @MessageMapping("/sendBlock")
    public void receiveBlockMsg(SendBlock message) throws InterruptedException {
        // 블록 별로 잠금을 처리하기 위해 ReentrantLock을 가져옵니다.
        String userInvitationLink = message.getUserInvitationLink();
        String destination = "/topic/receiveBlock/" + userInvitationLink;
        messagingTemplate.convertAndSend(destination, new ReceiveBlock(message.getUserId(), message.getEvent()));

/*


        ReentrantLock lock = blockLockManager.getLock(message.getEvent().get("blockId").toString());
        System.out.println("message.type = " + message.getEvent().get("type"));
        System.out.println("lock = " + lock);
        String userInvitationLink = message.getUserInvitationLink();
        String destination = "/topic/receiveBlock/" + userInvitationLink;

    // 블록에 대한 잠금을 시도합니다.
    if (lock.tryLock()) {
        try {
            // 잠금이 성공하면 이벤트를 처리하고 메시지를 전송합니다.
            messagingTemplate.convertAndSend(destination, new ReceiveBlock(message.getUserId(), message.getEvent()));
        } finally {
            // 잠금을 해제합니다.
            lock.unlock();
        }
    } else {
        // 잠금이 실패하면 (다른 사용자가 이미 블록을 수정 중이면) 이벤트를 무시합니다.
        System.out.println("블록 " + message.getEvent().get("blockId").toString() + " is currently being modified by another user.");
    }
*/

    System.out.println("블록 생성 구독 전송 직후");
}
}
