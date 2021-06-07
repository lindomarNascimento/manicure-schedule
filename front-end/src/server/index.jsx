const createRegister = (register) => {
  fetch("http://localhost:3003/users/register", {
    method: "POST",
    body: register,
  })
    .then((res) => {
      console.log('res :>> ', res);
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

export default createRegister;
