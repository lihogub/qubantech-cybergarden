package ru.obschaga.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AccountStatusException;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.obschaga.model.User;
import ru.obschaga.model.UserDetailsImpl;
import ru.obschaga.repository.UserRepository;

@RequiredArgsConstructor
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository
                .getUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username or password wrong"));
        UserDetails userDetails = new UserDetailsImpl(user);
        new AccountStatusUserDetailsChecker().check(userDetails);
        return userDetails;
    }
}
