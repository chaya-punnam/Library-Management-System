package com.library.bookservice.BookService.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.bookservice.BookService.DTO.BookDTO;
import com.library.bookservice.BookService.ENTITY.BookEntity;
import com.library.bookservice.BookService.SERVICE.BookService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/create")
    public String createBook(@Valid @RequestBody BookEntity bookDetails) {

        bookService.createBook(bookDetails);
        return "Book Added Successfully!";
    }

    @GetMapping("/all")
    public List<BookEntity> getAllBooks() {
        return bookService.readAllBooks();
    }

    @GetMapping("/{bookId}")
    public BookDTO getParticularBook(@PathVariable Integer bookId) {
        return bookService.readParticularBook(bookId);
    }

    @DeleteMapping("/{bookId}")
    public String deleteBook(@PathVariable Integer bookId) {
        return bookService.deleteParticularBook(bookId);
    }
}