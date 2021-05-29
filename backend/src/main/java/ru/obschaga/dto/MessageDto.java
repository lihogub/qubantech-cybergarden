package ru.obschaga.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class MessageDto {
    private final Long id;
    private final Date timestamp;
    private final Long author;
    private final String text;
}
