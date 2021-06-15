console.log("ASYNC AND AWAIT FUNCTION IN JAVASCRIPT");
//   using arrow function
//   const shiva = async ()=>{

//   }

async function shiva() {
  console.log("inside shiva function");
  const response = await fetch("https://api.github.com/users");

  console.log(response);
  console.log("before response");
  let user = await response.json;
  console.log("users resolved");
  // console.log(user);
  return user;
}

console.log("Before calling shiva");
let a = shiva();
console.log("after calling shiva");
console.log(a);
a.then((data) => {
  console.log(data);
});
console.log("last line of this js file");
