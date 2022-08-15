package org.codeland.backend.java.api.service;

import java.util.ArrayList;

import org.codeland.backend.java.api.model.User;
import org.codeland.backend.java.database.UserDatabase;


public class UserService{
private ArrayList<User> users = UserDatabase.getUsers();
	
	public User getOne (String email, String password) {
		Integer count = 0;
		User user = new User();
 		for(User u : users){
	        if(u.getEmail() != null && u.getEmail().contains(email) && u.getPassword().contains(password)) {
	        	count = count + 1;
	        	user = u;
	        }
	    }
		 user.setUserFound(count > 0);
		 return user;
	}
}
