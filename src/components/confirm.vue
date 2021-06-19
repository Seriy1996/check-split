<template>
	<div class="modal">
		<div class="modal-close" @click="close"></div>
		<div class="modal-content">
			<div class="text"><slot></slot></div>
			<a class="btn right" @click="close">Отмена</a>
			<a class="btn right" @click="ok">Да</a>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			close() {
				this.$emit('close')
			},
			ok() {
				this.$emit('ok')
			}
		}
	}
</script>

<style>
	.modal {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000aa;
		bottom: 0;
	}

	.modal .btn {
		margin: 10px;
		float: right;
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
	.modal .modal-content .text {
		padding: 10px;
	}
</style>
