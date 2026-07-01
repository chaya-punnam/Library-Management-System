package com.library.bookservice.BookService.ENTITY;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "books")
public class BookEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookId;

    @NotBlank(message = "Book title cannot be empty")
    @Size(
        min = 2,
        max = 100,
        message = "Book title should contain 2 to 100 characters"
    )
    private String bookTitle;

    @NotBlank(message = "Author name cannot be empty")
    @Size(
        min = 3,
        max = 50,
        message = "Author name should contain 3 to 50 characters"
    )
    private String author;
    
    @Positive(message = "Total copies must be greater than 0")
    private Integer totalCopies;

    @Positive(message = "Available copies must be greater than 0")
    private Integer availableCopies;

    public BookEntity() {
    }

    public BookEntity(Integer bookId,
                      String bookTitle,
                      String author,
                      Integer totalCopies,
                      Integer availableCopies) {

        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.author = author;
        this.totalCopies = totalCopies;
        this.availableCopies = availableCopies;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getTotalCopies() {
        return totalCopies;
    }

    public void setTotalCopies(Integer totalCopies) {
        this.totalCopies = totalCopies;
    }

    public Integer getAvailableCopies() {
        return availableCopies;
    }

    public void setAvailableCopies(Integer availableCopies) {
        this.availableCopies = availableCopies;
    }
}