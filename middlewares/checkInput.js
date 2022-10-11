const countries = require('../countries/countries');

const checkInput = (req,res,next) => {
    const cityName = req.params.cityName.toLowerCase();
    if(cityName in countries){
        req.cityName = countries[cityName];
        next();
    }
    else{
        res.status(400).json({
            sucess:false,
            message:"Invalid Input! Please check input value !"
        })
    }  
}
module.exports = checkInput;