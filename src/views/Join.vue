<template>
  <div class="JoinContainer">
    <Splash v-if="isSplash" />
      <AgreeTermsCertification v-if="isAgreeCertification" :isAgreeCertification="isAgreeCertification" :isUserType="isUserType" />
    <UserType v-if="isUserType" />
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import Splash from '@/components/join/Splash.vue'
import AgreeTermsCertification from '@/components/join/AgreeTermsCertification.vue'
import UserType from '@/components/join/UserType.vue'

export default {
  name: 'JoinContainer',
  components: {
    Splash,
    AgreeTermsCertification,
    UserType
  },
  data () {
    return {
      isSplash: true
    }
  },
  props: [
  ],
  filters: {
  },
  computed: {
    isAgreeCertification () {
      return this.$store.state.isAgreeCertification
    },
    isUserType () {
      return this.$store.state.isUserType
    }
  },
  watch: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.isSplash = false
      this.$store.commit('setIsAgreeCertification', true)
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.JoinContainer {
  .section-title {
    font-size: 20px;
    letter-spacing: -0.5px;
    color: #313439;
  }
  .user-form-text,
  .user-phone-certification,
  .user-form-radio {
      font-size: 16px;
      letter-spacing: -0.005em;
      color: #8E8E93;
      margin-bottom: 32px;
  }
  .form-control {
    appearance: none;
    outline: 0;
    box-shadow: none;
    padding-top: 11px;
    padding-bottom: 17px;
    border: 0;
    width: 100%;
    font-size: 16px;
    border-bottom: 0.5px solid #D1D1D6;
  }
}
</style>
