<template>
  <div class="HomeIRContact contaner">
    <h2 class="section-title">IR Contact</h2>
    <h3 
        class="section-sube"
        style="margin-bottom: 40px;"
    >
      LG디스플레이 IR 페이지에 방문해 주셔서 감사합니다. <br />
      LG디스플레이는 주주의 권리 보호를 위해 노력하며, 함께 성장하는 기업입니다.
    </h3>
    <div 
        v-for="contact in irContactData"
        class="ir-contact-contents"
    >
        <h5 class="title">
            {{ contact.title }}
        </h5>
        <h5 class="info">
            {{ contact.info }}
        </h5>
    </div>
    <div class="contact-sns">
        <img
            src="../assets/img/Naver.png"
        />
        <img
            src="../assets/img/Facebook.png"
        />
        <img
            src="../assets/img/Twitter.png"
        />
        <img
            src="../assets/img/Instagram.png"
        />
        <img
            src="../assets/img/Youtube.png"
        />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeIRContact',
  data() {
    return {
        irContactData: [
            {
                title: '주소',
                info: '서울특별시 영등포구 여의대로 128, LG트윈타워'
            },
            {
                title: '전화',
                info: '02-3773-1114'
            },
            {
                title: '이메일',
                info: 'ir@lgdisplay.co.kr'
            },
        ]
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeIRContact {
    padding: 200px 0;
    .ir-contact-contents {
        display: flex;
        align-items: center;
        font-size: 16px;
        letter-spacing: -0.5px;
        color: $font-color-base;
        margin-top: 10px;

        .title {
            flex-basis: 80px;
            font-size: 16px;
        }
        .info {
            flex-basis: calc(100% - 80px);
            font-size: 16px;
        }
    }
    .contact-sns {
        margin-top: 41px;
        img {
            width: 45px;
            margin-right: 34px;
        }
    }

    @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .section-sube {
            font-size: 14px !important;
        }
        .ir-contact-contents {
            display: block;
            align-items: center;
            font-size: 16px;
            letter-spacing: -0.5px;
            color: $font-color-base;
            margin-top: 10px;
            padding: 0 16px;

            &:last-child {
                padding-bottom: 20px;
                border-bottom: 1px solid #313439;
            }
            &:first-child {
                padding-top: 20px;
                border-top: 1px solid #313439;
            }

            .title {
                flex-basis: 80px;
                margin-bottom: 5px;
                font-size: 14px;
                color: #8E8E93;
            }
            .info {
                flex-basis: calc(100% - 80px);
                font-size: 14px;
                color: #313439;
            }
        }
        .contact-sns {
            margin-top: 24px;
            padding: 0 16px;
            img {
                width: 30px;
                margin-right: 23px;
            }
        }
    }
}
</style>
