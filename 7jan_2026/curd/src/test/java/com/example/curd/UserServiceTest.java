package com.example.curd;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.curd.model.User;
import com.example.curd.service.UserService;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void testCreateUser() {
        // Create user
        User user = new User();
        user.setName("Alice");
        user.setEmail("alice@example.com");

        // Save user
        User saved = userService.create(user);

        // Assertions
        assertThat(saved).isNotNull();
        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getName()).isEqualTo("Alice");
        assertThat(saved.getEmail()).isEqualTo("alice@example.com");
    }
}
