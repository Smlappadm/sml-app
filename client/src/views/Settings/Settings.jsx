import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Lideres/Employees/Detail/Detail";
import {
  useUser,
  useOrganization,
  useOrganizationList,
} from "@clerk/clerk-react";
import { useState } from "react";
import axios from "axios";
import UploadWidget from "../../components/UploadWidget/UploadWidget"

export default function Settings() {
  const user = useUser().user;

<<<<<<< HEAD
=======
  console.log(user);
>>>>>>> parent of 6db6c39 (Clean code)
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
            <UploadWidget />
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
