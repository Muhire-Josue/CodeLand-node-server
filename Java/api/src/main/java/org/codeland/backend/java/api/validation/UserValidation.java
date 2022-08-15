package org.codeland.backend.java.api.validation;

public class UserValidation {
	
	public boolean validatePassword(String role, String password) {
		if(role.equals("admin") && password.length() == 8) {
			return true;
		}
		if(role.equals("patient") && password.length() == 7) {
			return true;
		}
		if(role.equals("physician") && password.length() == 6) {
			return true;
		}
		if(role.equals("pharmacist") && password.length() == 5) {
			return true;
		}
		return false;
		
	}
	public boolean validateGender(String gender) {
		if (!(gender.equals("male") || gender.equals("female"))) {
			return false;
		} else {
			return true;
		}
	}
}
