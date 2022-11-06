<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
	<form action="forms/contact.php" method="post" role="form" class="php-email-form">
		<div class="row">
			<div class="form-group col-md-6">
				<label for="name">Your Name</label>
				<input type="text" name="name" class="form-control" id="name" required />
			</div>
			<div class="form-group col-md-6">
				<label for="name">Your Email</label>
				<input type="email" class="form-control" name="email" id="email" required />
			</div>
		</div>
		<div class="form-group">
			<label for="name">Subject</label>
			<input type="text" class="form-control" name="subject" id="subject" required />
		</div>
		<div class="form-group">
			<label for="name">Message</label>
			<textarea class="form-control" name="message" rows="10" required></textarea>
		</div>
		<div class="my-3">
			<div class="loading">Loading</div>
			<div class="error-message"></div>
			<div class="sent-message">Your message has been sent. Thank you!</div>
		</div>
		<div class="text-center"><button type="submit">Send Message</button></div>
	</form>
</div>

<style lang="scss">
	:global(#contact) {
		.php-email-form {
			width: 100%;
			padding: 30px;
			background: #fff;
			box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

			.form-group {
				padding-bottom: 8px;
			}

			.validate {
				display: none;
				color: red;
				margin: 0 0 15px 0;
				font-weight: 400;
				font-size: 13px;
			}

			.error-message {
				display: none;
				color: #fff;
				background: #ed3c0d;
				text-align: left;
				padding: 15px;
				font-weight: 600;

				br + br {
					margin-top: 25px;
				}
			}

			.sent-message {
				display: none;
				color: #fff;
				background: #18d26e;
				text-align: center;
				padding: 15px;
				font-weight: 600;
			}

			.loading {
				display: none;
				background: #fff;
				text-align: center;
				padding: 15px;

				&:before {
					content: '';
					display: inline-block;
					border-radius: 50%;
					width: 24px;
					height: 24px;
					margin: 0 10px -6px 0;
					border: 3px solid #18d26e;
					border-top-color: #eee;
					-webkit-animation: animate-loading 1s linear infinite;
					animation: animate-loading 1s linear infinite;
				}
			}

			.form-group {
				margin-bottom: 15px;
			}

			label {
				padding-bottom: 8px;
			}

			input,
			textarea {
				border-radius: 0;
				box-shadow: none;
				font-size: 14px;
			}

			input {
				height: 44px;
			}

			textarea {
				padding: 10px 15px;
			}

			button[type='submit'] {
				background: #149ddd;
				border: 0;
				padding: 10px 24px;
				color: #fff;
				transition: 0.4s;
				border-radius: 4px;

				&:hover {
					background: #37b3ed;
				}
			}
		}
	}
</style>
