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
export const GET_ALL_CORREDORES = "GET_ALL_CORREDORES"
export const GET_ALL_VENDEDORES = "GET_ALL_VENDEDORES"

export const getAllLead = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead");
    const LeadData = response.data;
    dispatch({ type: GET_ALL_LEAD, payload: LeadData });
  };
};
export const getAllCorredores = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/corredor");
    const corredores = response.data;
    dispatch({ type: GET_ALL_CORREDORES, payload: corredores });
  };
};
export const getAllVendedores = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/vendedor");
    const vendedores = response.data;
    dispatch({ type: GET_ALL_VENDEDORES, payload: vendedores });
  };
};

export const getLeadUnchecked = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/unchecked");
    const LeadUnchecked = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED, payload: LeadUnchecked });
  };
};

export const getLeadUnchecked10 = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/unchecked10");
    const LeadUnchecked10 = response.data;
    dispatch({ type: GET_LEAD_UNCHECKED_10, payload: LeadUnchecked10 });
  };
};

export const getLeadChecked = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/checked");
    const LeadChecked = response.data;
    dispatch({ type: GET_LEAD_CHEQUED, payload: LeadChecked });
  };
};

export const getLeadCheckedInactive100 = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3001/lead/checkedinactive100");
    const LeadCheckedInactive100 = response.data;
    dispatch({ type: GET_LEAD_CHEQUED_INACTIVE_100, payload: LeadCheckedInactive100 });
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
