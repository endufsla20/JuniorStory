package com.example.juice.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Member {

	@Id
	@GeneratedValue(
		strategy = GenerationType.AUTO)
	private Long id;
	private String userid;
	private String userpw;
	private String username;
    
}