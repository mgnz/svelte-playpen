<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	let y: number;
	$: isActive = y > 100;
</script>

<svelte:window bind:scrollY="{y}" />

<a
	href="#"
	id="back-to-top"
	class="back-to-top d-flex align-items-center justify-content-center"
	class:active="{isActive}">
	<i class="bi bi-arrow-up-short"></i>
</a>

<style lang="scss">
	#back-to-top {
		position: fixed;
		visibility: hidden;
		opacity: 0;
		right: 15px;
		bottom: 15px;
		z-index: 996;
		background: #149ddd;
		width: 40px;
		height: 40px;
		border-radius: 50px;
		transition: all 0.4s;

		i {
			font-size: 28px;
			color: #fff;
			line-height: 0;
		}

		&:hover {
			background: #2eafec;
			color: #fff;
		}

		&.active {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
