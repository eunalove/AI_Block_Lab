package com.example.ai_block_lab.WebSocket;

import java.util.List;
import java.util.Map;

public class SendBlockCreate {

    private String userId; // 사용자 ID를 추가합니다.
    private String userInvitationLink;
    private Map<String, Object> event; // 이벤트 데이터를 담는 맵

    public SendBlockCreate(String userId, String userInvitationLink, Map<String, Object> event) {
        this.userId = userId;
        this.userInvitationLink = userInvitationLink;
        this.event = event;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserInvitationLink() {
        return userInvitationLink;
    }

    public void setUserInvitationLink(String userInvitationLink) {
        this.userInvitationLink = userInvitationLink;
    }

    public Map<String, Object> getEvent() {
        return event;
    }

    public void setEvent(Map<String, Object> event) {
        this.event = event;
    }
}
