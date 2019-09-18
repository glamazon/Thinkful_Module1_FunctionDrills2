function jediName(lastName, firstName) {

  return lastName.slice(0, 3) + firstName.slice(0, 2);

}
let output = jediName("Skywalker", "Luke");
console.log(output);