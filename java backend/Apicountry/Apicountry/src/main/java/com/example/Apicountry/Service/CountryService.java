package com.example.Apicountry.Service;

import com.example.Apicountry.entity.Country;
import com.example.Apicountry.repository.CountryRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class CountryService {
    private final CountryRepository countryRepository;

    public CountryService( CountryRepository countryRepository){
        this.countryRepository = countryRepository;
    }

    public ResponseEntity<List<Country>> saveEntitiesFromJsonFile(String filePath) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        List<Country> entities = objectMapper.readValue(new File(filePath),
            new TypeReference<List<Country>>() {});

        countryRepository.saveAll(entities);

        return ResponseEntity.ok(countryRepository.findAll());
    }

    public  ResponseEntity<List<Country>> getAllCoutnrydata(){
        return ResponseEntity.ok(countryRepository.findAll());
    }
}
