package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
