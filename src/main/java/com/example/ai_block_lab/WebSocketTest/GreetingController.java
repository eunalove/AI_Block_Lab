package com.example.ai_block_lab.WebSocketTest;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {


    @MessageMapping("/hello")
    // 메시지가 hello 대상으로 전송되는 경우 geetin()메서드 호출
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        //1초 지연
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
        // /topic/geetings에 지정된 대로 모든 구독자에게 브로드캐스팅

    }

}