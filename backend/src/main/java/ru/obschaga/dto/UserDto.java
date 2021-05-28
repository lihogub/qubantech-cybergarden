package ru.obschaga.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import ru.obschaga.model.User;

import java.util.Date;

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
    }
}
