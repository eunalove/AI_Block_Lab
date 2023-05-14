package com.example.ai_block_lab.WebSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.Principal;

@Controller
public class ChattingController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;



    @MessageMapping("/sendChat")
    public void receiveMsg(SendChat message, Principal principal) throws Exception {
        //Principal 객체는 현재 인증된 사용자의 정보를 나타냄
        //Spring Security와 연계되어 인증된 사용자의 정보를 가져올 수 있음
        //여기서는 사용되지 않음
        String userInvitationLink = message.getUserInvitationLink();
        String destination = "/topic/receiveChat/" + userInvitationLink;
        System.out.println("destination = " + destination);
        System.out.println("구독 전송 직전");

        //같은 초대 링크를 가진 사용자들이 구독하는 대상
        messagingTemplate.convertAndSend(destination,  new ReceiveChat(message.getName(), message.getMessage()));

        // 메시지를 전달받은 대상에 전송하는 메서드입니다.
        // 여기서 destination은 메시지를 전송할 대상이며, payload는 전송할 메시지 객체
        System.out.println("구독 전송 직후");
    }
}