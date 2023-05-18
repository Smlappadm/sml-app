require('dotenv').config();
const {} = process.env;
const axios = require("axios");
const { Leads } = require("../db");

const getAllLeads = async () => {
    const lead = "SML LEADS";
    return lead;
};

module.exports = getAllLeads;
