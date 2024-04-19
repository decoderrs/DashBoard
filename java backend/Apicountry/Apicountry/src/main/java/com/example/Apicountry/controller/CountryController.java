package com.example.Apicountry.controller;

import com.example.Apicountry.Service.CountryService;
import com.example.Apicountry.entity.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class CountryController {

    @Autowired
    private final CountryService countryService;

    @Autowired
    public CountryController(CountryService countryService){
        this.countryService = countryService;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> returnHelloWorld(){
        return ResponseEntity.ok("Hello world!!!");
    }

    @GetMapping("/get-data")
    public  ResponseEntity<List<Country>> getAllProducts(){
        return countryService.getAllCoutnrydata();
    }

    @PostMapping(path ="/import-json")
    public ResponseEntity<String> importJson(@RequestParam("file") MultipartFile file){
        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("Please upload a file");
            }

            // Get the file name
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            // Save the file to a temporary location
            Path tempLocation = Files.createTempFile("temp-json", ".json");
            file.transferTo(tempLocation);

            // Process the file
            countryService.saveEntitiesFromJsonFile(tempLocation.toString());

            // Delete the temporary file
            Files.delete(tempLocation);

            return ResponseEntity.ok("Data imported successfully");

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error importing data: " + e.getMessage());
        }
     }
}
