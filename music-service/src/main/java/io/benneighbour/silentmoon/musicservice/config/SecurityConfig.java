package io.benneighbour.silentmoon.musicservice.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.jwk.JwkTokenStore;

import java.util.Collections;

@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final ResourceServerProperties resource;

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.cors();
        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/api/public/**").permitAll()
                .antMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated();
    }

    @Bean
    public TokenStore jwkTokenStore() {
        return new JwkTokenStore(
                Collections.singletonList(resource.getJwk().getKeySetUri()),
                new CognitoAccessTokenConverter(),
                null);
    }
}