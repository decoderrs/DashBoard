package com.example.Apicountry.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name ="country")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "product_sequence", sequenceName = "PRODUCT_SEQ", allocationSize =1)
    private Long id;

    @Column(nullable = true)
    @JsonProperty("end_year")
    private String end_year;

    @Column(nullable = true)
    @JsonProperty("intensity")
    private int intensity;

    @Column(nullable = true)
    @JsonProperty("sector")
    private String sector;

    @Column(nullable = true)
    @JsonProperty("topic")
    private String topic;

    @Column(nullable = true)
    @JsonProperty("insight")
    private String insight;

    @Column(nullable = true)
    @JsonProperty("url")
    private String url;

    @Column(nullable = true)
    @JsonProperty("region")
    private String region;

    @Column(nullable = true)
    @JsonProperty("start_year")
    private String start_year;

    @Column(nullable = true)
    @JsonProperty("impact")
    private String impact;

    @Column(nullable = true)
    @JsonProperty("added")
    private String added;

    @Column(nullable = true)
    @JsonProperty("published")
    private String published;

    @Column(nullable = true)
    @JsonProperty("country")
    private String country;

    @Column(nullable = true)
    @JsonProperty("relevance")
    private int relevance;

    @Column(nullable = true)
    @JsonProperty("pestle")
    private String pestle;

    @Column(nullable = true)
    @JsonProperty("source")
    private String source;

    @Column(nullable = true)
    @JsonProperty("title")
    private String title;

    @Column(nullable = true)
    @JsonProperty("likelihood")
    private int likelihood;
}
