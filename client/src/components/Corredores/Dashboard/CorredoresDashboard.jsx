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

import { CiGlobe } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { IoGrid, IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getLeadUnchecked10 } from "../../../redux/actions";
import IconLabelButtons from "../../MaterialUi/IconLabelButtons";
import { FaHistory } from "react-icons/fa";
import swal from "sweetalert";
import {
  useUser,
  useOrganization,
  useOrganizationList,
} from "@clerk/clerk-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CorredoresDashboard = () => {
  const [client, setClient] = useState([]);
  const user = useUser().user;
  const org = useOrganization();
  const orgList = useOrganizationList();

  const handleChangeInstagram = (event, index) => {
    const { name, value } = event.target;
    console.log(value);
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

  const handleView = async () => {
    console.log("Enviado el view");
    try {
      for (let i = 0; i < leadUnchecked10.length; i++) {
        const response = await axios.put(`/lead/${client[i]._id}`, {
          view: client[i].view,
        });
        console.log(response.data);
      }
      console.log("view seteados");
    } catch (error) {
      console.log("No se envio el put de view");
    }
  };

  const { leadUnchecked10 } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeadUnchecked10());
    handleView();
  }, [dispatch]);

  useEffect(() => {
    let clientes = [];
    let i = 0;
    if (leadUnchecked10.length > 0) {
      for (i = 0; i < 10; i++) {
        clientes.push({
          _id: leadUnchecked10[i]._id,
          name: leadUnchecked10[i].name,
          url: leadUnchecked10[i].url,
          instagram: "",
          level: "-",
          checked: false,
          view: true,
        });
      }
    }
    setClient(clientes);
  }, [leadUnchecked10]);

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
  const SendLeadsError = () => {
    toast.error(`✔ Send Leads Error!`, {
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
      for (let i = 0; i < leadUnchecked10.length; i++) {
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
              level: client[i].level,
              checked: true,
              view: false,
              corredor: user.fullName,
            });
            console.log(response.data);

            if (client[i].level === "incidencia") {
              const emailhtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
              <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
              <head>
              <meta charset="UTF-8">
              <meta content="width=device-width, initial-scale=1" name="viewport">
              <meta name="x-apple-disable-message-reformatting">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta content="telephone=no" name="format-detection">
              <title>New message 2</title><!--[if (mso 16)]>
              <style type="text/css">
              a {text-decoration: none;}
              </style>
              <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
              <xml>
              <o:OfficeDocumentSettings>
              <o:AllowPNG></o:AllowPNG>
              <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
              </xml>
              <![endif]--><!--[if !mso]><!-- -->
              <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"><!--<![endif]-->
              <style type="text/css">
              #outlook a {
              padding:0;
              }
              .es-button {
              mso-style-priority:100!important;
              text-decoration:none!important;
              }
              a[x-apple-data-detectors] {
              color:inherit!important;
              text-decoration:none!important;
              font-size:inherit!important;
              font-family:inherit!important;
              font-weight:inherit!important;
              line-height:inherit!important;
              }
              .es-desk-hidden {
              display:none;
              float:left;
              overflow:hidden;
              width:0;
              max-height:0;
              line-height:0;
              mso-hide:all;
              }
              @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:36px!important; text-align:left } h2 { font-size:28px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:18px!important; display:block!important; border-right-width:0px!important; border-left-width:0px!important; border-top-width:15px!important; border-bottom-width:15px!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0!important } .es-m-p0r { padding-right:0!important } .es-m-p0l { padding-left:0!important } .es-m-p0t { padding-top:0!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .es-m-p5 { padding:5px!important } .es-m-p5t { padding-top:5px!important } .es-m-p5b { padding-bottom:5px!important } .es-m-p5r { padding-right:5px!important } .es-m-p5l { padding-left:5px!important } .es-m-p10 { padding:10px!important } .es-m-p10t { padding-top:10px!important } .es-m-p10b { padding-bottom:10px!important } .es-m-p10r { padding-right:10px!important } .es-m-p10l { padding-left:10px!important } .es-m-p15 { padding:15px!important } .es-m-p15t { padding-top:15px!important } .es-m-p15b { padding-bottom:15px!important } .es-m-p15r { padding-right:15px!important } .es-m-p15l { padding-left:15px!important } .es-m-p20 { padding:20px!important } .es-m-p20t { padding-top:20px!important } .es-m-p20r { padding-right:20px!important } .es-m-p20l { padding-left:20px!important } .es-m-p25 { padding:25px!important } .es-m-p25t { padding-top:25px!important } .es-m-p25b { padding-bottom:25px!important } .es-m-p25r { padding-right:25px!important } .es-m-p25l { padding-left:25px!important } .es-m-p30 { padding:30px!important } .es-m-p30t { padding-top:30px!important } .es-m-p30b { padding-bottom:30px!important } .es-m-p30r { padding-right:30px!important } .es-m-p30l { padding-left:30px!important } .es-m-p35 { padding:35px!important } .es-m-p35t { padding-top:35px!important } .es-m-p35b { padding-bottom:35px!important } .es-m-p35r { padding-right:35px!important } .es-m-p35l { padding-left:35px!important } .es-m-p40 { padding:40px!important } .es-m-p40t { padding-top:40px!important } .es-m-p40b { padding-bottom:40px!important } .es-m-p40r { padding-right:40px!important } .es-m-p40l { padding-left:40px!important } }
              </style>
              </head>
              <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
              <div class="es-wrapper-color" style="background-color:#F9F4FF"><!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" src="https://gxtlnv.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png" color="#F9F4FF" origin="0.5, 0" position="0.5, 0"></v:fill>
              </v:background>
              <![endif]-->
              <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://gxtlnv.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-image:url(https://gxtlnv.stripocdn.email/content/guids/CABINET_b5bfed0b11252243ebfb1c00df0e3977/images/rectangle_171_3.png);background-repeat:repeat;background-position:center top;background-color:#F9F4FF">
              <tr>
              <td valign="top" style="padding:0;Margin:0">
              <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
              <tr>
              <td align="center" style="padding:0;Margin:0">
              <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B1B1B;width:600px">
              <tr>
              <td align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px">
              <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
              <tr>
              <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
              <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
              <tr>
              <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#E9E9E9;font-size:16px"><img src="https://gxtlnv.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/25469811_developer_male_ICK.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="280" class="adapt-img"></a></td>
              </tr>
              <tr>
              <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><h1 style="Margin:0;line-height:60px;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;font-size:40px;font-style:normal;font-weight:bold;color:#E9E9E9">INCIDENCIA&nbsp;</h1></td>
              </tr>
              </table></td>
              </tr>
              <tr>
              <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
              <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-width:2px;border-style:solid;border-color:#4ca2f8;border-radius:20px;background-image:url(https://gxtlnv.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/group_347_1.png);background-repeat:no-repeat;background-position:left center" background="https://gxtlnv.stripocdn.email/content/guids/CABINET_9aa36f49cdb5185ad35ee0f7a5c7d9380ade3ae69ada3493ecaa145d1284bee9/images/group_347_1.png" role="presentation">
              <tr>
 aqui             <td align="left" class="es-m-p20r es-m-p20l" style="padding:40px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Poppins, sans-serif;line-height:24px;color:#E9E9E9;font-size:16px">hola,<br><br>Se ha dectectado una incidencia en la clasificacion&nbsp; de un lead en el dashboard de corredores<br><br>Lead : ${client[i].name}&nbsp;&nbsp;<br><br>Id :${client[i]._id}&nbsp;<br><br>Corredor : ${user.fullName}  |${user.emailAddresses[0].emailAddress}&nbsp;</p></td>
              </tr>
              </table></td>
              </tr>
              </table></td>
              </tr>
              </table></td>
              </tr>
              </table></td>
              </tr>
              </table>
              </div>
              </body>
              </html>`
              const emailData = {
                clientName: client[i].name,
                recipientEmail: "gustavomontespalavecino@gmail.com",
                html: emailhtml
              };

              await axios.post("/corredor/sendmail", emailData);
            }
          } else if (
            client[i].instagram.trim() !== "" &&
            client[i].level !== "-"
          ) {
            const response = await axios.put(`/lead/${client[i]._id}`, {
              _id: client[i]._id,
              name: client[i].name,
              url: client[i].url,
              instagram: client[i].instagram,
              level: client[i].level,
              checked: true,
              view: false,
              corredor: user.fullName,
            });
            console.log(response.data);
          } else {
            SendLeadsErrorInsta(client[i].name);
          }
        } else {
          SendLeadsErrorLevel(client[i].name);
        }
      }
      SendLeadsSuccess();
      dispatch(getLeadUnchecked10());
    } catch (error) {
      SendLeadsError();
      console.log({ error: error.message });
    }
  };

  return (
    <>
      <Nav />
      {/* <Card className="w-full m-5 bg-[#222131]">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex gap-10  mt-2 mx-5 ">
              <h2 className="font-bold text-[#e2e2e2] text-lg">Dashboard</h2>
              <div className="flex gap-5">
                <Link to={"/corredores"}>
                  <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores/history"}>
                  <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores/history"}>
                  <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
              </div>
            </div>
            <div className="flex gap-12">
              <IconLabelButtons />
            </div>
          </div>
          <Table className={style.table}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">Web</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody className="h-3/4">
              {client.map((item, index) => (
                <TableRow key={item._id} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <div type="text" id="name" value={client[index].name}>
                      <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden">
                        {client[index].name}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <Link to={client[index].url} target="_blank">
                      <p value={client[index].url}>
                        <CiGlobe className="text-[2rem] text-[#418df0]" />
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell className="flex justify-start w-[25rem] items-center gap-3 p-0 mx-3">
                    <div>
                      <GrInstagram className="text-[2rem] text-[#418df0]" />
                    </div>
                    <input
                      className={`bg-transparent w-full rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-white focus:placeholder-black ${
                        client[index].instagram ? "border-green-500" : ""
                      }`}
                      type="text"
                      name="instagram"
                      value={client[index].instagram}
                      onChange={(event) => handleChangeInstagram(event, index)}
                      placeholder="Ingrese un instagram"
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
      </Card> */}
      <Card className="w-full m-5 bg-[#222131]">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <div className="flex gap-10  mt-2 mx-5 ">
              <h2 className="font-bold text-[#e2e2e2] text-lg">Dashboard</h2>
              <div className="flex gap-5">
                <Link to={"/corredores"}>
                  <IoGrid className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores/history"}>
                  <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores/history"}>
                  <IoStatsChart className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
              </div>
            </div>
            <div className="flex gap-12">
              <IconLabelButtons />
            </div>
          </div>
          <Table className={style.table}>
            <TableHead className={style.tableHead}>
              <TableRow className={style.tableRow}>
                <TableHeaderCell className="text-start">Name</TableHeaderCell>
                <TableHeaderCell className="text-start">Web</TableHeaderCell>
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody className="h-3/4">
              {client.map((item, index) => (
                <TableRow key={item._id} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <div type="text" id="name" value={client[index].name}>
                      <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden">
                        {client[index].name}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="flex justify-start items-center p-0">
                    <Link to={client[index].url} target="_blank">
                      <p value={client[index].url}>
                        <CiGlobe className="text-[2rem] text-[#418df0]" />
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell className="flex justify-start w-[25rem] items-center gap-3 p-0 mx-3">
                    <div>
                      <GrInstagram className="text-[2rem] text-[#418df0]" />
                    </div>
                    <input
                      className={`bg-transparent w-full rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-white focus:placeholder-black ${
                        client[index].instagram ? "border-green-500" : ""
                      }`}
                      type="text"
                      name="instagram"
                      value={client[index].instagram}
                      onChange={(event) => handleChangeInstagram(event, index)}
                      placeholder="Ingrese un instagram"
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
      {/* <Card className="w-full m-5 bg-[#222131]">
        <ToastContainer />
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
                <Link className="text-5xl" to={"/corredores/history"}>
                  <FaHistory className="text-[2rem] text-[#418df0] hover:text-[#3570bd]" />
                </Link>
                <Link className="text-5xl" to={"/corredores/history"}>
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
                <TableHeaderCell className="text-start">
                  Instagram
                </TableHeaderCell>
                <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody className="h-3/4">
              {client.map((item, index) => (
                <TableRow key={item._id} className={style.tableCards}>
                  <TableCell className="flex justify-start items-center p-0">
                    <div type="text" id="name" value={client[index].name}>
                      <p className="w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden ">
                        {client[index].name}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell className="flex justify-start items-center p-0">
                    <Link to={client[index].url} target="_blank">
                      <p value={client[index].url}>
                        <CiGlobe className="text-[2rem] text-[#418df0]" />
                      </p>
                    </Link>
                  </TableCell>

                  <TableCell className="flex justify-start w-[25rem] items-center gap-3 p-0 mx-3">
                    <div>
                      <GrInstagram className="text-[2rem] text-[#418df0]" />
                    </div>
                    <input
                      className={`bg-transparent w-full rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-white focus:placeholder-black ${client[index].instagram ? "border-green-500" : ""
                        }`}
                      type="text"
                      name="instagram"
                      value={client[index].instagram}
                      onChange={(event) => handleChangeInstagram(event, index)}
                      placeholder="Ingrese un instagram"
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
      </Card> */}
    </>
  );
};

export default CorredoresDashboard;
