package ru.obschaga.exception;

public class ChatNotFoundException extends Exception {
    public ChatNotFoundException() {
        super();
    }

    public ChatNotFoundException(String message) {
        super(message);
    }
}
