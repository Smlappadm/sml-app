import {
  GET_ALL_LEAD,
  GET_LEAD_UNCHECKED,
  GET_LEAD_CHEQUED,
  GET_LEAD_UNCHECKED_10,
  GET_LEAD_CHEQUED_INACTIVE_100,
  ORDER_CLIENTS,
  ORDER_CATEGORY,
  FILTER_LEVEL,
  FILTER_STATUS,
  GET_ALL_CORREDORES,
  GET_ALL_VENDEDORES,
} from "./actions";

const initialState = {
  lead: [],
  leadChequed: [],
  leadCheckedInactive100: [],
  leadUnchecked: [],
  leadUnchecked10: [],
  leaderDashboard: [],
  vendedoresDashboard: [],
  corredores: [],
  vendedores: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LEAD:
      return {
        ...state,
        lead: action.payload,
      };
    case GET_LEAD_UNCHECKED:
      return {
        ...state,
        leadUnchecked: action.payload,
      };
    case GET_LEAD_UNCHECKED_10:
      return {
        ...state,
        leadUnchecked10: action.payload,
      };
    case GET_LEAD_CHEQUED:
      return {
        ...state,
        leaderDashboard: action.payload,
        leadChequed: action.payload,
      };
    case GET_LEAD_CHEQUED_INACTIVE_100:
      return {
        ...state,
        leadCheckedInactive100: action.payload,
        vendedoresDashboard: action.payload,
      };

    case ORDER_CLIENTS:
      const copyClient = [...state.leadChequed];
      if (action.payload === "DES") {
        copyClient.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientB.localeCompare(clientA, "default", {
            sensitivity: "accent",
          });
        });
      } else {
        copyClient.sort((a, b) => {
          const clientA = a.name ? a.name.toLowerCase() : "";
          const clientB = b.name ? b.name.toLowerCase() : "";
          return clientA.localeCompare(clientB, "default", {
            sensitivity: "accent",
          });
        });
      }
      return {
        ...state,
        leaderDashboard: copyClient,
      };
    case ORDER_CATEGORY:
      const copyCategory = [...state.leadChequed];
      if (action.payload === "DES") {
        copyCategory.sort((a, b) => {
          const clientA = a.category ? a.category.toLowerCase() : "";
          const clientB = b.category ? b.category.toLowerCase() : "";
          return clientB.localeCompare(clientA, "default", {
            sensitivity: "accent",
          });
        });
      } else {
        copyCategory.sort((a, b) => {
          const clientA = a.category ? a.category.toLowerCase() : "";
          const clientB = b.category ? b.category.toLowerCase() : "";
          return clientA.localeCompare(clientB, "default", {
            sensitivity: "accent",
          });
        });
      }
      return {
        ...state,
        leaderDashboard: copyCategory,
      };
    case FILTER_LEVEL:
      const copyLevel = [...state.leadChequed];
      let filteredLevel = copyLevel;
      const copyLevelVendedores = [...state.leadCheckedInactive100];
      let filteredLevelVendedores = copyLevelVendedores;

      if (action.payload === "0") {
        filteredLevel = copyLevel.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "0";
        });
        filteredLevelVendedores = copyLevelVendedores.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "0";
        });
      }
      if (action.payload === "1") {
        filteredLevel = copyLevel.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "1";
        });
        filteredLevelVendedores = copyLevelVendedores.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "1";
        });
      }
      if (action.payload === "2") {
        filteredLevel = copyLevel.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "2";
        });
        filteredLevelVendedores = copyLevelVendedores.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "2";
        });
      }
      if (action.payload === "incidencia") {
        filteredLevel = copyLevel.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "incidencia";
        });
        filteredLevelVendedores = copyLevelVendedores.filter((client) => {
          const clientLevel = client.level ? client.level : "";
          return clientLevel === "incidencia";
        });
      }
      return {
        ...state,
        leaderDashboard: filteredLevel,
        vendedoresDashboard: filteredLevelVendedores,
      };
    case FILTER_STATUS:
      const copyStatus = [...state.leadChequed];
      let filteredStatus = copyStatus;

      if (action.payload === "contratado") {
        console.log("contratado");
        filteredStatus = copyStatus.filter((client) => {
          const clientStatus = client.status ? client.status : "";
          return clientStatus === "Activo";
        });
      }
      if (action.payload === "no-responde") {
        console.log("no contesta");
        filteredStatus = copyStatus.filter((client) => {
          const clientstatus = client.status ? client.status : "";
          return clientstatus === "No responde";
        });
      }
      if (action.payload === "rechazado") {
        console.log("rechazado");
        filteredStatus = copyStatus.filter((client) => {
          const clientStatus = client.status ? client.status : "";
          return clientStatus === "Rechazado";
        });
      }
      if (action.payload === "sin-contactar") {
        console.log("sin contactar");
        filteredStatus = copyStatus.filter((client) => {
          const clientStatus = client.status ? client.status : "";
          return clientStatus === "Sin Contactar";
        });
      }
      return {
        ...state,
        leaderDashboard: filteredStatus,
      };
    case GET_ALL_CORREDORES:
      return {
        ...state,
        corredores: action.payload,
      };
    case GET_ALL_VENDEDORES:
      return {
        ...state,
        vendedores: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
