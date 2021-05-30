package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.SellingStatus;

public interface StatusRepository extends JpaRepository<SellingStatus, Long> {
    SellingStatus getByName(String name);
}
