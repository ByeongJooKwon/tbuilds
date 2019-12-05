import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'
const axios = require('axios')
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    isAgreeCertification: false,
    isUserType: false,
    isSelectedCompanyModal: false,
    company: '',
    job: '',
    companyType: '',
    seq: '',
    code: '',
    name: ''
  },
  getters: {
    getKrxXMLData (state) {
      return state.code
    },
    helloWorld (state, payload) {
      return state.company
    }
  },
  mutations: {
    setIsAgreeCertification (state, data) {
      state.isAgreeCertification = data
    },
    setIsUserType (state, data) {
      state.isUserType = data
    },
    setCompany (state, data) {
      state.company = data
    },
    setJob (state, data) {
      state.job = data
    },
    setIsSelectedCompany (state, data) {
      state.isSelectedCompanyModal = data
    },
    setCompanyType (state, data) {
      state.companyType = data
    },
    SET_DATA (state, payload) {
      console.log('mutations start!')
      state.seq = payload.COMP_SEQ
      state.name = payload.COMP_NAME
      state.code = payload.COMP_CODE
      console.log('mutations end!')
    },
    SET_CNAME (state, payload) {
      state.name = payload
    },
    SET_CODE (state, payload) {
      state.code = payload
    },
    helloWorld (state, payload) {
      state.company = payload.message
    }
  },
  actions: {
    async SET_INFO (context) {
      const payload = {
        message: ''
      }
      console.log('start action :')
      await axios.get('http://localhost:9000/nice1')
        .then((res) => {
          const data = res.data.department
          payload.message = data
        }).catch((e) => {
          console.log('e :', e)
        })
      console.log('payload :', payload)
      context.commit('helloWorld', payload)
    }
  }
})
