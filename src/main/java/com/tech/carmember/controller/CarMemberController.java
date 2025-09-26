package com.tech.carmember.controller;

import com.tech.carmember.exception.ResourceException;
import com.tech.carmember.model.CarMember;
import com.tech.carmember.repository.CarMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/carmembers")
public class CarMemberController {

    @Autowired
    private CarMemberRepository carMemberRepository;

    @GetMapping
    public List<CarMember> getAllCarMembers(){
        System.out.println("hihi");
        return carMemberRepository.findAll();
    }

    @PostMapping
    public CarMember createCarMember(@RequestBody CarMember carMember){
        return carMemberRepository.save(carMember);
    }

    @GetMapping("{id}")
    public ResponseEntity<CarMember> getCarMemberById(@PathVariable long id){
        CarMember carMember=carMemberRepository
                .findById(id).orElseThrow(()->
                        new ResourceException("CarMember not exist with id:"+id));

        return ResponseEntity.ok(carMember);
    }

    //업데이트
    @PutMapping("{id}")
    public ResponseEntity<CarMember> updateCarMember(@PathVariable long id,@RequestBody CarMember carMember) {
        CarMember updateCarMember = carMemberRepository
                .findById(id).orElseThrow(() ->
                        new ResourceException("CarMember not exist with id:" + id));

        updateCarMember.setName(carMember.getName());
        updateCarMember.setCarMade(carMember.getCarMade());
        updateCarMember.setEmailId(carMember.getEmailId());

        carMemberRepository.save(updateCarMember);
        return ResponseEntity.ok(updateCarMember);
    }

    //delete
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteCarMember(@PathVariable long id){
        CarMember carMember=carMemberRepository
                .findById(id).orElseThrow(()->
                        new ResourceException("CarMember not exist with id:"+id));

        carMemberRepository.delete(carMember);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


