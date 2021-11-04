package com.example.juice.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.juice.domain.entity.Member;
import com.example.juice.domain.repository.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {

  @Autowired
  MemberRepository memberRepository;

  @Autowired
  HttpSession session;

  @GetMapping("/")
  public String home() {
    return "account/login";
  }

  @GetMapping("/login")
  public String login() {
    return "account/login";
  }

  @GetMapping("/home")
  public String loginSuccess() {
    return "home";
  }

  @GetMapping("/signup")
  public String signup() {
    return "account/signup";
  }

  @GetMapping("/logout")
  public String logout() {
    session.invalidate();
    return "redirect:/";
  }

  @RequestMapping
  @PostMapping("/login")
  public String loginPost(@ModelAttribute Member member, HttpServletResponse response) throws Exception {
    // 유저리스트에 존재하는 현재 회원가입되어있는 유저 DB에서 이메일과 비밀번호를 AND로 검색하여서 조건문 실행
    Member dbMember = memberRepository.findByUseridAndUserpw(member.getUserid(), member.getUserpw());
    if (dbMember != null) {
      // NULL값이 아닐경우, 즉 이메일과 비밀번호가 모두 일치할 경우 == 회원이 있을 경우
      session.setAttribute("user", dbMember); // session에 현재 유저 정보 저장
      System.out.println(dbMember);
      return "home";
    } else { // 일치하는 정보가 없을 경우 알림을 띄워주고 뒤로가기 실행(로그인창으로 다시 이동한다)
      return "account/loginFail";
    }
  }

  @PostMapping("/signup")
  public String signupPost(@ModelAttribute Member member) {
    List<Member> dbMember = memberRepository.findByUserid(member.getUserid());
    if (dbMember.size() > 0) {
      return "account/signupFail";
    } else {
      memberRepository.save(member);
      return "account/signupSuccess";
    }
  }
}