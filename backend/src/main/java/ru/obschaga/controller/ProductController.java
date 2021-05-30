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


    // get current margetplace
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

    // gets user trades
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

    // creates new trade
    @PostMapping("/{currentUserId}")
    ResponseEntity<?> getMyTrades(@PathVariable Long currentUserId,
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
        Trade trade = Trade.builder()
                .sellerApproved(false)
                .buyerApproved(false)
                .chat(null)
                .timestamp(new Date())
                .product(product)
                .user(user)
                .status(statusRepository.getByName("Ожидание"))
                .build();
        tradeRepository.save(trade);
        return ResponseEntity.ok().build();
    }
}
