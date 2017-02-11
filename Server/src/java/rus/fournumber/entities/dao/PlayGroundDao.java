package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.Game;
import java.rus.fournumber.entities.PlayGround;
import java.rus.fournumber.entities.PlayResponse;
import java.rus.fournumber.entities.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlayGroundDao extends TemplateDao<PlayGround,Long>{
    @Autowired
    PlayerDao playerDao;
    @Autowired
    GameDao gameDao;
//    @Autowired
//    PlayResponseDao playResponseDao;

    @Override
    public boolean addEntity(PlayGround entity,List<String> namesGamePlayer, Long id) throws Exception {
        if ((entity==null) || (em.find(PlayGround.class,entity.getId())!=null)) return false;

        if (namesGamePlayer!=null) {
            int size=namesGamePlayer.size();
            if (size>0) {
                Game game=gameDao.getEntityByName(namesGamePlayer.get(0));
                entity.setGame(game);
            }
            if (size>1) {
                Player player=playerDao.getEntityByName(namesGamePlayer.get(1));
                entity.setPlayer(player);
            }
        }
        em.persist(entity);
        return true;
    }

    @Override
    public boolean insertIntoEntity(PlayGround entity, Long id) throws Exception {
        PlayResponse playResponse;
        if ((entity==null) || (em.find(PlayGround.class,entity.getId())==null)
                || (playResponse=em.find(PlayResponse.class,id))==null) return false;

        entity.addPlayGroung(playResponse);
        return true;
    }

    @Override
    public boolean deleteEntity(Long keyEntity) {
        PlayGround entity;
        if ((keyEntity==null) || ((entity=em.find(PlayGround.class, keyEntity))==null)) return false;
        em.remove(entity);
        return true;
    }

    @Override
    public PlayGround getEntity(Long keyEntity) {
        if (keyEntity==0) return null;
        return  em.find(PlayGround.class, keyEntity);
    }
}
