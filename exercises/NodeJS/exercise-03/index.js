const dataOnServer = [{ username: "karol", password: "karol" }];

let user = {};

const loginRequest = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = dataOnServer.find(
        data => data.username === username && data.password === password
      );
      if (result) resolve(result);
      else reject("Something went wrong");
    }, 2000);
  });
};

loginRequest("karol", "karol")
  .then(data => {
    console.log("Logged seuccessfully as", data.username);
    user = data;
    console.log(user);
  })
  .catch(err => console.log(err));

console.log(user);
