package com.library.borrowservice.BorrowService.CONTROLLER;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.library.borrowservice.BorrowService.DTO.BorrowDTO;
import com.library.borrowservice.BorrowService.ENTITY.BorrowEntity;
import com.library.borrowservice.BorrowService.SERVICE.BorrowService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/borrow")
public class BorrowController {

    @Autowired
    private BorrowService borrowService;

    @PostMapping("/create")
    public String createBorrow(@Valid @RequestBody BorrowEntity borrowDetails) {

        borrowService.createBorrow(borrowDetails);
        return "Book Borrowed Successfully!";
    }

    @GetMapping("/all")
    public List<BorrowEntity> getAllBorrowRecords() {

        return borrowService.readAllBorrowRecords();
    }

    @GetMapping("/{borrowId}")
    public BorrowDTO getParticularBorrow(@PathVariable Integer borrowId) {

        return borrowService.readParticularBorrow(borrowId);
    }

    @DeleteMapping("/{borrowId}")
    public String deleteBorrow(@PathVariable Integer borrowId) {

        return borrowService.deleteParticularBorrow(borrowId);
    }
}