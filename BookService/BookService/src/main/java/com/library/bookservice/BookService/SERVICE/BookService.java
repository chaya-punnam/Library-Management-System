package com.library.bookservice.BookService.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.bookservice.BookService.DTO.BookDTO;
import com.library.bookservice.BookService.ENTITY.BookEntity;
import com.library.bookservice.BookService.REPOSITORY.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    // Create Book
    public String createBook(BookEntity bookDetails) {

        bookRepository.save(bookDetails);

        return "Book Added Successfully!";
    }

    // Read All Books
    public List<BookEntity> readAllBooks() {

        return bookRepository.findAll();
    }

    // Read Particular Book
    public BookDTO readParticularBook(Integer bookId) {

        BookEntity book = bookRepository.findById(bookId).orElse(null);

        if (book == null) {
            return null;
        }

        BookDTO dto = new BookDTO();

        dto.setBookId(book.getBookId());
        dto.setBookTitle(book.getBookTitle());
        dto.setAuthor(book.getAuthor());

        return dto;
    }

    // Delete Book
    public String deleteParticularBook(Integer bookId) {

        bookRepository.deleteById(bookId);

        return "Book Deleted Successfully!";
    }

}