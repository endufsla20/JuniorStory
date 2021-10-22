package com.example.juice.service;

import java.util.List;

import com.example.juice.domain.entity.Member;

public interface MemberService {
	public List<Member> getMember();
	public List<Member> getUserid(String userid);
	public List<Member> getUserpw(String userPassword);
	public Member getUseridAndUserpw(String userEmail, String userPassword);
}