import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Lideres/Employees_components/Detail/Detail";

export default function Settings() {
  return (
    <>
      <Nav />
      <div className="h-screen w-3/5 gap-3 flex flex-col justify-start items-center p-8">
        <button>Cambio de Colores</button>
        <div>
          <label>Languaje:</label>
          <select name="Languaje" id="Languaje">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
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
      </div>
      <Detail />
    </>
  );
}
