// Comment.java (Entity)

package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@Entity
@RequiredArgsConstructor
@Table(name = "COMMENT")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long postId;

    private String name;

    private String email;

    @Column(columnDefinition = "TEXT")
    private String body;
}