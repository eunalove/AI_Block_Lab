package com.example.ai_block_lab.WebSocket;

public class Greeting {

    private String senderName;
    private String message;
    public Greeting() {
    }

    public Greeting(String senderName, String message) {
        this.senderName = senderName;
        this.message = message;
    }


    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}