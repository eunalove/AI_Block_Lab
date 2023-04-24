package com.example.ai_block_lab.model;

public class User {

    private String userId;
    private String password;
    private String User_Invitation_link;

    public User(String userId, String password, String user_Invitation_link) {
        this.userId = userId;
        this.password = password;
        User_Invitation_link = user_Invitation_link;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_Invitation_link() {
        return User_Invitation_link;
    }

    public void setUser_Invitation_link(String user_Invitation_link) {
        User_Invitation_link = user_Invitation_link;
    }
}
