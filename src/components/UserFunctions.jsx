import axios from "axios";

export const register = newUser => {
  return axios
    .post("/api/user/register", {
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};

export const login = user => {
  return axios
    .post("/api/user/login", {
      phone: user.phone,
      password: user.password
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data);
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      if(err.stat)
      console.log(err);
    });
};

export const getProfile = user => {
  return axios
    .get("users/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};