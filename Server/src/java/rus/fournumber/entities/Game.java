package java.rus.fournumber.entities;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date=new Date();

    @OneToMany
    private ArrayList<Number> numbers;
//    private Player owner;


    public Game() {
    }


    public void setNumbers(ArrayList<Number> numbers) {
        this.numbers = numbers;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public List<Number> getNumbers() {
        return numbers;
    }


    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", date=" + date +
                ", numbers=" + numbers +
                '}';
    }
}
