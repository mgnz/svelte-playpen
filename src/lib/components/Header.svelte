<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import HeaderNavbar from './HeaderNavbar.svelte';
	import HeaderProfile from './HeaderProfile.svelte';
</script>

<header id="header">
	<div class="d-flex flex-column">
		<HeaderProfile />
		<HeaderNavbar />
	</div>
</header>

<style lang="scss">
	@import '../../styles/app.scss';

	#header {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 300px;
		transition: all ease-in-out 0.5s;
		z-index: 9997;
		transition: all 0.5s;
		padding: 0 15px;
		background: #040b14;
		overflow-y: auto;
	}

	@media (max-width: $global-width-lrg) {
		#header {
			left: -300px;
		}
	}
</style>
