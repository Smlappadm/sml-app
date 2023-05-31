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
import styles from "./Settings.module.css"
import axios from "axios";

const paises = [
  "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
]


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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    if (formData.birthdate.length > 0) {
      formData.birthdate = formData.birthdate.substring(0, 10);
    }

    if (formData.birthdate === "") {
      formData.birthdate = selectedEmployee.birthdate;
    }

    if (formData.photo === "") {
      formData.photo = selectedEmployee.photo;
    }
    if (formData.country === "") {
      formData.country = selectedEmployee.country;
    }
    if (formData.contactNumber === "") {
      formData.contactNumber = selectedEmployee.contactNumber;
    }
    if (formData.description === "") {
      formData.description = selectedEmployee.description;
    }
    axios.put(`${selectedEmployee.rol}/${selectedEmployee._id}`, formData)
      .then((response) => {
        // Manejar la respuesta exitosa aquí si es necesario
        console.log(response);
        setFormSubmitted(true); // Establecer el estado formSubmitted en true
        dispatch(getAllCorredores());
        dispatch(getAllVendedores());
        dispatch(getAllLeader());
        dispatch(getAllClevel());
      })
      .catch((error) => {
        // Manejar el error aquí si es necesario
        console.error(error);
      });
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

  return (
    <>

      <Nav />
      {
        <div className="flex justify-center items-center w-full">
          <div className="h-screen w-4/5  flex flex-col justify-start items-center p-8">
            <div>

              <h2 className={styles.title}>settings</h2>
              <form onSubmit={handleSubmit} className={styles.form}>


                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="Fecha de nacimiento"
                />

                {/* <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="País"
                /> */}
                <select name="country" value={formData.country} onChange={handleChange} className={styles.inputStyles}>
                  {paises.map((pais) => (
                    <option key={pais} value={pais} className={styles.option}>
                      {pais}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="Número de contacto"
                />

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="Descripción"
                />

                <div className={styles.pictureInput} >
                  <UploadWidget onImageUpload={handleImageUpload} />
                  {profileImageUrl && (
                    <Image name="photo" onChange={handleChange} value={profileImageUrl} cloudName={VITE_CLOUND_NAME} publicId={profileImageUrl} className={styles.picture} />
                  )}
                </div>

                <button type="submit" className={styles.button}>Enviar</button>
              </form>

            </div>
          </div>
          <Detail
            key={formSubmitted ? "submitted" : "not-submitted"}
            name={user?.fullName}
            picture={selectedEmployee?.photo}
            email={user?.emailAddresses[0].emailAddress}
            contactNumber={selectedEmployee?.contactNumber}
            description={selectedEmployee?.description}
            country={selectedEmployee?.country}
            birthdate={selectedEmployee?.birthdate.substring(0, 10)}
          />
        </div>
      }{" "}
    </>
  );
}






{/* <button>Cambio de Colores</button>
            <div>
              <>Languaje:</>
              <select name="Languaje" id="Languaje">
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div> */}
{/* <>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </>
      <br />
      <>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </> */}
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