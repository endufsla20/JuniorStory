package com.example.juice.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.juice.bean.User;
import com.example.juice.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {

  @Autowired
  UserService userService;

  @RequestMapping("/list")
  private String userList(Model model, HttpServletRequest request) {
    List<User> testList = new ArrayList<>();
    testList = userService.getList();
    model.addAttribute("testlist", testList);
    return "list";
  }
}