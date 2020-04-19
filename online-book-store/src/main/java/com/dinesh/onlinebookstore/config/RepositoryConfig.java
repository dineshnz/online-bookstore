package com.dinesh.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.dinesh.onlinebookstore.entity.Book;
import com.dinesh.onlinebookstore.entity.BookCategory;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {

	//entity manager will get all the entities we define and expose the id for those entities
	@Autowired
	private EntityManager manager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		config.exposeIdsFor(manager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType)
				.toArray(Class[]:: new));
	}
}
