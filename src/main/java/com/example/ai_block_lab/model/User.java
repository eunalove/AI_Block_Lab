package com.example.ai_block_lab.model;

public class User {
    private String userId;
    private String user_Invitation_link;
    private String password;

    public User(String userId, String user_Invitation_link, String password) {
        this.userId = userId;
        this.user_Invitation_link = user_Invitation_link;
        this.password = password;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUser_Invitation_link() {
        return user_Invitation_link;
    }

    public void setUser_Invitation_link(String user_Invitation_link) {
        this.user_Invitation_link = user_Invitation_link;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
