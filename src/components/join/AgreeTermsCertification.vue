<template>
    <div class="AgreeTermsCertification">
        <h2 class="section-title">
            서비스 이용을 위한 <br />
            본인확인 단계입니다.
        </h2>
        <div class="agree-contents-box">
            <div 
                class="agree-all-checked"
            >
                <div class="check-box-wrap size-lg">
                    <label>
                        <input 
                            v-model="isAllChecked"
                            type="checkbox"
                        />
                        <div class="checkbox"></div>
                        <div class="text all-check-title">
                            <span>모두 동의합니다.</span>
                        </div>
                    </label>
                </div>
                <img 
                    width="23px"
                    src="../../assets/img/join/ic_all_agree_arrow.png"
                    @click="agreeBoxToggle()"
                />
            </div>
            <div
                v-if="openAgreeBox"
                class="agree-checked-group"
            >
                <div 
                    v-for="agree in agreeList"
                    class="check-box-wrap agree-checked-item"
                >
                    <label>
                        <input 
                            type="checkbox"
                            v-model="agree.checked"
                        />
                        <div class="checkbox"></div>
                        <div class="text agree-check-title">
                            <span>{{ agree.title }}</span>
                            <img 
                                width="11px"
                                src="../../assets/img/join/ic_agree_arrow.png"
                            />
                        </div>
                    </label>
                </div>
            </div>
            <div 
                v-if="isAllChecked"
                class="user-information"
            >
                <div class="user-form-text">
                    <h5>이름</h5>
                    <input
                        class="form-control"
                        type="text" 
                    />
                </div>
                <div class="user-form-text">
                    <h5>생년월일</h5>
                    <input
                        class="form-control"
                        type="text" 
                    />
                </div>
                <div class="user-form-radio">
                    <h5>성별</h5>
                    <div class="user-genger">
                        <div class="user-genger-radio left">
                            <div class="radio-wrap">
                                <label>
                                    <input 
                                        type="radio"
                                        name="gender"
                                    />
                                    <div class="radio-box">
                                        남자
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="user-genger-radio right">
                            <div class="radio-wrap">
                                <label>
                                    <input                                
                                        type="radio"
                                        name="gender"
                                    />
                                    <div class="radio-box">
                                        여자
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-phone-certification">
                    <h5>휴대폰 번호</h5>
                    <div
                        class="phone-request"
                    >
                        <div class="user-phone-input">
                            <div class="select-box">
                                <select>
                                    <option>SKT</option>
                                    <option>KT</option>
                                    <option>LG</option>
                                </select>
                                <img
                                    class="select-arrow"
                                    width="11px"
                                    src="../../assets/img/join/ic_phone_certification.png"
                                />                
                            </div>
                            <input                                
                                type="number"
                                class="form-control"
                            />
                        </div>
                        <button 
                            v-if="!userPhoneCertification" 
                            type="button"
                            @click="phoneRequest()"
                        >
                            인증요청
                        </button>
                    </div>
                    <div
                        v-if="userPhoneCertification" 
                        class="phone-response"
                    >
                        <h5>
                            인증번호
                        </h5>
                        <input                                
                            type="number"
                            class="form-control"
                        />
                        <h6 class="phone-response-time">
                            2:56
                        </h6>
                        <button 
                            type="button"
                            @click="phoneCertificationComplete()"
                        >
                            인증
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'AgreeTermsCertification',
    components: {
    },
    data() {
        return {
            agreeList: [
                {
                    title: '개인정보수집/이용/취급위탁동의',
                    checked: false,
                },
                {
                    title: '고유식별정보처리동의',
                    checked: false,
                },
                {
                    title: '통신사이용약관동의',
                    checked: false,
                },
                {
                    title: '본인확인서비스이용약관동의',
                    checked: false,
                }
            ],
            openAgreeBox: true,
            isAllChecked: false,
            userPhoneCertification: false
        };
    },
    props: [
        'isUserType',
        'isAgreeCertification'
    ],
    filters: {
    },
    computed: {
    },
    watch: {
        isAllChecked() {
            this.agreeList.map(list => {
                this.isAllChecked === true ? list.checked = true : list.checked = false;
            });
        }
    },
    methods: {
        phoneCertificationComplete() {
            this.$store.commit('setIsAgreeCertification', false);
            this.$store.commit('setIsUserType', true);
        },
        agreeBoxToggle() {
            this.openAgreeBox ? this.openAgreeBox = false : this.openAgreeBox = true;            
        },
        phoneRequest() {
            this.userPhoneCertification = true;
        }
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
.AgreeTermsCertification {
    padding: 48px 28px 0 28px;

    .agree-all-checked {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 34px;
        padding-bottom: 20px;
        border-bottom: 0.5px solid #D1D1D6;

        .all-check-title {
            font-size: 26px;
            letter-spacing: -0.005em;
            color: #E91E63;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .agree-checked-group {
        margin-top: 30px;

        .agree-checked-item {
            margin-bottom: 24px;

            &:last-child {
                margin-bottom: 0;
            }

            .agree-check-title {
                font-size: 15px;
                letter-spacing: -0.005em;
                color: #313439;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
    .user-information {
        margin-top: 26px;

        .user-genger {
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .user-genger-radio.left {
                flex: 1;
                margin-right: 6px;
            }
            .user-genger-radio.right {
                flex: 1;
                margin-left: 6px;
            }
        }
        .user-phone-certification {
            
            .user-phone-input {
                display: flex;
                justify-content: left;
                align-items: center;
                margin-top: 11px;

                .select-box {
                    position: relative;
                    flex-basis: 85px;
                    width: 85px;
                    flex-shrink: 0;
                    margin-right: 10px;

                    & select {
                        appearance: none;
                        background: #8E8E93;
                        color: #ffffff;
                        width: 100%;
                        font-size: 18px;
                        padding: 10px;
                    }

                    .select-arrow {
                        position: absolute;
                        right: 11px;
                        top: 50%;
                        transform: translate(0, -50%);
                    }
                }
                
            }
            .phone-response{
                margin-top: 43px;
            }
            .phone-response,
            .phone-request {
                & button {
                    appearance: none;
                    background: #E91E63;
                    border-radius: 4px;
                    color: #ffffff;
                    font-size: 18px;
                    padding: 11px;
                    width: 100%;
                    margin-top: 33px;
                    border: 0;
                }
                .phone-response-time {
                    font-size: 12px;
                    text-align: right;
                    letter-spacing: -0.005em;
                    color: #E91E63;
                    margin-top: 7px;
                }
            }
        }
    }
}
</style>