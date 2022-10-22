<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import MobileToggle from '../lib/components/MobileToggle.svelte';
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import AboutSection from '../lib/components/AboutSection.svelte';
</script>

<MobileToggle />

<Header />

<section>
	<Hero />
</section>

<main id="main">
	<section>
		<AboutSection />
	</section>
</main>

<style lang="scss">
	@import '../styles/app.scss';

	#main {
		margin-left: 300px;
	}

	@media (max-width: $global-width-lrg) {
		#main {
			margin-left: 0;
		}
	}

	/*--------------------------------------------------------------
	# Sections General
	--------------------------------------------------------------*/

	section {
		padding: 60px 0;
		overflow: hidden;
	}

	.section-bg {
		background: #f5f8fd;
	}

	.section-title {
		padding-bottom: 30px;

		h2 {
			font-size: 32px;
			font-weight: bold;
			margin-bottom: 20px;
			padding-bottom: 20px;
			position: relative;
			color: #173b6c;

			&::after {
				content: '';
				position: absolute;
				display: block;
				width: 50px;
				height: 3px;
				background: #149ddd;
				bottom: 0;
				left: 0;
			}
		}

		p {
			margin-bottom: 0;
		}
	}
</style>
