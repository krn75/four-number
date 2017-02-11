package java.rus.fournumber.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;

@Entity
@Table(name = "response")
public class PlayResponse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date=new Date();
    private int plus=0;
    private int minus=0;
    private Boolean status=true;

    @ManyToOne
    private PlayGround playGround;
    @OneToMany
    private ArrayList<Number> request;


    public PlayResponse() {
    }

    public void setPlus(int plus) {
        this.plus = plus;
    }

    public void setMinus(int minus) {
        this.minus = minus;
    }

    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public int getPlus() {
        return plus;
    }

    public int getMinus() {
        return minus;
    }

    public Boolean getStatus() {
        return status;
    }

    public PlayGround getPlayGround() {
        return playGround;
    }

    public void setPlayGround(PlayGround playGround) {
        this.playGround = playGround;
    }

    public ArrayList<Number> getRequest() {
        return request;
    }

    public void setRequest(ArrayList<Number> request) {
        this.request = request;
    }
}
