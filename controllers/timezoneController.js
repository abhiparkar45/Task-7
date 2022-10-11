exports.sendTime = async(req, res) => {
    const timeZone = req.cityName;
    const data = new Date(new Date(new Date()).toLocaleString('en-US', {timeZone}));
    
    res.status(200).json({
            success: true,
            timezone:req.cityName,
            Date:data.toLocaleDateString(),
            time:data.toLocaleTimeString()
        }) 
}