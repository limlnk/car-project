package com.tech.carmember;

import com.tech.carmember.repository.CarMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarmemberApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CarmemberApplication.class, args);
	}

    @Autowired
    private CarMemberRepository bikeMemberRepository;

    @Override
    public void run(String... args) throws Exception {
       /* BikeMember bikeMember=new BikeMember();
        bikeMember.setFirstName("tom1");
        bikeMember.setLastName("john1");
        bikeMember.setEmailId("tom1@mail.com");
        bikeMemberRepository.save(bikeMember);*/
    }

}
