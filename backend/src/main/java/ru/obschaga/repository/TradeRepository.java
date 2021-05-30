package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.SellingStatus;
import ru.obschaga.model.Trade;
import ru.obschaga.model.User;

import java.util.List;

public interface TradeRepository extends JpaRepository<Trade, Long> {
    List<Trade> getTradesByStatus(SellingStatus status);
    List<Trade> getTradeByUser(User owner);
}
