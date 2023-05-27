const {Profile} = require("../../models/Profile");

const updateProfile = async(user,{image, name, phone, location, status}) => {
    if(!user) throw new Error("enter the user of the profile")

    const update = {}

    if(image) update.image = image;
    if(location) update.location = location;
    if(status) update.status = status;
    if(phone) update.phone = phone;
    if(name){
        const existingProfile = await Profile.findOne({name});
        if(existingProfile){
            update.name = name;
        }
    }
    const upProfile = await Profile.findOneAndUpdate({user: user}, update, {new: true});
    return upProfile;
}

module.exports = {updateProfile}