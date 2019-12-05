<template>
    <div class="PersonalType">
        <h3 class="stock-possesion-title">
            LG디스플레이 주식보유 여부
        </h3>
        <div class="stock-possesion">
            <div class="stock-radio-wrap">
                <label>
                    <input 
                        type="radio"
                        name="stock"
                    />
                    <div class="stock-radio-box">
                        보유
                    </div>
                </label>
            </div>
            <div class="stock-radio-wrap">
                <label>
                    <input                                
                        type="radio"
                        name="stock"
                    />
                    <div class="stock-radio-box">
                        미보유
                    </div>
                </label>
            </div>
            <div class="stock-radio-wrap">
                <label>
                    <input                                
                        type="radio"
                        name="stock"
                    />
                    <div class="stock-radio-box">
                        과거보유
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'PersonalType',
    components: {
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
.PersonalType {
    .stock-possesion-title {
        font-size: 16px;
        letter-spacing: -0.005em;
        color: #8E8E93;
    }
    .stock-possesion{
        margin-top: 12px;
        display: flex;
        justify-content: left;
        text-align: center;

        .stock-radio-wrap {
            flex: 3;

            & label {
                width: 100%;
            }
            & input {
                opacity: 0;
                position: absolute;
            }
            & .stock-radio-box {
                text-align: center;
                border-right: 1px solid #C7C7CC;
                border-top: 1px solid #C7C7CC;
                border-bottom: 1px solid #C7C7CC;
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 13px 0;
                color: #8E8E93;
            }
        }
        .stock-radio-wrap:first-child {
            & .stock-radio-box {
                border-left: 1px solid #C7C7CC;
            }
        }
        & input[type="radio"]:checked + .stock-radio-box {
            background: #8E8E93;
            color: #ffffff;
            border-color: transparent;
        }
    }
}
</style>