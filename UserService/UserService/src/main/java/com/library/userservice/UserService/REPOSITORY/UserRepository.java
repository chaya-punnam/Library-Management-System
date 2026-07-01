package com.library.userservice.UserService.REPOSITORY;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.userservice.UserService.ENTITY.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

}
