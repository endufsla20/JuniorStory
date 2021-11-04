package com.example.juice.domain.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(nullable = false, length = 30)
	private String userid;
	@Column(nullable = false, length = 30)
	private String userpw;
	@Column(nullable = false, length = 30)
	private String username;

}