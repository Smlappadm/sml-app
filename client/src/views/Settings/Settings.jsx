import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Lideres/Employees/Detail/Detail";
import {
  useUser,
} from "@clerk/clerk-react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCorredores, getAllVendedores, getAllClevel, getAllLeader } from "../../redux/actions";
import { useDispatch } from "react-redux";
import UploadWidget from "../../components/UploadWidget/UploadWidget"
import { Image } from 'cloudinary-react';
const { VITE_CLOUND_NAME } = import.meta.env;
import { useSelector } from "react-redux";
import axios from "axios";


export default function Settings() {
  const user = useUser().user;
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const corredores = useSelector(state => state.corredores);
  const vendedores = useSelector(state => state.vendedores);
  const leader = useSelector(state => state.leader);
  const clevel = useSelector(state => state.clevel);
  const dispatch = useDispatch()
  const allEmployees = [...corredores, ...vendedores, ...clevel, ...leader]
  const selectedEmployee = allEmployees.find(employee => employee.email === userEmail);

  const [formData, setFormData] = useState({
    birthdate: '',
    photo: '',
    country: '',
    contactNumber: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     axios.put(`${selectedEmployee.rol}/${selectedEmployee._id}`, formData)
       .then((response) => {
         // Manejar la respuesta exitosa aquí si es necesario
         console.log(response);
       })
       .catch((error) => {
         // Manejar el error aquí si es necesario
         console.error(error);
       });
    console.log(formData);
  };
  const handleImageUpload = (imageUrl) => {
    setProfileImageUrl(imageUrl);
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: imageUrl,
    }));
  };

  useEffect(() => {
    dispatch(getAllCorredores())
    dispatch(getAllVendedores())
    dispatch(getAllLeader())
    dispatch(getAllClevel())
  }, [dispatch])

  // console.log(selectedEmployee);
  // console.log(allEmployees);
  console.log(formData);
  console.log(selectedEmployee);
  return (
    <>

      <Nav />
      {
        <div className="flex justify-center items-center w-full">
          <div className="h-screen w-4/5  flex flex-col justify-start items-center p-8">



            <div>
              {/* <img src={selectedEmployee?.photo} alt="" /> */}
              <h1>{selectedEmployee?.name} </h1>
              <h1>{selectedEmployee?.email} </h1>
              <form onSubmit={handleSubmit}>
                
                <br />
                <label>
                  Fecha de nacimiento:
                  <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Foto:
                  <UploadWidget onImageUpload={handleImageUpload} />
                  {profileImageUrl && (
                    // <img src={profileImageUrl} alt={profileImageUrl} />
                    <Image name="photo" onChange={handleChange} value={profileImageUrl} cloudName={VITE_CLOUND_NAME} publicId={profileImageUrl} width="60" />
                  )}

                </label>
                <br />
                <label>
                  País:
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Numero de contacto:
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <label>
                  Descripción:
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <button type="submit">Enviar</button>
              </form>

            </div>
          </div>
          <Detail
            name={user?.fullName}
            picture={selectedEmployee?.photo}
            email={user?.emailAddresses[0].emailAddress}
            contactNumber={selectedEmployee?.contactNumber}
            description={selectedEmployee?.description}
          />
        </div>
      }{" "}
    </>
  );
}






            {/* <button>Cambio de Colores</button>
            <div>
              <label>Languaje:</label>
              <select name="Languaje" id="Languaje">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div> */}
{/* <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label> */}
                    {/* <form>
                <p className="text-24 m-5 text-white">Edit Profile</p>
                <div className="flex flex-col gap-4 w-10/12 h-full items-center">
                  <input
                    className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                  <input
                    type="text"
                    id="email"
                    className="bg-transparent border border-white rounded-md text-center w-2/5 shadow-sm shadow-white p-1 text-[#d1d1d1]"
                    placeholder="Email"
                  />
                  <input
                    type="number"
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
              </form> */}