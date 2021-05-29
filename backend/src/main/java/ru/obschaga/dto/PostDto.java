package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.obschaga.model.Image;
import ru.obschaga.model.Post;
import ru.obschaga.model.User;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {
    private String title;
    private String description;
    private Long author;
    private Date timestamp;
    private List<String> images;
    private List<Long> likes;
    private List<CommentDto> comments;

    public PostDto(Post post) {
        this.title = post.getTitle();
        this.description = post.getDescription();
        this.author = post.getAuthor().getId();
        this.timestamp = post.getTimestamp();
        this.comments = post
                .getComments()
                .stream()
                .map(CommentDto::new)
                .collect(Collectors.toList());
        this.likes = post
                .getLikes()
                .stream()
                .map(User::getId)
                .collect(Collectors.toList());
        this.images = post
                .getImages()
                .stream()
                .map(Image::getUrl)
                .collect(Collectors.toList());
    }
}
