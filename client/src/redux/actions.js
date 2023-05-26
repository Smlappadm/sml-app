import axios from "axios";
export const GET_ALL_LEAD = "GET_ALL_LEAD";
export const GET_LEAD_UNCHECKED_10 = "GET_LEAD_UNCHECKED_10";
export const GET_LEAD_UNCHECKED = "GET_LEAD_UNCHECKED";
export const GET_LEAD_CHEQUED = "GET_LEAD_CHEQUED";
export const GET_LEAD_CHEQUED_INACTIVE_100 = "GET_LEAD_CHEQUED_INACTIVE_100";
export const ORDER_CLIENTS = "ORDER_CLIENTS";
export const ORDER_CATEGORY = "ORDER_CATEGORY";
export const FILTER_LEVEL = "FILTER_LEVEL";
export const FILTER_STATUS = "FILTER_STATUS";
export const GET_ALL_LEAD_INACTIVE = "GET_ALL_LEAD_INACTIVE";
export const GET_ALL_CORREDORES = "GET_ALL_CORREDORES";
export const GET_ALL_VENDEDORES = "GET_ALL_VENDEDORES";
export const GET_ALL_LEADER = "GET_ALL_LEADER";
export const GET_ALL_CLEVEL = "GET_ALL_CLEVEL";
export const GET_VENDEDOR_ALL_LEADS = "GET_VENDEDOR_ALL_LEADS";
export const GET_LEADS_LLAMADA_VENTA = "GET_LEADS_LLAMADA_VENTA";
export const SET_ROL = "SET_ROL";
export const SET_ACCESS = "SET_ACCESS";
export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_CORREDOR_LEAD = "GET_CORREDOR_LEAD";
//
export const setRol = (rol) => {
  return async (dispatch) => {
    // Simular una operación asincrónica para obtener el valor de rol
    const fetchedRol = await new Promise((resolve) =>
      setTimeout(() => resolve(rol), 2000)
    );

    dispatch({
      type: SET_ROL,
      payload: fetchedRol,
    });
  };
};

export const setAccess = (access) => {
  return {
    type: SET_ACCESS,
    payload: access,
  };
};
export const getEmployees = (employees) => ({
  type: GET_EMPLOYEES,
  payload: employees,
});

//
export const getAllLead = () => {
  return async (dispatch) => {
    const response = await axios.get("/lead");
    const LeadData = response.data;
    dispatch({ type: GET_ALL_LEAD, payload: LeadData });
  };
};
export const getAllCorredores = () => {
  return async (dispatch) => {
    const response = await axios.get("/corredor");
    const corredores = response.data;
    dispatch({ type: GET_ALL_CORREDORES, payload: corredores });
  };
};
export const getAllVendedores = () => {
  return async (dispatch) => {
    const response = await axios.get("/vendedor");
    const vendedores = response.data;
    dispatch({ type: GET_ALL_VENDEDORES, payload: vendedores });
  };
};
export const getAllLeader = () => {
  return async (dispatch) => {
    const response = await axios.get("/leader");
    const leader = response.data;
    dispatch({ type: GET_ALL_LEADER, payload: leader });
  };
};
export const getAllClevel = () => {
  return async (dispatch) => {
    const response = await axios.get("/clevel");
    const clevel = response.data;
    dispatch({ type: GET_ALL_CLEVEL, payload: clevel });
  };
};

export const getLeadUnchecked = () => {
  return async (dispatch) => {
    const response = await axios.get("/lead/unchecked");
    const LeadUnchecked = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED, payload: LeadUnchecked });
  };
};

export const getLeadUnchecked10 = (email) => {
  return async (dispatch) => {
    const response = await axios.get(`/lead/unchecked10?email=${email}`);
    const LeadUnchecked10 = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED_10, payload: LeadUnchecked10 });
  };
};

export const getLeadChecked = () => {
  return async (dispatch) => {
    const response = await axios.get("/lead/checked");
    const LeadChecked = response.data;
    dispatch({ type: GET_LEAD_CHEQUED, payload: LeadChecked });
  };
};

export const getLeadCheckedInactive100 = () => {
  return async (dispatch) => {
    const response = await axios.get("/lead/checkedinactive100");
    const LeadCheckedInactive100 = response.data;
    dispatch({
      type: GET_LEAD_CHEQUED_INACTIVE_100,
      payload: LeadCheckedInactive100,
    });
  };
};

export const orderClients = (order) => {
  return async (dispatch) => {
    dispatch({ type: ORDER_CLIENTS, payload: order });
  };
};
export const orderCategory = (order) => {
  return (dispatch) => {
    dispatch({ type: ORDER_CATEGORY, payload: order });
  };
};
export const filterLevel = (filter) => {
  return (dispatch) => {
    dispatch({ type: FILTER_LEVEL, payload: filter });
  };
};
export const filterStatus = (filterStatus) => {
  return (dispatch) => {
    dispatch({ type: FILTER_STATUS, payload: filterStatus });
  };
};

export const AddLeads = (body) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/lead/", body);
      console.log("se agrego");
      return response.data;
    } catch (error) {
      console.error("Error al agregar el lead:", error);
      throw error;
    }
  };
};

export const getVendedorAllLeads = (email) => {
  return async (dispatch) => {
    const response = await axios.get(`/vendedor/email?email=${email}`);
    const allLeads = response.data.leads;
    console.log(allLeads);

    const allLeadsMaps = allLeads
      .map((item) => {
        if (
          item.status !== "Sin contactar" &&
          item.status !== "Agendar 2do llamado"
        ) {
          return item;
        }
      })
      .filter((item) => item !== undefined);
    dispatch({
      type: GET_VENDEDOR_ALL_LEADS,
      payload: allLeadsMaps,
    });
  };
};
export const getLeadsLLamadaVenta = (email) => {
  return async (dispatch) => {
    const response = await axios.get(`/vendedor/email?email=${email}`);
    const allLeads = response.data.leads;

    const allLeadsVentaMaps = allLeads
      .map((item) => {
        if (item.status === "Agendar 2do llamado") {
          return item;
        }
      })
      .filter((item) => item !== undefined);

    console.log(allLeadsVentaMaps);
    dispatch({
      type: GET_LEADS_LLAMADA_VENTA,
      payload: allLeadsVentaMaps,
    });
  };
};

export const getCorredoresLead = (email) => {
  return async (dispatch) => {
    const response = await axios.get(`/corredor/email/?email=${email}`);
    const corredorLead = response.data;
    dispatch({ type: GET_CORREDOR_LEAD, payload: corredorLead });
  };
};
