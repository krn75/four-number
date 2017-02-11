package java.rus.fournumber.entities.dao;

import java.rus.fournumber.entities.dao.interfaces.IDao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;

/**
 * Created by Ruslan on 07/02/17.
 */
public abstract class TemplateDao<T,ID> implements IDao<T,ID> {
    @PersistenceContext(unitName = "mySpringHibernate",type = PersistenceContextType.EXTENDED)
    EntityManager em;
}
