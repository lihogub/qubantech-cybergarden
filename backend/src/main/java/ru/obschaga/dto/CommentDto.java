package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import ru.obschaga.model.Comment;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class CommentDto {
    private final Long id;
    private final Long authorId;
    private final Date timestamp;
    private final Boolean anonymous;
    private final String text;

    public CommentDto(Comment comment) {
        if (comment.getAnonymous() == null || !comment.getAnonymous().booleanValue()) {
            this.authorId = comment.getAuthor().getId();
            this.anonymous = false;
        } else {
            this.authorId = -1L;
            this.anonymous = true;
        }
        this.id = comment.getId();
        this.timestamp = comment.getTimestamp();
        this.text = comment.getText();

    }
}
