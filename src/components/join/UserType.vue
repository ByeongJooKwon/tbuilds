<template>
    <div class="UserType">
        <div class="user-type-contents">
            <h2 class="section-title">
                회원 유형을 <br />
                선택해주세요
            </h2>
            <div class="selet-user-type">
                <div class="selet-user-type-radio left">
                    <div class="radio-wrap">
                        <label>
                            <input 
                                v-model="userType"
                                type="radio"
                                name="userType"
                                value="personal"
                            />
                            <div class="radio-box">
                                개인투자자
                            </div>
                        </label>
                    </div>
                </div>
                <div class="selet-user-type-radio right">
                    <div class="radio-wrap">
                        <label>
                            <input                       
                                v-model="userType"         
                                type="radio"
                                name="userType"
                                value="company"
                            />
                            <div class="radio-box">
                                기관투자자
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div 
                v-if="userType !== ''"
                class="personal-email"
            >
                <div class="user-form-text">
                    <h5>이메일</h5>
                    <input
                        class="form-control"
                        type="text" 
                    />
                </div>
            </div>
            <PersonalType
                v-if="userType === 'personal'"
            />
            <CompanyType
                v-if="userType === 'company'"
            />
        </div>
        <button
            v-if="userType !== ''"
            type="button"
            class="complete-join-button"
        >
            시작하기
        </button>
    </div>
</template>
<script>
import PersonalType from '@/components/join/PersonalType.vue';
import CompanyType from '@/components/join/CompanyType.vue';

export default {
    name: 'UserType',
    components: {
        PersonalType,
        CompanyType
    },
    data() {
        return {
            userType: '',
        };
    },
    props: [
    ],
    filters: {
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
.UserType {
    display: flex;
    flex-direction: column;
    padding: 48px 28px 0 28px;
    height: 100vh;

    .user-type-contents {
        flex: 1;
    }

    .selet-user-type {
        margin-top: 34px;
        display: flex;
        justify-content: space-between;

        .selet-user-type-radio.left {
            flex: 1;
            margin-right: 6px;
        }
        .selet-user-type-radio.right {
            flex: 1;
            margin-left: 6px;
        }
    }
    .personal-email {
        margin-top: 34px;
    }
    .complete-join-button {
        appearance: none;
        background: #E91E63;
        border-radius: 4px;
        color: #ffffff;
        font-size: 18px;
        padding: 11px;
        width: 100%;
        border: 0;
        margin-bottom: 67px;
    }
}
</style>