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


export default function Settings() {
  const user = useUser().user;
  const userEmail= user?.primaryEmailAddress?.emailAddress;
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const corredores = useSelector(state=> state.corredores);
  const vendedores = useSelector(state=> state.vendedores);
  const leader = useSelector(state=> state.leader);
  const clevel = useSelector(state=> state.clevel);
  const dispatch= useDispatch()
  const allEmployees= [...corredores, ...vendedores, ...clevel, ...leader]

  useEffect(()=>{
    dispatch(getAllCorredores())
    dispatch(getAllVendedores())
    dispatch(getAllLeader())
    dispatch(getAllClevel())
  }, [dispatch])

  const handleSaveChanges = () => {
    // Lógica para guardar los cambios del formulario
  };
  const selectedEmployee = allEmployees.find(employee => employee.email === userEmail);

  console.log(selectedEmployee);
  console.log(allEmployees);
  console.log(userEmail);
  return (
    <>

      <Nav />
      {
        <div className="flex justify-center items-center w-full">
          <div className="h-screen w-4/5  flex flex-col justify-start items-center p-8">
            <button>Cambio de Colores</button>
            <div>
              <label>Languaje:</label>
              <select name="Languaje" id="Languaje">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <UploadWidget onImageUpload={setProfileImageUrl} />
            {profileImageUrl && (
              <img src={profileImageUrl} alt={profileImageUrl} />
            )}
            {/* <Image cloudName={VITE_CLOUND_NAME} publicId="https://res.cloudinary.com/dfbafogea/image/upload/v1685386037/vyqneodxjuihr5e4owni.png" width="300" /> */}
            <div>
              <form>
                <p className="text-24 m-5 text-white">Edit Profile</p>
                <div className="flex flex-col gap-4 w-10/12 h-full items-center">
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
              </form>
            </div>
          </div>
          <Detail
            name={user?.fullName}
            picture={user?.profileImageUrl}
            email={user?.emailAddresses[0].emailAddress}
          />
        </div>
      }{" "}
    </>
  );
}
