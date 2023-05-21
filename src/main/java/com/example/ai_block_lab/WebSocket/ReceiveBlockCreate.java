package com.example.ai_block_lab.WebSocket;

        import java.util.List;
        import java.util.Map;

public class ReceiveBlockCreate {


    private String userId; // 사용자 ID를 추가합니다.
    private Map<String, Object> event; // 이벤트 데이터를 담는 맵

    public ReceiveBlockCreate(String userId, Map<String, Object> event) {
        this.userId = userId;
        this.event = event;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Map<String, Object> getEvent() {
        return event;
    }

    public void setEvent(Map<String, Object> event) {
        this.event = event;
    }
}
