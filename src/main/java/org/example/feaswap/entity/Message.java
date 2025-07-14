package org.example.feaswap.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "messages")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "messageid", nullable = false)
    private Integer messageId;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "exchangeid", nullable = false)
    private ExchangeRequest exchange;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "senderid", nullable = false)
    private User sender;

    @Column(name = "messagetext", columnDefinition = "TEXT", nullable = false)
    private String messageText;

    @Column(name = "sentat", nullable = false, insertable = false, updatable = false)
    private LocalDateTime sentAt;
}