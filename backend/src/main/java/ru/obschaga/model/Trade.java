package ru.obschaga.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
