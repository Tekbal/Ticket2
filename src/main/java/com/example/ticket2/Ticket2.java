package com.example.ticket2;

public class Ticket2 {
    private String filmname;
    private int count1;
    private String firstname;
    private String lastname;
    private String phone;
    private String email;

    public Ticket2(String filmname, int count1, String firstname, String lastname, String phone, String email) {
        this.filmname = filmname;
        this.count1 = count1;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
    //public Ticket2(){}
    public String getFilmname() {
        return filmname;
    }

    public void setFilmname(String filmname) {
        this.filmname = filmname;
    }

    public int getCount1() {

        return count1;
    }

    public void setCount1(int count1) {
        this.count1 = count1;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
