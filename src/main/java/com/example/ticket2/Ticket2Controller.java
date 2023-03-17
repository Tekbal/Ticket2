package com.example.ticket2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Ticket2Controller {
    private final List<Ticket2> tickets  = new ArrayList<>();
    @PostMapping("/save")
    public void save(Ticket2 ticket){tickets.add(ticket);}
    @GetMapping("/show")
    public List<Ticket2> show() {return tickets;}

    @GetMapping("/cleaner")
    public void setTickets(){tickets.clear();}
}
