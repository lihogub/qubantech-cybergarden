package ru.obschaga.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.obschaga.dto.ChatDto;
import ru.obschaga.dto.MessageDto;
import ru.obschaga.exception.ChatNotFoundException;
import ru.obschaga.model.Chat;
import ru.obschaga.model.Message;
import ru.obschaga.model.User;
import ru.obschaga.repository.ChatRepository;
import ru.obschaga.repository.MessageRepository;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/chat")
public class ChatController {
    private final ChatRepository chatRepository;
    private final MessageRepository messageRepository;

    @GetMapping("/")
    ResponseEntity<?> getChat(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return ResponseEntity.ok(user
                        .getChats()
                        .stream()
                        .map(chat-> ChatDto.builder()
                                .id(chat.getId())
                                .title(chat.getTitle())
                                .build()
                        )
                        .collect(Collectors.toList())
        );
    }

    @GetMapping("/{chatId}")
    ResponseEntity<?> getChatById(Authentication authentication,
                                  @PathVariable Long chatId) throws ChatNotFoundException {
        User user = (User) authentication.getPrincipal();
        if (user.getChats().stream().noneMatch(chat->chat.getId().equals(chatId)))
            throw new ChatNotFoundException();
        return ResponseEntity.ok(chatRepository
                .getById(chatId)
                .getMessages()
                .stream()
                .map(message -> MessageDto.builder()
                        .id(message.getId())
                        .author(message.getAuthor().getId())
                        .timestamp(message.getTimestamp())
                        .text(message.getText())
                        .build()
                )
                .collect(Collectors.toList())
        );
    }

    @PostMapping("/{chatId}")
    ResponseEntity<?> sendMessage(Authentication authentication,
                                  @PathVariable Long chatId,
                                  @RequestBody MessageDto messageDto) throws ChatNotFoundException {
        User user = (User) authentication.getPrincipal();
        if (user.getChats().stream().noneMatch(chat->chat.getId().equals(chatId)))
            throw new ChatNotFoundException();
        Message message = messageRepository.save(Message.builder()
                .author(user)
                .text(messageDto.getText())
                .timestamp(new Date())
                .build()
        );
        Chat chat = chatRepository.getById(chatId);
        chat.getMessages().add(message);
        chatRepository.save(chat);
        return ResponseEntity.ok().build();
    }

    @ExceptionHandler(ChatNotFoundException.class)
    ResponseEntity<?> handleChatNotFoundException() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
