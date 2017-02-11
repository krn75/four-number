package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.Number;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class NumberDao extends TemplateDao<Number,Long>{

    @Override
    public boolean addEntity(Number entity, List list, Long id) throws Exception {
        if ((entity==null) || (em.find(Number.class,entity.getId())!=null)) return false;
        em.persist(entity);
        return true;
    }

    @Override
    public boolean deleteEntity(Long keyEntity) {
        Number entity;
        if ((keyEntity==null) || ((entity=em.find(Number.class, keyEntity))==null)) return false;
        em.remove(entity);
        return true;
    }

    @Override
    public Number getEntity(Long keyEntity) {
        if (keyEntity==0) return null;
        return  em.find(Number.class, keyEntity);
    }

    @Override
    public Number getEntityByName(String nameEntity) throws Exception {
        if (nameEntity==null || nameEntity.length()==0) return null;
        Query query = em.createQuery(String.format("select n from Number n where name like '%s'",nameEntity));
        Number number=null;
        try{
            number= (Number) query.setMaxResults(1).getResultList();
        } catch (Exception e){}

        return number;
    }
}
