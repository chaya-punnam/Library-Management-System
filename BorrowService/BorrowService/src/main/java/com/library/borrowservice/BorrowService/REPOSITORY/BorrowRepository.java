package com.library.borrowservice.BorrowService.REPOSITORY;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.borrowservice.BorrowService.ENTITY.BorrowEntity;

@Repository
public interface BorrowRepository extends JpaRepository<BorrowEntity, Integer> {

}