package com.dinesh.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.dinesh.onlinebookstore.entity.Book;

@CrossOrigin(origins="http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long> {

}
