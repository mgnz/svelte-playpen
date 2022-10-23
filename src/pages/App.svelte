<script lang="ts">
	import { onMount } from 'svelte';

	import 'bootstrap/dist/css/bootstrap.css';
	import MobileToggle from '../lib/components/MobileToggle.svelte';
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import AboutSection from '../lib/components/AboutSection.svelte';
	import FactsSection from '../lib/components/FactsSection.svelte';
	import SkillsSection from '../lib/components/SkillsSection.svelte';
	import ResumeSection from '../lib/components/ResumeSection.svelte';

	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles

	import PureCounter from '@srexi/purecounterjs';

	onMount(async () => {
		/**
		 * Animation on scroll
		 */
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false,
		});

		/**
		 * Initiate Pure Counter
		 */
		new PureCounter();
	});
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

	<section>
		<FactsSection />
	</section>

	<section>
		<SkillsSection />
	</section>

	<section>
		<ResumeSection />
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
