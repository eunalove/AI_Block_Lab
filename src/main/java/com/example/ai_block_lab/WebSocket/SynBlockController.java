package com.example.ai_block_lab.WebSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class SynBlockController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/sendCreateBlock")
    public void CreateBlock(SendBlockCreate message){
        String userInvitationLink = message.getUserInvitationLink();
        String destination = "/topic/ReceiveCreateBlock/" + userInvitationLink;
        System.out.println("destination = " + destination);
        System.out.println("블록 생성 구독 전송 직전");

        System.out.println("message.getBlockId() = " + message.getBlockId());
        System.out.println("message.getType = " + message.getType());
        System.out.println("message.getGroup = " + message.getGroup());

        //같은 초대 링크를 가진 사용자들이 구독하는 대상
        messagingTemplate.convertAndSend(destination,  new ReceiveBlockCreate(message.getBlockId(), message.getGroup(), message.getIds(),
                message.getJson(), message.getType(), message.getXml()));

        // 메시지를 전달받은 대상에 전송하는 메서드입니다.
        // 여기서 destination은 메시지를 전송할 대상이며, payload는 전송할 메시지 객체
        System.out.println("블록 생성 구독 전송 직후");
    }

    @MessageMapping("/sendBlockEvent")
    public void receiveMsg(BlockEventMessage message){
        String userInvitationLink = message.getUserInvitationLink();
        String destination = "/topic/receiveBlockEvent/" + userInvitationLink;
        System.out.println("destination = " + destination);
        System.out.println("블록 구독 전송 직전");

        System.out.println("message.getEvent() = " + message.getBlockEvent());

        //같은 초대 링크를 가진 사용자들이 구독하는 대상
        messagingTemplate.convertAndSend(destination,  new BlockEventMessage(message.getUserId(), message.getUserInvitationLink(), message.getBlockEvent(), message.getEventId()));

        // 메시지를 전달받은 대상에 전송하는 메서드입니다.
        // 여기서 destination은 메시지를 전송할 대상이며, payload는 전송할 메시지 객체
        System.out.println("블록 구독 전송 직후");
    }
}
