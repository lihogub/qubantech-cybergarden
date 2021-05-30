package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.obschaga.model.Image;
import ru.obschaga.model.Post;
import ru.obschaga.model.User;

import java.math.BigDecimal;
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
    private Long authorId;
    private String firstname;
    private String lastname;
    private String avatar;
    private Date timestamp;
    private List<String> images;
    private List<Long> likes;
    private List<CommentDto> comments;
    private BigDecimal balance;

    public PostDto(Post post) {
        this.title = post.getTitle();
        this.description = post.getDescription();
        this.authorId = post.getAuthor().getId();
        this.firstname = post.getAuthor().getFirstname();
        this.lastname = post.getAuthor().getLastname();
        this.avatar = post.getAuthor().getAvatar();
        this.timestamp = post.getTimestamp();
        this.balance = post.getAuthor().getBalance();
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
