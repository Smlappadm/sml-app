const { Employ } = require("../db");

const postEmploy = async ({ name, email, phone, position, image, deleted }) => {
  console.log(name);
  const employ = await Employ.create({
    name,
    email,
    phone,
    position,
    image,
    deleted,
  });
  return employ;
};

module.exports = postEmploy;
