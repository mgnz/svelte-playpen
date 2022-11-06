<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	import ContactSectionBio from './ContactSectionBio.svelte';
	import ContactSectionContact from './ContactSectionContact.svelte';
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="section-title">
			<h2>Contact</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row" data-aos="fade-in">
			<ContactSectionBio />

			<ContactSectionContact />
		</div>
	</div>
</section>

<style lang="scss">
	#contact {
		padding-bottom: 130px;
	}

	@-webkit-keyframes animate-loading {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes animate-loading {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
