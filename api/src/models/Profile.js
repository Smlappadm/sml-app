const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        image: {
            type: String,
        },
        phone: {
            type: String,
        },
        location: {
            type: String,
        },
        status: {
            type: String,
        },
    },
    {timestamps: true}
);

ProfileSchema.pre("find", function () {
    this.where({delete: false});
});

const Profile = new mongoose.model("profile", ProfileSchema);

module.exports = Profile;