import Nav from "../../components/Nav/Nav";
import Detail from "../../components/Lideres/Employees/Detail/Detail";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCorredores, getAllVendedores, getAllClevel, getAllLeader } from "../../redux/actions";
import { useDispatch } from "react-redux";
import UploadWidget from "../../components/UploadWidget/UploadWidget";
import { Image } from 'cloudinary-react';
const { VITE_CLOUND_NAME } = import.meta.env;
import { useSelector } from "react-redux";
import styles from "./Settings.module.css";
import axios from "axios";

export default function Settings() {
  const user = useUser().user;
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const corredores = useSelector(state => state.corredores);
  const vendedores = useSelector(state => state.vendedores);
  const leader = useSelector(state => state.leader);
  const clevel = useSelector(state => state.clevel);
  const dispatch = useDispatch();
  const allEmployees = [...corredores, ...vendedores, ...clevel, ...leader];
  const selectedEmployee = allEmployees.find(employee => employee.email === userEmail);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    birthdate: false,
    country: false,
    contactNumber: false,
    description: false,
  });

  const [formData, setFormData] = useState({
    birthdate: '',
    photo: '',
    country: '',
    contactNumber: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    // Validar que solo se ingresen números en el campo "contactNumber"
    if (name === "contactNumber" && isNaN(value)) {
      return; // No actualizar el estado si el valor no es un número
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar que todos los campos estén llenos
    if (
      formData.birthdate === "" ||
      formData.country === "" ||
      formData.contactNumber === "" ||
      formData.description === ""
    ) {
      setFormErrors({
        birthdate: formData.birthdate === "",
        country: formData.country === "",
        contactNumber: formData.contactNumber === "",
        description: formData.description === "",
      });
      return; // No enviar el formulario si algún campo está vacío
    }

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
                {formErrors.birthdate && <span className={styles.error}>Ingrese la fecha de nacimiento</span>}

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="País"
                />
                {formErrors.country && <span className={styles.error}>Ingrese el país</span>}

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="Número de contacto"
                />
                {formErrors.contactNumber && <span className={styles.error}>Ingrese el número de contacto</span>}

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={styles.inputStyles}
                  placeholder="Descripción"
                />
                {formErrors.description && <span className={styles.error}>Ingrese la descripción</span>}

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
