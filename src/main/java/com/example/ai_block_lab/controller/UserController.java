package com.example.ai_block_lab.controller;

import com.example.ai_block_lab.mapper.UserMapper;
import com.example.ai_block_lab.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
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
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        User foundUser = userMapper.findByUserIdAndPassword(user.getUserId(), user.getPassword());
        if (foundUser != null) {
            String uuid = UUID.randomUUID().toString();
            foundUser.setUser_Invitation_link(uuid);
            userMapper.updateInvitationLink(foundUser);

            Map<String, String> responseBody = Collections.singletonMap("invitationLink", uuid);
            return ResponseEntity.ok(responseBody);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/api/update-invitation-link")
    public ResponseEntity<?> updateInvitationLink(@RequestBody Map<String, String> request) {
        String userId = request.get("userId");
        String invitationLink = request.get("invitationLink");

        User user = new User(userId, invitationLink, null);
        userMapper.updateInvitationLink(user);

        return ResponseEntity.ok().build();
    }

}
