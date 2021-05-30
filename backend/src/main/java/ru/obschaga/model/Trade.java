package ru.obschaga.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Trade {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    private User user;
    @ManyToOne
    private Product product;
    private Date timestamp;
    @ManyToOne
    private SellingStatus status;
    @OneToOne
    private Chat chat;
    private Boolean sellerApproved;
    private Boolean buyerApproved;
}
