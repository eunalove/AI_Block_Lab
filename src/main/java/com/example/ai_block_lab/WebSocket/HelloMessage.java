package com.example.ai_block_lab.WebSocket;

public class HelloMessage {

    private String name;
    private String userInvitationLink;

    public HelloMessage() {
    }

    public HelloMessage(String name, String userInvitationLink) {
        this.name = name;
        this.userInvitationLink = userInvitationLink;
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
}