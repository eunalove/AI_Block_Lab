package com.example.ai_block_lab.mapper;

import com.example.ai_block_lab.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserMapper {
    void insertUser(User user);
    User findByUserIdAndPassword(@Param("userId") String userId, @Param("password") String password);

    void updateInvitationLink(User user);
}
