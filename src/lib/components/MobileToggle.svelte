<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import 'bootstrap/dist/css/bootstrap.css';

	import { select } from '../utility/select';

	function handleToggleClick() {
		handleToggle();
	}

	function handleToggleKeyDown() {
		handleToggle();
	}

	function handleToggle() {
		select('body').classList.toggle('mobile-nav-active');
		select('.mobile-nav-toggle').classList.toggle('bi-list');
		select('.mobile-nav-toggle').classList.toggle('bi-x');
	}
</script>

<i class="bi bi-list mobile-nav-toggle d-xl-none" on:click="{handleToggleClick}" on:keydown="{handleToggleKeyDown}"></i>

<style lang="scss">
	.mobile-nav-toggle {
		position: fixed;
		right: 15px;
		top: 15px;
		z-index: 9998;
		border: 0;
		font-size: 24px;
		transition: all 0.4s;
		outline: none !important;
		background-color: #149ddd;
		color: #fff;
		width: 40px;
		height: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 0;
		border-radius: 50px;
		cursor: pointer;
	}

	// :global(.mobile-nav-active) {
	// 	overflow: hidden;

	// 	#header {
	// 		left: 0;
	// 	}
	// }
</style>
