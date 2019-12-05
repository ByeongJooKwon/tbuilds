import axios from 'axios'

const config = {
  baseUrl: 'http://106.10.42.175:3002/api/irgo/'
}

async function getCOMPINFO (getURL) {
  return axios.post(`${config.baseUrl}getSettingInfo`, getURL)
}

async function getKrxData (code) {
  return axios.post(`${config.baseUrl}getKrxXMLData`, code)
}

export { getCOMPINFO, getKrxData }
