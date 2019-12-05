<template>
  <div class="Splash">
       <div class="splash-contents">
            <div class="splash-logo">
                <img 
                    width="42px"
                    class="logo"
                    src="../../assets/img/join/img_splash_logo.png"
                />
                <img 
                    width="186px"
                    src="../../assets/img/join/img_splash_title.png"
                />
            </div>
            <div class="splash-sub-title">
                <img 
                    width="130px"
                    src="../../assets/img/join/img_splash_sub.png"
                />
            </div>
        </div>
        <div class="splash-sub-footer">
            <img 
                width="46px"
                src="../../assets/img/join/img_splash_footer.png"
            />
        </div>
  </div>
</template>
<script>
export default {
    name: 'Splash',
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
.Splash {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    text-align: center;

    .splash-contents {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .splash-logo {
        display: flex;
        justify-content: center;
        align-items: center;

        & .logo {
            margin-right: 10px;
        }
    }
    .splash-sub-title {
        margin-top: 20px;
    }
    .splash-sub-footer {
        margin-bottom: 43px;
    }
}
</style>