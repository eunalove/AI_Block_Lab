package com.example.ai_block_lab.WebSocket;

import java.util.Map;

public class BlockEventMessage {

        private String userId;
        private String userInvitationLink;
        private Map<String, Object> blockEvent;

        private String eventId;  // 추가된 필드

    public BlockEventMessage(String userId, String userInvitationLink, Map<String, Object> blockEvent, String eventId) {
        this.userId = userId;
        this.userInvitationLink = userInvitationLink;
        this.blockEvent = blockEvent;
        this.eventId = eventId;
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

    public Map<String, Object> getBlockEvent() {
        return blockEvent;
    }

    public void setBlockEvent(Map<String, Object> blockEvent) {
        this.blockEvent = blockEvent;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }
}
