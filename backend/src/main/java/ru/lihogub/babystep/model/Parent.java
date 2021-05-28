package ru.lihogub.babystep.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Date birth;

    @Column(nullable = false)
    private Long sex;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "child_parent",
            joinColumns = {@JoinColumn(name = "parent_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "child_id", referencedColumnName = "id")})
    private List<Child> children;
}
