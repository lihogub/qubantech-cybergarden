package ru.obschaga.dto;

import lombok.Data;

import java.util.List;

@Data
public class ChatCreateRequest {
    private String title;
    private Long owner;
    private List<Long> users;
}
