package org.codeland.backend.java.api.service;

import java.util.ArrayList;

import org.codeland.backend.java.api.model.User;
import org.codeland.backend.java.database.UserDatabase;

public class Patient implements UserServiceInterface{
	private ArrayList<User> users = UserDatabase.getUsers();
	public User login (User userToLogin) {
		if(userToLogin.getRole().equals("admin") && userToLogin.getPassword().length() == 7) {
			Integer count = 0;
			User user = new User();
			for(User u : users){
				if(u.getEmail() != null && u.getEmail().contains(userToLogin.getEmail()) && u.getPassword().contains(userToLogin.getPassword())) {
					count = count + 1;
					user = u;
				}
			}
			user.setUserFound(count > 0);
			return user;
			
		}
		userToLogin.setResponseMsg("Password must be 7 digits");
		userToLogin.setUserFound(false);
		return userToLogin;
	}
	public User signupUser(User user) {
		if(user.getRole().equals("admin") && user.getPassword().length() == 7) {
			user.setId(users.size() + 1);
			users.add(user);
			return user;
		}
		user.setResponseMsg("Password must be 7 digits");
		return user;
	}

}
