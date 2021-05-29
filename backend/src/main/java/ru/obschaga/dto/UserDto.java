package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import ru.obschaga.model.User;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class UserDto {
    private final Long id;
    private final String username;
    private final String firstname;
    private final String lastname;
    private final Date birthday;
    public final String block;
    public final String specialization;
    public final Long room;
    public final Long floor;
    public final String avatar;
    public final BigDecimal balance;
    public final Set<Long> followers;
    public final Set<Long> following;

    public UserDto(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.birthday = user.getBirthday();
        this.block = user.getBlock();
        this.specialization = user.getSpecialization();
        this.room = user.getRoom();
        this.floor = user.getFloor();
        this.avatar = user.getAvatar();
        this.balance = user.getBalance();
        this.following = user.getFollowing().stream().map(User::getId).collect(Collectors.toSet());
        this.followers = user.getFollowers().stream().map(User::getId).collect(Collectors.toSet());
    }
}
