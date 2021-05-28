package ru.lihogub.babystep.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private Long sex;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private Date birth;
}
