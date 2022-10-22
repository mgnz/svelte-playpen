<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import svelteLogo from '../assets/svelte.svg';
	import Counter from '../lib/components/Counter.svelte';
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
</script>

<Header />

<Hero />

<main id="main">
	<!--
	<legacy-main class="legacy-main">
		<div>
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img src="/vite.svg" class="logo" alt="Vite Logo" />
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noreferrer">
				<img src="{svelteLogo}" class="logo svelte" alt="Svelte Logo" />
			</a>
		</div>
		<h1>Vite + Svelte</h1>

		<div class="card">
			<Counter />
		</div>

		<p>
			Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the
			official Svelte app framework powered by Vite!
		</p>

		<p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
	</legacy-main>
	-->
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

	// legacy bollocks
	// .legacy-main {
	// 	.logo {
	// 		height: 6em;
	// 		padding: 1.5em;
	// 		will-change: filter;

	// 		&:hover {
	// 			filter: drop-shadow(0 0 2em #646cffaa);
	// 		}

	// 		&.svelte:hover {
	// 			filter: drop-shadow(0 0 2em #ff3e00aa);
	// 		}
	// 	}

	// 	.read-the-docs {
	// 		color: #888;
	// 	}
	// }
</style>
