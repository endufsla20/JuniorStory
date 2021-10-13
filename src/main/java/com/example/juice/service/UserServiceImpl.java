package com.example.juice.service;

import java.util.List;

import com.example.juice.bean.User;
import com.example.juice.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
  
  @Autowired
  UserMapper usermapper;

  @Override
  public List<User> getList() {
    return usermapper.getList();
  }
}
