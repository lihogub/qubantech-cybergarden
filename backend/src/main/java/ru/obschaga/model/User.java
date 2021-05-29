package ru.obschaga.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity(name = "usr")
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String avatar;
    private Date birthday;
    @ManyToOne
    private Housing housing;
    private Long floor;
    private Long room;
    private String block;
    private String specialization;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private boolean enabled;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "chat_usr",
            joinColumns = {@JoinColumn(name = "usr_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "chat_id", referencedColumnName = "id")})
    private List<Chat> chats;

    public User(User user) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.avatar = user.avatar;
        this.birthday = user.birthday;
        this.housing = user.housing;
        this.floor = user.floor;
        this.block = user.block;
        this.specialization = user.specialization;
        this.accountNonExpired = user.accountNonExpired;
        this.accountNonLocked = user.accountNonLocked;
        this.credentialsNonExpired = user.credentialsNonExpired;
        this.enabled = user.enabled;
        this.chats = user.chats;
    }

    public User(Long id, String username, String password, String firstname,
                String lastname, String avatar, Date birthday, Housing housing,
                Long floor, Long room, String block, String specialization,
                boolean accountNonExpired, boolean accountNonLocked, boolean credentialsNonExpired,
                boolean enabled, List<Chat> chats) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.avatar = avatar;
        this.birthday = birthday;
        this.housing = housing;
        this.floor = floor;
        this.room = room;
        this.block = block;
        this.specialization = specialization;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
        this.enabled = enabled;
        this.chats = chats;
    }
}
