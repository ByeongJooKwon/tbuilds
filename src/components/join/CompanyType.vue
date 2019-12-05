<template>
    <div class="CompanyType">
        <div class="company-select-box">
            <div 
                class="company-select"
                :class="{'active': company !== ''}"
                @click="selectedCompany('company')"
            >
                <h3 v-if="company !== ''">{{ company }}</h3>
                <h3 v-else>회사</h3>
                <img 
                    width="10px"
                    class="company-select-arrow"
                    src="../../assets/img/join/ic_company_info_arrow.png"
                />
            </div>
            <div 
                class="company-select"
                :class="{'active': job !== ''}"
                @click="selectedCompany('job')"
            >
                <h3 v-if="job !== ''">{{ job }}</h3>
                <h3 v-else>직군</h3>
                <img 
                    width="10px"
                    class="company-select-arrow"
                    src="../../assets/img/join/ic_company_info_arrow.png"
                />
            </div>
        </div>
        
        <SelectedCompany
            v-if="isSelectedCompanyModal"
        />

        <div
            v-if="company !== '' && job !== ''"
            class="job-card-box"
        >
            <div>
                <img 
                    width="50px"
                    src="../../assets/img/join/ic_camera.png"
                />
                <h3>
                    본인 확인을 위해 명함을 준비해주세요
                </h3>
                <h5>
                    다음 화면에서 촬영을 진행합니다.
                </h5>
            </div>
        </div>
    </div>
</template>
<script>
import SelectedCompany from '@/components/join/SelectedCompany.vue';
// import SelectedJob from '@/components/join/SelectedJob.vue';

export default {
    name: 'CompanyType',
    components: {
        SelectedCompany
    },
    data() {
        return {
        };
    },
    props: [
    ],
    filters: {
    },
    computed: {
        company() {
            return this.$store.state.company;
        },
        job() {
            return this.$store.state.job;
        },
        isSelectedCompanyModal() {
            return this.$store.state.isSelectedCompanyModal;
        },
    },
    watch: {
    },
    methods: {
        selectedCompany(type) {
            this.$store.commit('setIsSelectedCompany', true);
            this.$store.commit('setCompanyType', type);
        }
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
.CompanyType {

    .company-select-box {
        display: flex;
        justify-content: space-between;
    }

    .company-select {
        flex-basis: calc(50% - 6px);
        border: 1px solid #C7C7CC;
        border-radius: 4px;
        padding: 11px;
        position: relative;
        cursor: pointer;
        background: #fff;

        &.active {
            background: #EFEFF4;
            border: 1px solid #EFEFF4;
        }

        &:focus,
        &:active {
            background: #fff;
        }

        & h3 {
            font-size: 18px;
            color: #8E8E93;
        }
        .company-select-arrow {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translate(0, -50%);
        }
    }
    .job-card-box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 59px;
        margin-bottom: 112px;

        & h3 {
            font-size: 16px;
            letter-spacing: -0.5px;
            color: #000000;
            margin-top: 19px;
        }
        & h5 {
            font-size: 12px;
            letter-spacing: -0.5px;
            color: #8E8E93;
        }
    }
}
</style>