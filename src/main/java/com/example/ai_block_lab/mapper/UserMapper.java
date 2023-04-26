package com.example.ai_block_lab.mapper;

import com.example.ai_block_lab.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface

UserMapper {

    @Insert("INSERT INTO User (userId, password) VALUES (#{userId}, #{password})")
    void insertUser(User user);

    User findByUserIdAndPassword(@Param("userId") String userId, @Param("password") String password);

    @Insert("INSERT INTO Room_BlockCoding (User_Invitation_link) VALUES (#{user_Invitation_link})")
    void createInvite(String user_Invitation_link);

    @Select("SELECT User_Invitation_link FROM Room_BlockCoding WHERE BC_Id = #{BC_Id}")
    String getInviteLinkByUserId(String userId);

    @Insert("UPDATE User SET user_Invitation_link = #{user_Invitation_link} WHERE userId = #{userId}")
    void addUserToInvite(@Param("userId") String userId, @Param("user_Invitation_link") String user_Invitation_link);

}
