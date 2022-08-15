package org.codeland.backend.java.api.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codeland.backend.java.api.model.User;
import org.codeland.backend.java.api.service.Admin;
import org.codeland.backend.java.api.service.Patient;
import org.codeland.backend.java.api.service.Pharmacist;
import org.codeland.backend.java.api.service.Physician;
import org.codeland.backend.java.api.service.UserService;
import org.codeland.backend.java.api.validation.UserValidation;

@Path("/users/")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
	UserService userService = new UserService();
	UserValidation userValidation = new UserValidation();
	Admin admin = new Admin();
	Physician physician = new Physician();
	Pharmacist pharmacist = new Pharmacist();
	Patient patient = new Patient();
	@POST
	@Path("auth")
	public User auth(User user) {
		
		if (user.getRequestType().equals("login")) {
			if (user.getRole().equals("admin")) {
				User res = admin.login(user);
				if (res.getUserFound() == true) {
					res.setResponseMsg("User found");
					return res;
				}
			}
			if (user.getRole().equals("patient")) {
				User res = patient.login(user);
				if (res.getUserFound() == true) {
					res.setResponseMsg("User found");
					return res;
				}
			}
			if (user.getRole().equals("physician")) {
				User res = physician.login(user);
				if (res.getUserFound() == true) {
					res.setResponseMsg("User found");
					return res;
				}
			}
			if (user.getRole().equals("pharmacist")) {
				User res = pharmacist.login(user);
				if (res.getUserFound() == true) {
					res.setResponseMsg("User found");
					return res;
				}
			}
			user.setRole("Invalid user role");
			return user;
			
		} else if (user.getRequestType().equals("signup")) {
			User foundUser = userService.getOne(user.getEmail(), user.getPassword());
			System.out.println("=========>>>>>>>> SIGNUP");
			// validate inputs, password and gender
			Boolean isGenderValidBoolean = userValidation.validateGender(user.getGender());
			if(isGenderValidBoolean == false) {
				foundUser.setResponseMsg("Incorrect gender");
				foundUser.setRequestType("signup");
				return foundUser; 
			}
			if (user.getEmail().equals(foundUser.getEmail())) {
				user.setResponseMsg("User already exist");
				return user;
			}
			user.setResponseMsg("User registered");
			if (user.getRole().equals("admin")) {
				return admin.signupUser(user);
			}
			if (user.getRole().equals("patient")) {
				return patient.signupUser(user);
			}
			if (user.getRole().equals("physician")) {
				return physician.signupUser(user);
			}
			if (user.getRole().equals("pharmacist")) {
				return pharmacist.signupUser(user);
			}
			user.setResponseMsg("Invalid user role");
			return user;
		}
		user.setResponseMsg("Auth is not found");
		return user;
	}
}
