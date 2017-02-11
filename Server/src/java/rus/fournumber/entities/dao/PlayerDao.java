package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.Player;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlayerDao extends TemplateDao<Player,Long>{

@Override
    public boolean addEntity(Player entity, List list, Long id) throws Exception {
        if ((entity==null) || (em.find(Player.class,entity.getId())!=null)) return false;
        em.persist(entity);
        return true;
    }

    @Override
    public boolean deleteEntity(Long keyEntity) {
        Player entity;
        if ((keyEntity==null) || ((entity=em.find(Player.class, keyEntity))==null)) return false;
        em.remove(entity);
        return true;
    }

    @Override
    public Player getEntity(Long keyEntity) {
        if (keyEntity==0) return null;
        return  em.find(Player.class, keyEntity);
    }
}
