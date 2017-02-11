package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.Game;
import java.rus.fournumber.entities.Number;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class GameDao extends TemplateDao<Game,Long>{
    @Autowired NumberDao numberDao;

    @Override
    public boolean addEntity(Game entity, List<String> numbersName, Long id) throws Exception {
        if ((entity==null) || (em.find(Game.class,entity.getId())!=null)) return false;

        ArrayList<Number> numberArrayList= new ArrayList<>();
        if (numberDao!=null){
            Number number;
            for (String name : numbersName) {
                number=numberDao.getEntityByName(name);
                if (number!=null) numberArrayList.add(number);
            }
            entity.setNumbers(numberArrayList);
        }

        em.persist(entity);
        return true;
    }

    @Override
    public boolean deleteEntity(Long keyEntity) {
        Game entity;
        if ((keyEntity==null) || ((entity=em.find(Game.class, keyEntity))==null)) return false;
        em.remove(entity);
        return true;
    }

    @Override
    public Game getEntity(Long keyEntity) {
        if (keyEntity==0) return null;
        return  em.find(Game.class, keyEntity);
    }


}
