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

<Hero />

<main id="main">
	<AboutSection />

	<FactsSection />

	<SkillsSection />

	<ResumeSection />
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
</style>
