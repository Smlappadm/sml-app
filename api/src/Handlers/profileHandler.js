const {updateProfile} = require("../controllers/Profile/updateProfile");

const updateProfileHandler = async(req, res) => {
    const {image, name, phone, location, status} = req.body;
    try{
        const update = await updateProfile(req.user, {image, name, phone, location, status})
        res.status(200).json(update);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {updateProfileHandler};