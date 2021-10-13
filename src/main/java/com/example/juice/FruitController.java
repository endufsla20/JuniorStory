package com.example.juice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.Map;

@Controller
public class FruitController {

  @GetMapping("/fruit")
  public String getFruit(Model model) {
    Map<String, String> fruitmap = new HashMap<String, String>();
    fruitmap.put("fruit1", "apple");
    fruitmap.put("fruit2", "banana");
    fruitmap.put("fruit3", "orange");
    model.addAttribute("fruit", fruitmap);
    return "fruit.html";
  }
}
