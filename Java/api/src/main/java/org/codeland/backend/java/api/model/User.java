package org.codeland.backend.java.api.model;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User {

	private long id;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String role;
	private String requestType;
	private Boolean userFound;
	private String responseMsg;
	private String country;
	private String gender;
	


	
	public User(long id, String firstName, String lastName, String email, String password, String role,
			String requestType, Boolean userFound, String responseMsg, String country, String gender) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.role = role;
		this.requestType = requestType;
		this.userFound = userFound;
		this.responseMsg = responseMsg;
		this.country = country;
		this.gender = gender;
	}

	public User() {
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getRequestType() {
		return requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public Boolean getUserFound() {
		return userFound;
	}

	public void setUserFound(Boolean userFound) {
		this.userFound = userFound;
	}

	public String getResponseMsg() {
		return responseMsg;
	}

	public void setResponseMsg(String responseMsg) {
		this.responseMsg = responseMsg;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
}
