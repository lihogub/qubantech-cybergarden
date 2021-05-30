package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.ProductDto;
import ru.obschaga.model.*;
import ru.obschaga.repository.*;

import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/product")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {
    private final ProductRepository productRepository;
    private final TradeRepository tradeRepository;
    private final StatusRepository statusRepository;
    private final UserRepository userRepository;
    private final ImageRepository imageRepository;

    @GetMapping("/{currentUserId}/all")
    ResponseEntity<?> getAllProducts(@PathVariable Long currentUserId) {
        SellingStatus awaitingStatus = statusRepository.getByName("Ожидание");
        return ResponseEntity.ok(tradeRepository
                .getTradesByStatus(awaitingStatus)
                .stream()
                .map(Trade::getProduct)
                .map(ProductDto::new)
                .collect(Collectors.toList())
        );
    }
    @GetMapping("/{currentUserId}")
    ResponseEntity<?> getMeProducts(@PathVariable Long currentUserId) {
        User user = userRepository.getById(currentUserId);
        return ResponseEntity.ok(tradeRepository
                .getTradeByUser(user)
                .stream()
                .map(Trade::getProduct)
                .map(ProductDto::new)
                .collect(Collectors.toList())
        );
    }
    @PostMapping("/{currentUserId}")
    ResponseEntity<?> getMeProducts(@PathVariable Long currentUserId,
                                    @RequestBody ProductDto productDto) {
        User user = userRepository.getById(currentUserId);
        productDto.setTimestamp(new Date());
        Product product = Product.builder()
                .title(productDto.getTitle())
                .description(productDto.getDescription())
                .images(productDto
                        .getImages()
                        .stream()
                        .map(img -> imageRepository.save(new Image(img)))
                        .collect(Collectors.toList())
                )
                .timestamp(new Date())
                .owner(user)
                .build();
        productRepository.save(product);
        return ResponseEntity.ok().build();
    }
}
