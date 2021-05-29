package ru.obschaga.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.obschaga.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
