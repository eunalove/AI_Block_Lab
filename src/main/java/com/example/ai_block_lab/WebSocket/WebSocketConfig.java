package com.example.ai_block_lab.WebSocket;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import org.springframework.web.socket.server.HandshakeInterceptor;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;


@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        //메시지 브로커 구성
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }


    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/gs-guide-websocket")
                .setAllowedOrigins("http://localhost:5000") // 허용할 도메인을 명시적으로 설정
                //모든 도메인이 웹소켓 서버에 연결할 수 있음
                .withSockJS()
                //웹소켓을 지원하지 않는 브라우저에서도 웹소켓과 유사한 기능을 제공하기 위한 JavaScript 라이브러리
                .setInterceptors(httpSessionHandshakeInterceptor());
                //웹소켓 연결 시 Handshake 요청에 대한 인터셉터를 설정
                //httpSessionHandshakeInterceptor()는 HttpSession에서 인증 정보와 같은 속성을 WebSocketSession으로 복사하는 인터셉터
        //      //이를 통해 웹소켓 세션에서 기존의 HTTP 세션 정보를 사용할 수 있게 됨
    }

    @Bean
    public HandshakeInterceptor httpSessionHandshakeInterceptor() {
        return new HttpSessionHandshakeInterceptor();
    }


}