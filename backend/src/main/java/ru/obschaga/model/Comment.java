package ru.obschaga.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(columnDefinition = "boolean default false")
    private boolean anonymous;
    @ManyToOne(fetch = FetchType.LAZY)
    private User author;
    private String text;
}
