<template>
  <div class="HomeSchedule">
  	<div class="schedule-container">
  		<h2 class="title">
  			다가오는
  			일정
  		</h2>
  		<ul class="schedule-list">
  			<li
  			      @click="clickModal(true)"
  			  >
  				<div>
  					<h4 class="item-date">2019년 10월 28일 13:00</h4>
  					<h3 class="item-title">LG디스플레이, 3분기 실적발표 컨퍼런스콜</h3>
  				</div>
  				<img
  					width="11px" 
  					src="../assets/img/schedule_arrow.png"
  				/>
  			</li>
  			<li
  			      @click="clickModal(true)"
  			  >
  				<div>
	  				<h4 class="item-date">2019. 09. 27</h4>
	  				<h3 class="item-title">2019년 3분기 실적 가이던스 공시</h3>
  				</div>
  				<img
  					width="11px" 
  					src="../assets/img/schedule_arrow.png"
  				/>
  			</li>
  		</ul>
  	</div>
  	<modal-desktop
  	    v-if="isIRModal"
  	>
  	    <div slot="body">
  	        <div 
  	            class="modal-desktop-close"
  	            @click="clickModal(false)"
  	        >
  	            <img
  	                width="40px"
  	                src="../assets/img/ic_modal_close.png"
  	            />
  	        </div>
  	        <div class="modal-mobile-header">
  	        	<img
  	        	    width="32px"
  	        	    src="../assets/img/mobile_modal_close.png"
  	        	    @click="clickModal(false)"
  	        	/>
  	        	<span>일정</span>
  	        </div>
  	        <h5 class="modal-map">Investor Relations > 일정</h5>
  	        <div class="title-image">
  	        	<img
  	        	    width="60px"
  	        	    src="../assets/img/IR_Modal_date.png"
  	        	/>
  	        </div>
  	        <div class="ir-modal-title">
  	        	LG Display 2019년 2분기 <br />
  	        	기업설명회(IR) 개최
  	        </div>
  	        <div class="social-info">
  	            <h5 class="date">
  	                
  	            </h5>
  	            <div class="social-sns">
  	                <img
  	                    width="7px"
  	                    src="../assets/img/modal_facebook.png"
  	                />
  	                <img
  	                    width="18px"
  	                    src="../assets/img/modal_twiiter.png"
  	                />
  	                <img
  	                    width="80px"
  	                    src="../assets/img/modal_share.png"
  	                />
  	            </div>
  	        </div>
  	        <div 
  	        v-for="data in modalData"
  	        class="schedule-table"
  	        >
  	        	<h4 class="title">{{ data.title }}</h4>
  	        	<h5 class="description">{{ data.description }}</h5>
  	        </div>
  	        <div class="schedule-btn">
  	        	<a>컨퍼런스콜 사전신청하기</a>
  	        </div>
  	    </div>
  	</modal-desktop>
  </div>
</template>
<script>

export default {
  data() {
      return {
        isIRModal: false,
        modalData: [
        	{
        		title: '일시',
        		description: '2019년 10월 20일(화) 09:00'
        	},
        	{
        		title: '장소',
        		description: '싱가포르'
        	},
        	{
        		title: '대상',
        		description: '사전 신청한 기관투자자 대상'
        	},
        	{
        		title: '추가내용',
        		description: 'Morgan Stanley Annual Asia Pacific Summit 참가 상기 IR자료는 당사 IR페이지 IR News에 게재될 예정입니다. (게제 일시 : 2019년 11월 5일)'
        	},
        ]
      }
  },
  components: {
  },
  methods: {
      clickModal(isOpen) {
      	const globalBody = document.getElementsByTagName('html')[0];
      	
      	if (isOpen) {
      		globalBody.style.overflow = 'hidden'
      	} else {
      		globalBody.style.overflow = 'inherit'
      	}

        this.isIRModal = isOpen;
      },
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.overflow-hidden {
  overflow: hidden;
}
.HomeSchedule {
	background: #F2F2F2;
	
	.schedule-container {
		width: 1150px;
		margin: 0 auto;
		padding: 73px 0;
		display: flex;
		justify-content: space-between;

		.title {
			font-weight: bold;
			font-size: 32px;
			line-height: 42px;
			color: $font-color-base;
			flex-basis: 150px;
		}

		.schedule-list {
			flex-basis: calc(100% - 150px);
			padding-left: 100px;

			li {
				list-style: none;
				background: #ffffff;
				padding: 30px 36px;
				border-left: 4px solid $brand-color;
				margin-bottom: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item-date {
					color: $brand-color;
					margin-bottom: 10px;
					font-size: 14px;
				}

				.item-title {
					color: $font-color-base;
					opacity: 0.87;
					font-size: 21px;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}

	@media (min-width: 900px) and (max-width: 1149px) {
	  .schedule-container {
	    width: 900px !important;
	  }
	}

	@media ( max-width: 899px ) {
	  .schedule-container {
	  	width: 100%;
	  	margin: 0 auto;
	  	padding: 35px 16px;
	  	display: block;
	  	justify-content: space-between;

	  	.title {
	  		font-weight: bold;
	  		font-size: 20px;
	  		line-height: 42px;
	  		color: $font-color-base;
	  		flex-basis: 150px;
	  	}

	  	.schedule-list {
	  		flex-basis: calc(100% - 150px);
	  		padding-left: 0;
	  		margin-top: 14px;

	  		li {
	  			list-style: none;
	  			background: #ffffff;
	  			padding: 16px 20px;
	  			border-left: 4px solid $brand-color;
	  			margin-bottom: 20px;
	  			display: flex;
	  			justify-content: space-between;
	  			align-items: center;

	  			.item-date {
	  				color: $brand-color;
	  				margin-bottom: 10px;
	  				font-size: 11px;
	  			}

	  			.item-title {
	  				color: $font-color-base;
	  				opacity: 0.87;
	  				font-size: 16px;
	  			}

	  			&:last-child {
	  				margin-bottom: 0;
	  			}

	  			img {
	  				display: none;
	  			}
	  		}
	  	}
	  }
	}
	.title-image {
		margin-top: 50px;
	}
	.ir-modal-title {
		font-weight: bold;
		font-size: 34px;
		letter-spacing: -0.5px;
		color: $font-color-base;
		margin-top: 18px;
	}
	.schedule-table {
		display: flex;
		justify-content: space-between;
		margin-top: 33px;
		margin-bottom: 47px;

		.title {
			padding-top: 12px;
			border-top: 1px solid $border-color;
			flex-basis: calc(20% - 18px);
			font-size: 18px;
			letter-spacing: -0.2px;
			color: $font-color-base;
		}
		.description {
			padding-top: 12px;
			border-top: 1px solid $border-color;
			flex-basis: calc(80% - 18px);
			font-size: 18px;
			letter-spacing: -0.5px;
			color: #545454;
		}
	}
	.schedule-btn {
		width: 100%;
		padding: 21px;
		background: #EFEFF4;
		text-align: center;
		margin-top: 60px;

		& a {
			font-size: 18px;
			letter-spacing: -0.005em;
			color: #000000;
		}
	}
	@media ( max-width: 899px ) {
		.title-image {
			margin-top: 30px;
		}
		.ir-modal-title {
			font-weight: bold;
			font-size: 22px;
			letter-spacing: -0.5px;
			color: $font-color-base;
			margin-top: 13px;
		}
		.schedule-table {
			display: flex;
			justify-content: space-between;
			margin-top: 33px;
			margin-bottom: 47px;

			.title {
				padding-top: 12px;
				border-top: 1px solid #D1D2D2;
				flex-basis: calc(20% - 18px);
				font-size: 16px;
				letter-spacing: -0.2px;
				color: $font-color-base;
			}
			.description {
				padding-top: 12px;
				border-top: 1px solid #D1D2D2;
				flex-basis: calc(80% - 18px);
				font-size: 16px;
				letter-spacing: -0.5px;
				color: #545454;
			}
		}
		.schedule-btn {
			width: 100%;
			padding: 21px;
			background: #EFEFF4;
			text-align: center;
			margin-top: 60px;

			& a {
				font-size: 18px;
				letter-spacing: -0.005em;
				color: #000000;
			}
		}
	}
}
</style>
