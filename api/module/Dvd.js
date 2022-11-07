const path = require("path");
const filePath = path.join(__dirname, "../../data/dvds.json");
const fs = require("fs");
// let file_1='./Data/dvds.json';
const data = fs.readFileSync(filePath, "utf8");
exports.dvds = JSON.parse(data);

const team = fs.readFileSync(
  path.join(__dirname, "../../data/team.json"),
  "utf8"
);
exports.team = JSON.parse(team);

const location = fs.readFileSync(
  path.join(__dirname, "../../data/location.json"),
  "utf8"
);
exports.location = JSON.parse(location);

exports.query_by_location = (arg, value) => {
  let json_dvds = JSON.parse(data);
  let json_location = JSON.parse(location);
  console.log(json_dvds, json_location);
  for (let i = 0; i < json_location.length; i++) {
    let place = json_location[i];
    if (place.location == value) {
      for (let j = 0; j < json_dvds.length; j++) {
        let dvd = json_dvds[j];
        let conversion = dvd.price * place.conversion_rate;
        console.log(dvd.price + "*" + place.conversion_rate + "=" + conversion);
        let sales_tax = conversion * place.sales_tax;
        console.log(sales_tax);
        dvd.price = sales_tax.toFixed(2);
      }
      return json_dvds;
    }
  }
  return null;
};
exports.insertDvds = (value) => {
  try {
    this.dvds.push(value);
    fs.writeFileSync(
      path.join(__dirname, "../../data/dvds.json"),
      JSON.stringify(this.dvds)
    );

    return value;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
