package com.dinesh.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dinesh.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
