<template>
	<div class="modal">
		<div class="modal-close" @click="closeModal"></div>
		<div class="modal-content">
			<slot name="header"></slot>
			<slot name="content"></slot>
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			closeModal() {
				this.$emit('close-modal')
			}
		}
	}
</script>

<style>
	.btn-action {
		position: fixed;
		bottom: 74px;
		right: 24px;
		border-radius: 100%;
		width: 56px;
		height: 56px;
		background: #000;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000aa;
		bottom: 0;
	}

	.modal .btn {
		margin-top: 15px;
	}

	.modal .modal-close {
		height: 100%;
		width: 100%;
	}

	.modal .modal-content {
		background: #fff;
		bottom: 0;
		position: absolute;
		width: 100%;
		padding: 15px;
	}

	.modal .modal-content h5 {
		font-size: 1.64rem;
		line-height: 110%;
		margin: 1.0933333333rem 0 0.656rem 0;
	}

	.modal .modal-content input,
	.modal .modal-content select {
		border: none;
		border-bottom: 1px solid #9e9e9e;
		outline: none;
		height: 3rem;
		width: 100%;
		transition: box-shadow 0.3s, border 0.3s;
		font-size: 0.9rem;
		background: transparent;
	}

	.modal .modal-content input:focus {
		border-bottom: 1px solid #000;
	}

	.right {
		float: right;
	}
</style>
