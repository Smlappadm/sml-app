import Nav from '../../components/Nav/Nav';
import Detail from '../../components/Lideres/Employees/Detail/Detail';
import { useUser } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
//import { ImageUploader } from 'cloudinary-react';
import React, { useState } from 'react';
import { Cloudinary } from "@cloudinary/base"
import axios from 'axios';

// const cloudinary = new Cloudinary({
//   cloud: {
//     cloudName:process.env.VITE_CLOUDINARY_NAME,
//     apiKey: process.env.VITE_CLOUDINARY_APIKEY,
//     apiSecret: process.env.VITE_CLOUDINARY_APISECRET,
//   }
// });
// function ProfileImageForm({ image: savedImage }) {
//   const [file, setFile] = useState(null)
//   const { loading, data } = useState(file)
//   const image = data?.public_id || null

//   const handleChange = (e) => {
//     const file = e.target.files[0]
//     setFile(file)
//     console.log(file)
//   }

//   return (
//     <div>
//       {!loading && image ? (
//         <div className="aspect-s w-24 overflow-hidden rounded-lg">
//           <Image cloudName="dfbafogea" publicId={image} />
//         </div>
//       ) : savedImage ? (
//         <img src={savedImage} className="w-24 rounded-lg" alt="profile" />
//       ) : (
//         <div className="aspect-square w-24 rounded-lg bg-slate-200" />
//       )}
//       <input
//         accept="image/*"
//         type="file"
//         name="image"
//         onChange={handleChange}
//       />
//     </div>
//   )
// }
// const apiKey = process.env.VITE_CLOUDINARY_APIKEY;
// const apiSecret = process.env.VITE_CLOUDINARY_APISECRET;
// const cloudName = process.env.VITE_CLOUDINARY_NAME;


export default function Settings() {
  const user = useUser().user;
  const employees = useSelector(state => state.employees);

  if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
    // Return a loading state or handle the absence of user data
    return <div>Loading...</div>;
  }

  const email = user.emailAddresses[0].emailAddress;


// const [image, setImage] = useState("");
// const [loading, setLoading] = useState("");

// const upLoadImage = async (e) => {
//   const files = e.target.files;
//   const data = new FormData();
//   data.append("file", files[0]);
//   data.append("upload_preset", "prueba");
//   setLoading(true);
//   const res = await fetch(
//     `https://api.cloudinary.com/v1_1/dqsipqfn5/image/upload`,
//     {
//       method: "POST",
//       body: data,
//     }
//   )
//   const file = await res.json();
//   console.log(res)
//   setImage(file.secure_url)
//   setLoading(false)
//   //console.log(upLoadImage)
// }

const submitHandle = async (e) => {
  e.preventDefault();
  const file = e.target.files[0];

  //cargar imagen a cloudinary
  // const uploadResponse = await upload(file, {
  //   folder: "prueba",
  // });
  // //obtenga la url de la imagen cargada
  // const imageUrl = uploadResponse.secure_url;

  // console.log("Url de la imagen cargada:", imageUrl);
  // const files = e.target.files;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_present", "prueba");
  try{
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dqsipqfn5/image/upload", formData
    );
    const data = response.data;
    console.log("soy data",data)
    const imageUrl = data.secure_url;
  }catch(error){
    console.error(error);
  }

}
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center w-full">
        <div className="h-screen w-4/5 flex flex-col justify-start items-center p-8">
          <button>Cambio de Colores</button>
          <div>
            <label>Languaje:</label>
            <select name="Languaje" id="Languaje">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <p className="text-24 m-5 text-white">Edit Profile</p>
          <form  >
          <div className="flex flex-col gap-4 w-10/12 h-full items-center">
            <div>
              <input
                // cloudName="dqsipqfn5"
                // apiKey="VITE_CLOUDINARY_APIKEY"
                //folder="prueba"
                 uploadpreset="marioPrueba"
                // buttonText="Seleccionar imagen"
                id="profilePicture"
                type='file'
                name='file'
                onClick={() => console.log(import.meta.env.VITE_BACKEND_URL)}
                onChange={(e) => submitHandle(e)}
              />
            </div>
            {/* <ProfileImageForm /> */}
            <input
              className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
              placeholder="Name"
              type="text"
              id="name"
            />
            {/* <input
              type="text"
              id="email"
              className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
              placeholder="Email"
            /> */}
            <input
              type="text"
              id="phone"
              className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
              placeholder="Phone"
            />
            <input
              type="text"
              id="location"
              className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
              placeholder="Location"
            />
            <input
              type="text"
              id="status"
              className="bg-transparent border border-white rounded-md text-center w-2/5 h-1/5 shadow-md shadow-white p-1 text-[#d1d1d1]"
              placeholder="Status"
            />
            <button className="bg-[#334155] hover:bg-[#4f6686] text-white py-2 px-4 rounded-full m-5">
              Save Changes
            </button>
          </div>
          </form>
        </div>
        {user && (
          <Detail
            name={user.fullName}
            picture={user.experimental_imageUrl}
            email={email}
          />
        )}
      </div>
    </>

  );
}