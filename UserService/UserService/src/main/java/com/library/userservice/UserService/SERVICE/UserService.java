package com.library.userservice.UserService.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.userservice.UserService.DTO.UserDTO;
import com.library.userservice.UserService.ENTITY.UserEntity;
import com.library.userservice.UserService.REPOSITORY.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Create User
    public String createUser(UserEntity userDetails) {

        userRepository.save(userDetails);

        return "User Added Successfully!";
    }

    // Read All Users
    public List<UserEntity> readAllUsers() {

        return userRepository.findAll();
    }

    // Read Particular User
    public UserDTO readParticularUser(Integer userId) {

        UserEntity user = userRepository.findById(userId).orElse(null);

        if (user == null) {
            return null;
        }

        UserDTO dto = new UserDTO();

        dto.setUserId(user.getUserId());
        dto.setUserName(user.getUserName());
        dto.setEmail(user.getEmail());
        dto.setPhone(user.getPhone());

        return dto;
    }

    // Delete User
    public String deleteParticularUser(Integer userId) {

        userRepository.deleteById(userId);

        return "User Deleted Successfully!";
    }
}