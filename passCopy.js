const passBy = "OG Value";
let copy = passBy;
console.log(copy); /* Two same console.logs' two different returns */

copy = "Not the " + passBy;
console.log(copy);
