package com.example.juice.mapper;

import java.util.List;

import com.example.juice.bean.User;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
  
  List<User> getList();
}
