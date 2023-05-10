package com.example.ai_block_lab.WebSocket;

public class SendChat {

    private String name;
    private String userInvitationLink;

    private String message;

    public SendChat() {
    }

    public SendChat(String name, String userInvitationLink, String message) {
        this.name = name;
        this.userInvitationLink = userInvitationLink;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserInvitationLink() {
        return userInvitationLink;
    }

    public void setUserInvitationLink(String userInvitationLink) {
        this.userInvitationLink = userInvitationLink;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}