import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./CorredoresDashboard.module.css";
import Nav from "../../Nav/Nav";

import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Title,
} from "@tremor/react";

import { CiGlobe, CiMail } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { IoGrid, IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getCorredoresLead } from "../../../redux/actions";
import IconLabelButtons from "./MaterialUi/IconLabelButtons";
import { useUser } from "@clerk/clerk-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CorredoresDashboard = () => {
  const [client, setClient] = useState([]);
  const { corredorLead } = useSelector((state) => state);
  const dispatch = useDispatch();


  console.log(LeadValue);


  const org = useOrganization();
  const orgList = useOrganizationList();
  const user = useUser().user;
  const email = user?.emailAddresses[0]?.emailAddress;
  // const { emailAddress } = user.primaryEmailAddress;


  const handleChangeInstagram = (event, index) => {
    const { name, value } = event.target;

    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        instagram: value,
      };
      return updatedClient;
    });
  };
  const handleChangeEmail = (event, index) => {
    const { name, value } = event.target;
    console.log(value);
    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        email: value,
      };
      return updatedClient;
    });
  };

  const handleClientClick = (event, index) => {
    const { name, value } = event.target;

    setClient((prevState) => {
      const updatedClient = [...prevState];
      updatedClient[index] = {
        ...updatedClient[index],
        [name]: value,
        level: value,
      };

      return updatedClient;
    });
  };

  // const leadUncheckedAsignedCorredor = async () => {
  //   try {
  //     const response = await axios.put(
  //       `/lead/unchecked10/corredor?email=${email}`
  //     );
  //     console.log(response.data);
  //   } catch (error) {}
  // };

  useEffect(() => {

    getCorredoresLead(email)

  }, [dispatch, email]);

  useEffect(() => {
    let clientes = [];
    let i = 0;
    if (corredorLead && corredorLead.length > 0) {
      for (let i = 0; i < corredorLead.length; i++) {
        if (corredorLead[i] && corredorLead[i]._id) {
          clientes.push({
            _id: corredorLead[i]._id,
            name: corredorLead[i].name,
            url: corredorLead[i].url,
            email: corredorLead[i].email,
            instagram: "",
            level: "-",
            checked: false,
            view: true,
          });
        }
      }
    }
    setClient(clientes);
  }, [corredorLead]);

  const SendLeads = (name) => {
    toast.info(`✔ ${name} Send Leads! `, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendLeadsErrorInsta = (name) => {
    toast.error(`❌ Error Instagram incomplete ${name}!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendLeadsErrorLevel = (name) => {
    toast.error(`❌ Error Instagram incomplete ${name}!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendLeadsErrorInsta0 = (name) => {
    toast.error(`❌ Error Instagram with Level 0 ${name}!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendLeadsSuccess = () => {
    toast.success(`✔ Send Leads Success!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const SendLeadsError = (name) => {
    toast.error(`✔ Send Leads Error! ${name}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    SendLeads(user.fullName);
    try {
      for (let i = 0; i < corredorLead.length; i++) {
        if (client[i].level !== "-") {
          if (client[i].instagram.trim() !== "" && client[i].level === "0") {
            SendLeadsErrorInsta0(client[i].name);
          } else if (
            client[i].instagram.trim() === "" &&
            (client[i].level === "incidencia" || client[i].level === "0")
          ) {
            const response = await axios.put(`/lead/${client[i]._id}`, {
              _id: client[i]._id,
              name: client[i].name,
              url: client[i].url,
              instagram: client[i].instagram,
              email: client[i].email,
              level: client[i].level,
              checked: true,
              view: false,
            });
            console.log(response.data);

            // if (client[i].level === "incidencia") {
            //   const emailData = {
            //     clientName: client[i].name,
            //     recipientEmail: "voeffray.jonathan@gmail.com",
            //     message: `Se ha detectado una incidencia clasificada por el corredor ${user.emailAddresses[0].emailAddress} para el cliente ${client[i].name} con el numero de id ${client[i]._id}. Por favor, revisa la situación y toma las medidas necesarias.`,
            //   };

            //   // await axios.post("/corredor/sendmail", emailData);
            // }
          } else if (
            client[i].instagram.trim() !== "" &&
            client[i].level !== "-"
          ) {
            const response = await axios.put(`/lead/${client[i]._id}`, {
              _id: client[i]._id,
              name: client[i].name,
              url: client[i].url,
              instagram: client[i].instagram,
              email: client[i].email,
              level: client[i].level,
              checked: true,
              view: false,
            });
            console.log(response.data);
          } else {
            SendLeadsErrorInsta(client[i].name);
          }
        } else {
          SendLeadsErrorLevel(client[i].name);
        }
      }

      dispatch(getCorredoresLead(email));

      SendLeadsSuccess();

      // dispatch(getLeadUnchecked10(email));

    } catch (error) {
      SendLeadsError();
      console.log({ error: error.message });
    }
  };
  return (
    <>
      <Nav />
      <Card className="w-full m-5 bg-[#222131]">
        <ToastContainer />
        {/* <div className="flex gap-12">
          <button onClick={handleAsignedLead}>Asigned Lead</button>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex gap-10  mt-2 mx-5 ">
              <Title className="font-bold text-[#e2e2e2] text-lg">
                Dashboard
              </Title>
              <div className="flex gap-5">
                <Link to={"/corredores"}>
                  <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores-history"}>
                  <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
              </div>
            </div>

            <div className="flex gap-12" type="submit" onClick={handleSubmit}>
              <IconLabelButtons />
            </div>
          </div>
          <Table className={style.table}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">Web</TableHeaderCell>
                <TableHeaderCell className="text-start">Mail</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody className="h-3/4">
              {client &&
                client.map((item, index) => (
                  <TableRow key={index} className={style.tableCards}>
                    <TableCell className="flex justify-start items-center p-0">
                      <div type="text" id="name" value={item.name}>
                        <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden ">
                          {item.name}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell className="flex justify-start items-center p-0">
                      <Link to={item.url} target="_blank">
                        <p value={item.url}>
                          <CiGlobe className="text-[2rem] text-[#418df0]" />
                        </p>
                      </Link>
                    </TableCell>

                    <TableCell className="flex justify-start w-[10rem] items-center gap-3 p-0 mx-3">
                      <div>
                        <CiMail className="text-[2rem] text-[#418df0]" />
                      </div>
                      <input
                        className={`bg-transparent  w-[12rem] rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none  focus:border-gray-500 placeholder-white ${
                          item.email !== "-" && item.email !== ""
                            ? "border-green-500"
                            : ""
                        }`}
                        type="text"
                        name="email"
                        value={item.email}
                        onChange={(event) => handleChangeEmail(event, index)}
                        placeholder="Ingrese un mail..."
                      />
                    </TableCell>

                    <TableCell className="flex justify-start w-[10rem] items-center gap-3 p-0 mx-3">
                      <div>
                        <GrInstagram className="text-[2rem] text-[#418df0]" />
                      </div>
                      <input
                        className={`bg-transparent w-[12rem] rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:border-gray-500 placeholder-white  ${
                          item.instagram ? "border-green-500" : ""
                        }`}
                        type="text"
                        name="instagram"
                        value={item.instagram}
                        onChange={(event) =>
                          handleChangeInstagram(event, index)
                        }
                        placeholder="Ingrese instagram..."
                      />
                    </TableCell>

                    <TableCell className="flex justify-start items-center p-0">
                      <button
                        className={
                          item.level === "0"
                            ? style.buttonNivelActive
                            : style.buttonNivel
                        }
                        type="button"
                        name={item._id}
                        value="0"
                        onClick={(event) => handleClientClick(event, index)}
                      >
                        0
                      </button>
                      <button
                        className={
                          item.level === "1"
                            ? style.buttonNivelActive
                            : style.buttonNivel
                        }
                        type="button"
                        name={item._id}
                        value="1"
                        onClick={(event) => handleClientClick(event, index)}
                      >
                        1
                      </button>
                      <button
                        className={
                          item.level === "2"
                            ? style.buttonNivelActive
                            : style.buttonNivel
                        }
                        type="button"
                        name={item._id}
                        value="2"
                        onClick={(event) => handleClientClick(event, index)}
                      >
                        2
                      </button>
                      <button
                        className={
                          item.level === "incidencia"
                            ? style.buttonNivelActive
                            : style.buttonNivel
                        }
                        type="button"
                        name={item._id}
                        value="incidencia"
                        onClick={(event) => handleClientClick(event, index)}
                      >
                        ⚠
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </form>
      </Card>
    </>
  );
};

export default CorredoresDashboard;
