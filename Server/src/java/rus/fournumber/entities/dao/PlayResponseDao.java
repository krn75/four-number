package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.Number;
import java.rus.fournumber.entities.PlayGround;
import java.rus.fournumber.entities.PlayResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PlayResponseDao extends TemplateDao<PlayResponse,Long>{
    @Autowired
    NumberDao numberDao;

    @Override
    public boolean addEntity(PlayResponse entity, List<String> numbersName, Long id) throws Exception {
        PlayGround playGround;
        if ((entity==null) || (em.find(PlayResponse.class,entity.getId())!=null)
                || ((playGround=em.find(PlayGround.class,id))==null)) return false;

        entity.setPlayGround(playGround);

        ArrayList<Number> numberArrayList= new ArrayList<>();
        if (numberDao!=null){
            Number number;
            for (String name : numbersName) {
                number=numberDao.getEntityByName(name);
                if (number!=null) numberArrayList.add(number);
            }
            entity.setRequest(numberArrayList);
        }

        em.persist(entity);
        return true;
    }

    @Override
    public boolean deleteEntity(Long keyEntity) {
        PlayResponse entity;
        if ((keyEntity==null) || ((entity=em.find(PlayResponse.class, keyEntity))==null)) return false;
        em.remove(entity);
        return true;
    }

    @Override
    public PlayResponse getEntity(Long keyEntity) {
        if (keyEntity==0) return null;
        return  em.find(PlayResponse.class, keyEntity);
    }
}


