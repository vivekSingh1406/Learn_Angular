// CommentController.java

package com.example.backend.controller;

import com.example.backend.entity.Comment;
import com.example.backend.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

    private final CommentService service;

    // CREATE
    @PostMapping
    public Comment createComment(@RequestBody Comment comment) {
        return service.saveComment(comment);
    }


    // READ ALL
    @GetMapping
    public List<Comment> getAllComments() {
        return service.getAllComments();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public Optional<Comment> getCommentById(@PathVariable Long id) {
        return service.getCommentById(id);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Comment updateComment(
            @PathVariable Long id,
            @RequestBody Comment comment
    ) {
        return service.updateComment(id, comment);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteComment(@PathVariable Long id) {
        return service.deleteComment(id);
    }
}