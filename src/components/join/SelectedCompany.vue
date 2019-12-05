<template>
    <div class="SelectedCompany">
        <div class="selected-comapnay-header">
            <div 
                class="company-select-back"
                @click="getComapnyData('close')"
            >
                <img 
                    width="10px"
                    src="../../assets/img/join/ic_company_modal_back.png"
                />
            </div>
            <h3 class="title">소속선택</h3>
            <div class="step">
                <h5 
                    :class="{'active': companyType === 'company'}"
                >
                    1
                </h5>
                <h5 
                    :class="{'active': companyType === 'job'}"
                >
                    2
                </h5>
            </div>
        </div>
        <div class="selected-comapnay-search">
            <div 
                v-if="companyType === 'compnay'"
                class="selected-comapnay-input"
            >
                <input
                    type="text"
                    placeholder="Search"
                    class="form-control"
                />
                <img 
                    width="14px"
                    class="search-icon"
                    src="../../assets/img/join/ic_company_search.png"
                />
                <img 
                    class="search-mic"
                    width="20px"
                    src="../../assets/img/join/ic_company_mic.png"
                />
            </div>
        </div>
        <div class="selected-comapnay-contents">
            <div class="selet-comapnay">
                <div 
                    v-if="companyType === 'company'"
                    class="selet-comapnay-radio"
                >
                    <div
                        v-for="compnay in companyData" 
                        class="radio-wrap"
                        @click="getComapnyData('company', compnay)"
                    >
                        <label>
                            <input 
                                type="radio"
                                name="companyName"
                                :value="compnay"
                            />
                            <div class="selet-comapnay-radio">
                                {{ compnay }}
                            </div>
                        </label>
                    </div>
                </div>
                <div 
                    v-if="companyType === 'job'"
                    class="selet-comapnay-radio"
                >
                    <div
                        v-for="job in jobData" 
                        class="radio-wrap"
                        @click="getComapnyData('job', job)"
                    >
                        <label>
                            <input 
                                type="radio"
                                name="jobName"
                                :value="job"
                            />
                            <div class="selet-comapnay-radio">
                                {{ job }}
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'SelectedCompany',
    components: {
    },
    data() {
        return {
            selectdCompany: '',
            companyData: [
                '교보증권',
                '굿모닝신한증권',
                '대신증권',
                '동부증권',
                '동양종합금융',
                '리딩투자증권',
                '미래에셋대우',
                '미래에셋증권',
                '메리츠종금증권',
                '부국증권',
                '삼성증권',
                '신영증권',
                '신한투자금융',
                '신흥증권'
            ],
            jobData: [
                '펀드매니저',
                '애널리스트',
                'IB',
                'PB'
            ]
        };
    },
    props: [
    ],
    filters: {
    },
    computed: {
        companyType() {
            return this.$store.state.companyType;
        },
    },
    watch: {
    },
    methods: {
        getComapnyData(type, value) {
            if (type === 'company') {
                this.$store.commit('setCompany', value);
                this.$store.commit('setIsSelectedCompany', false);
            } else if (type === 'job') {
                this.$store.commit('setJob', value);
                this.$store.commit('setIsSelectedCompany', false);
            } else {
                this.$store.commit('setIsSelectedCompany', false);
            }
        }
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
.SelectedCompany {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
    overflow-y: auto;

    .selected-comapnay-header {
        background: #E91E63;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;

        & .company-select-back {
            flex-basis: 50px;
        }

        & .title {
            flex: 1;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            letter-spacing: -0.5px;
            color: #FFFFFF;
        }   
        & .step {
            flex-basis: 50px;
            display: flex;
            justify-content: left;
            align-items: center;

            & h5 {
                width: 22px;
                height: 22px;
                color: #ffffff;
                border: 1px solid #ffffff;
                border-radius: 50%;
                font-size: 13px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:first-child {
                    margin-right: 5px;
                }

                &.active {
                    background: #fff;
                    color: #E91E63;
                }
            }
            
        }
    }
    .selected-comapnay-search {
        padding: 17px 16px;

        .selected-comapnay-input {
            position: relative;

            & input {
                background: rgba(142, 142, 147, 0.12);
                border-radius: 100px;
                padding: 8px 30px;
                border:0;
            }
            & .search-mic,
            & .search-icon {
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
            }
            & .search-icon {
                left: 10px;
            }
            & .search-mic {
                right: 10px;
            }
        }
    }
    .selected-comapnay-contents {
        .selet-comapnay-radio {
            & label {
                width: 100%;
                text-align: left;
                padding: 10px 30px;
                border-bottom: 1px solid #ECECEC;
                font-size: 16px;
                letter-spacing: -0.005em;
                color: #000000;
            }
        }
    }
}
</style>