<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';

	import { onMount } from 'svelte';
	import Typed from 'typed.js';

	import heroBackgroundImage from '../../assets/hero-bg.jpg';

	var options = {
		strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
		typeSpeed: 40,
		loop: true,
	};

	onMount(async () => {
		var typed = new Typed('.typed', options);
	});
</script>

<section
	id="hero"
	class="d-flex flex-column justify-content-center align-items-center"
	style="
		--hero-background-image: url('{heroBackgroundImage}');
		">
	<div class="hero-container" data-aos="fade-in">
		<h1>Alex Smith</h1>
		<p>I'm <span class="typed"></span></p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/section.scss';
	@import '../../styles/app.scss';

	#hero {
		width: 100%;
		height: 100vh;
		background: var(--hero-background-image) top center;
		background-size: cover;

		&:before {
			content: '';
			background: rgba(5, 13, 24, 0.3);
			position: absolute;
			bottom: 0;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
		}

		.hero-container {
			position: relative;
			z-index: 2;
			min-width: 300px;
		}

		h1 {
			margin: 0 0 10px 0;
			font-size: 64px;
			font-weight: 700;
			line-height: 56px;
			color: #fff;
		}

		p {
			color: #fff;
			margin-bottom: 50px;
			font-size: 26px;
			font-family: 'Poppins', sans-serif;

			span {
				color: #fff;
				padding-bottom: 4px;
				letter-spacing: 1px;
				border-bottom: 3px solid #149ddd;
			}
		}
	}

	@media (min-width: $global-width-med) {
		#hero {
			background-attachment: fixed;
		}
	}

	@media (max-width: $global-width-sm) {
		#hero {
			h1 {
				font-size: 28px;
				line-height: 36px;
			}

			h2 {
				font-size: 18px;
				line-height: 24px;
				margin-bottom: 30px;
			}
		}
	}
</style>
