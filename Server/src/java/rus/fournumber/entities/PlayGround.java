package java.rus.fournumber.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Ruslan on 07/02/17.
 */
@Entity
@Table(name = "playGround")
public class PlayGround {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date=new Date();

    @OneToOne
    private Game game;
    @OneToOne
    private Player player;
    @OneToMany(mappedBy = "playGround")
    private ArrayList<PlayResponse> playResponses;

    public PlayGround() {
    }


//    public PlayGround(Game game, Player player) {
//        this.game = game;
//        this.player = player;
//    }

    public void addPlayGroung(PlayResponse playResponse) {
        if (playResponse==null) return;
        if (this.playResponses==null) this.playResponses = new ArrayList<PlayResponse>();

        this.playResponses.add(playResponse);
    }

    public ArrayList<PlayResponse> getPlayResponses() {
        return playResponses;
    }

    public void setGame(Game game) {
        this.game = game;
    }
    public Game getGame() {
        return game;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Player getPlayer() {
        return player;
    }


    public long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }


//    public PlayResponse getPlayGroung() {
//        return playGroung;
//    }



}

