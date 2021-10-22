package com.example.juice.service;

import java.util.List;

import com.example.juice.domain.entity.Member;
import com.example.juice.domain.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberRepository userListRepository;

	@Override
	public List<Member> getMember() {
		return userListRepository.findAll();
	}

	@Override
	public List<Member> getUserid(String userid) {
	return userListRepository.findByUserid(userid);
	}

	@Override
	public List<Member> getUserpw(String userpw) {
		return userListRepository.findByUserpw(userpw);
	}

	@Override
	public Member getUseridAndUserpw(String userid, String userpw) {
		return userListRepository.findByUseridAndUserpw(userid, userpw);
	}

}