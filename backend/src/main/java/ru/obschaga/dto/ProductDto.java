package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.obschaga.model.Image;
import ru.obschaga.model.Post;
import ru.obschaga.model.Product;
import ru.obschaga.model.User;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private String title;
    private String description;
    private Long authorId;
    private String firstname;
    private String lastname;
    private String avatar;
    private Date timestamp;
    private List<String> images;
    private BigDecimal balance;

    public ProductDto(Product product) {
        this.title = product.getTitle();
        this.description = product.getDescription();
        this.authorId = product.getOwner().getId();
        this.firstname = product.getOwner().getFirstname();
        this.lastname = product.getOwner().getLastname();
        this.avatar = product.getOwner().getAvatar();
        this.timestamp = product.getTimestamp();
        this.balance = product.getOwner().getBalance();
        this.images = product
                .getImages()
                .stream()
                .map(Image::getUrl)
                .collect(Collectors.toList());
    }
}
