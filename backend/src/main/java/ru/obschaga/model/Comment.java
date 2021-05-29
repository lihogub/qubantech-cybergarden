package ru.obschaga.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.obschaga.dto.CommentDto;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(columnDefinition = "boolean default false")
    private Boolean anonymous;
    @ManyToOne(fetch = FetchType.LAZY)
    private User author;
    private String text;
    private Date timestamp;
}
