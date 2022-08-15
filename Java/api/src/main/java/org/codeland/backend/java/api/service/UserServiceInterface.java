package org.codeland.backend.java.api.service;

import org.codeland.backend.java.api.model.User;

public interface UserServiceInterface {
	public User login (User userToLogin);
	public User signupUser(User user);

}
