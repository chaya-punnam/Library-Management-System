package com.library.bookservice.BookService.REPOSITORY;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.bookservice.BookService.ENTITY.BookEntity;

@Repository
public interface BookRepository extends JpaRepository<BookEntity, Integer> {

}