// CommentService.java

package com.example.backend.service;
import com.example.backend.entity.Comment;
import com.example.backend.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository repository;


    // CREATE
    public Comment saveComment(Comment comment) {
        return repository.save(comment);
    }
    // READ ALL
    public List<Comment> getAllComments() {
        return repository.findAll();
    }

    // READ BY ID
    public Optional<Comment> getCommentById(Long id) {
        return repository.findById(id);
    }

    // UPDATE
    public Comment updateComment(Long id, Comment updatedComment) {

        return repository.findById(id)
                .map(comment -> {

                    comment.setPostId(updatedComment.getPostId());
                    comment.setName(updatedComment.getName());
                    comment.setEmail(updatedComment.getEmail());
                    comment.setBody(updatedComment.getBody());

                    return repository.save(comment);
                })
                .orElseThrow(() -> new RuntimeException("Comment not found"));
    }

    // DELETE
    public String deleteComment(Long id) {
        repository.deleteById(id);
        return "Comment deleted successfully";
    }
}