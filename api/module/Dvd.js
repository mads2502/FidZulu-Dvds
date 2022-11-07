
console.log(process.cwd())
// const data = fs.readFileSync('../../data/location.json', 'utf8');
// console.log(data)


const fs=require('fs');
// let file_1='./Data/dvds.json';
const data=fs.readFileSync('../../data/dvds.json','utf8');
exports.dvds=JSON.parse(data);

const team=fs.readFileSync('../../data/team.json','utf8');
exports.team=JSON.parse(team);

const location=fs.readFileSync('../../data/location.json','utf8');
exports.location=JSON.parse(location);

exports.query_by_location=(arg,value)=>{
    let json_dvds=JSON.parse(data);
    let json_location=JSON.parse(location);
    console.log(json_dvds,json_location);
    for(let i=0;i<json_location.length;i++){
       let place=json_location[i];
       if(place.location==value){
        for(let j=0;j<json_dvds.length;j++){
            let conversion=json_dvds[j].price*place.conversion_rate;
            let total=place.sales_tax*conversion;
            json_dvds[i].price=total;

        }return json_dvds;
       }
       
    }return null;
}
exports.insertDvds=(value)=>{
    try{
        this.dvds.push(value);
        fs.writeFileSync('../../data/dvds.json','utf8',JSON.stringify(this.dvds));
         
   return value;
    }
    catch(err){
        console.log(err);
        throw err;
    }
   

  
}