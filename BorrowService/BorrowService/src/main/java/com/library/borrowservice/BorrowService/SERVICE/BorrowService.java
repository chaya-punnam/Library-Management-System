package com.library.borrowservice.BorrowService.SERVICE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.borrowservice.BorrowService.DTO.BorrowDTO;
import com.library.borrowservice.BorrowService.ENTITY.BorrowEntity;
import com.library.borrowservice.BorrowService.REPOSITORY.BorrowRepository;

@Service
public class BorrowService {

    @Autowired
    private BorrowRepository borrowRepository;

    // Create Borrow
    public String createBorrow(BorrowEntity borrowDetails) {

        borrowRepository.save(borrowDetails);

        return "Book Borrowed Successfully!";
    }

    // Read All Borrow Records
    public List<BorrowEntity> readAllBorrowRecords() {

        return borrowRepository.findAll();
    }

    // Read Particular Borrow Record
    public BorrowDTO readParticularBorrow(Integer borrowId) {

        BorrowEntity borrow = borrowRepository.findById(borrowId).orElse(null);

        if (borrow == null) {
            return null;
        }

        BorrowDTO dto = new BorrowDTO();

        dto.setBorrowId(borrow.getBorrowId());
        dto.setBookId(borrow.getBookId());
        dto.setUserId(borrow.getUserId());
        dto.setBorrowDate(borrow.getBorrowDate());
        dto.setReturnDate(borrow.getReturnDate());
        dto.setStatus(borrow.getStatus());

        return dto;
    }

    // Delete Borrow Record
    public String deleteParticularBorrow(Integer borrowId) {

        borrowRepository.deleteById(borrowId);

        return "Borrow Record Deleted Successfully!";
    }

}