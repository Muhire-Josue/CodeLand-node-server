package org.codeland.backend.java.database;

import java.util.ArrayList;

import org.codeland.backend.java.api.model.User;

public class UserDatabase {
	private static ArrayList<User> users = new ArrayList<>();

	public static ArrayList<User> getUsers() {
		return users;
	}

}
