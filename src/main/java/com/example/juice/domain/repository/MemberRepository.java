package com.example.juice.domain.repository;

import java.util.List;

import com.example.juice.domain.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    
    public List<Member> findByUserid(String userid);
    public List<Member> findByUserpw(String userpw);
    public Member findByUseridAndUserpw(String userid, String userpw);
}