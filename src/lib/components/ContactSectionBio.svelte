<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<div class="col-lg-5 d-flex align-items-stretch">
	<div class="info">
		<div class="address">
			<i class="bi bi-geo-alt"></i>
			<h4>Location:</h4>
			<p>A108 Adam Street, New York, NY 535022</p>
		</div>

		<div class="email">
			<i class="bi bi-envelope"></i>
			<h4>Email:</h4>
			<p>info@example.com</p>
		</div>

		<div class="phone">
			<i class="bi bi-phone"></i>
			<h4>Call:</h4>
			<p>+1 5589 55488 55s</p>
		</div>

		<!-- <iframe
			title="Location"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
			frameborder="0"
			style="border:0; width: 100%; height: 290px;"
			allowfullscreen></iframe> -->
	</div>
</div>

<style lang="scss">
	:global(#contact) {
		.info {
			padding: 30px;
			background: #fff;
			width: 100%;
			box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

			i {
				font-size: 20px;
				color: #149ddd;
				float: left;
				width: 44px;
				height: 44px;
				background: #dff3fc;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50px;
				transition: all 0.3s ease-in-out;
			}

			h4 {
				padding: 0 0 0 60px;
				font-size: 22px;
				font-weight: 600;
				margin-bottom: 5px;
				color: #050d18;
			}

			p {
				padding: 0 0 10px 60px;
				margin-bottom: 20px;
				font-size: 14px;
				color: #173b6c;
			}

			.email p {
				padding-top: 5px;
			}

			.social-links {
				padding-left: 60px;

				a {
					font-size: 18px;
					display: inline-block;
					background: #333;
					color: #fff;
					line-height: 1;
					padding: 8px 0;
					border-radius: 50%;
					text-align: center;
					width: 36px;
					height: 36px;
					transition: 0.3s;
					margin-right: 10px;

					&:hover {
						background: #149ddd;
						color: #fff;
					}
				}
			}

			.email:hover i,
			.address:hover i,
			.phone:hover i {
				background: #149ddd;
				color: #fff;
			}
		}
	}
</style>
