package com.example.ai_block_lab.controller;

import com.example.ai_block_lab.mapper.UserMapper;
import com.example.ai_block_lab.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class UserController {

    private final UserMapper userMapper;

    public UserController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        userMapper.insertUser(user);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User foundUser = userMapper.findByUserIdAndPassword(user.getUserId(), user.getPassword());
        if (foundUser != null) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/createInvite")
    public String createInvite() {
        String user_Invitation_link = UUID.randomUUID().toString();
        userMapper.createInvite(user_Invitation_link);
        return user_Invitation_link;
    }

    @PostMapping("/addUserToInvite")
    public void addUserToInvite(@RequestParam String userId, @RequestParam String user_Invitation_link) {
        userMapper.addUserToInvite(userId, user_Invitation_link);
    }

}