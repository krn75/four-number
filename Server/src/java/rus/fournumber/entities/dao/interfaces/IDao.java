package java.rus.fournumber.entities.dao.interfaces;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IDao<T,ID> {

//    @Transactional
//    default boolean addEntity(T entity) throws Exception { throw new Exception("No realization"); };

    @Transactional
    default boolean addEntity(T entity, List<String> names, Long id) throws Exception { throw new Exception("No realization"); };

    @Transactional
    default boolean insertIntoEntity(T entity, Long id) throws Exception { throw new Exception("No realization"); };

    @Transactional
    boolean deleteEntity(ID keyEntity);

    T getEntity(ID keyEntity) ;

    default T getEntityByName(String nameEntity) throws Exception { throw new Exception("No realization"); };
}
