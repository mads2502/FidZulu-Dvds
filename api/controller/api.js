const { query_by_location,team , insertDvds,dvds} = require("../module/Dvd");
exports.getDvds = async (req, res) => {
    try {
        let arg = "location";
        let value = req.query.location;
        if(value==null){
            res.status(200).json({
                error: false,
                mssg: "records found",
                count: dvds.length,
                data: dvds
            });
            return;
        }
        let dvds_modified = await query_by_location(arg, value);
if(dvds){
    res.status(200).json({
        error: false,
        mssg: "records found",
        count: dvds.length,
        data: dvds_modified
    });
}
       
        else{
            res.status(404).json({
                error: true,
                mssg: "records not found",
                data: dvds
            });
        }

    }
    catch (err) {
        res.status(500).json({
            error: true,
            mssg: err,
            data: null
        })
    }


}

exports.getTeam=(req,res)=>{
    try{
        

        res.status(200).json({
            error: false,
            mssg: "records found",
            data: team
        });
    }
    catch(err){
        res.status(500).json({
            error: true,
            mssg: err,
            data: null
        })
    }
}


//POST METHOD:OPTIONAL
exports.insertDvds=(req,res)=>{
let v=req.body;
try{
    insertDvds(v);
    res.status(201).json({
        error: false,
            mssg: "Data posted",
            data: v
    })
}
catch(err){
    console.log(err);
    res.status(500).json({
        error: true,
        mssg: err,
        data: null
    })
  
}

}