package io.benneighbour.silentmoon.musicservice.model;

import lombok.*;

import javax.validation.constraints.Email;
import java.io.Serializable;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Track implements Serializable {

    private UUID id;

    private String name;

    @Email
    private String description;

    private String audioUrl;

    public enum Category {
        SLEEP("Sleep Music"),
        RELAXATION("Relaxation Music"),
        SOUNDSCAPE("Soundscape");

        Category(String value) {}

        Category getCategory(String name) {
            return valueOf(name);
        }
    }

}

