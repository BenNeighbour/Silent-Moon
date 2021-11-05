package io.benneighbour.silentmoon.musicservice.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/employee")
public class Controller {

    @GetMapping("/message")
    @PreAuthorize("hasAuthority('Users')")
    public String message(Principal principal) {
        return "Yup " + principal.getName();
    }
}
