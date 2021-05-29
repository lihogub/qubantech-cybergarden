package ru.obschaga.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Trade {
    @Id
    @GeneratedValue
    private Long id;
}
