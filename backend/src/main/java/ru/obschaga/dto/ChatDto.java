package ru.obschaga.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChatDto {
    private final Long id;
    private final String title;
}
