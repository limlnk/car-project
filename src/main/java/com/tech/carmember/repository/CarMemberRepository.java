package com.tech.carmember.repository;

import com.tech.carmember.model.CarMember;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarMemberRepository extends JpaRepository<CarMember,Long> {
}
