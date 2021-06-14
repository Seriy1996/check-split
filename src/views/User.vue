<template>
	<div class="users">
		<div v-for="user in users" :key="user.id" class="user">
			<div class="info">
				<div :style="'color:' + user.color" class="btn-people">
					<span>{{ user.name.substr(0, 2) }}</span>
				</div>
				<div class="name">{{ user.name }}</div>
			</div>
			<div class="actions">
				<a @click="editUser(user.id)" class="material-icons">edit</a>
				<a @click="deleteUser(user.id)" class="material-icons"
					>delete</a
				>
			</div>
		</div>
	</div>
	<div class="btn-action" @click="modalToggle">
		<a class="material-icons">add</a>
	</div>
	<modal v-if="showModal" @close-modal="modalToggle">
		<template v-slot:header>
			<h5>Добавить</h5>
		</template>
		<template v-slot:content>
			<form name="addUser" @submit="saveUser">
				<input name="name" placeholder="Имя" autocomplete="off" />
			</form>
		</template>
		<template v-slot:footer>
			<a class="btn right" @click="saveUser">Сохранить</a>
		</template>
	</modal>
</template>

<script>
	import Modal from '../components/modal'
	import { mapGetters } from 'vuex';
	export default {
		components: {
			Modal
		},
		data: () => ({
			showModal: false
		}),
		computed: {
			...mapGetters([
				'users'
			])
		},
		methods: {
			modalToggle() {
				this.showModal = !this.showModal
			},
			saveUser(e) {
				e.preventDefault()
				let FD = new FormData(document.addUser)
				this.$store.commit('addUser', {
					name: FD.get('name'),
					color: getUserColot(FD.get('name'))
				});
				document.addUser.reset()
				this.modalToggle()

				function getUserColot(name) {
					let str = '#', i = 0
					while (str.length < 7) {
						str += (name.charCodeAt(i) ** 5).toString(16)[1]
						i = name[i + 1] ? (i + 1) : 0
					}
					return str
				}
			},
			editUser(id) {
				console.log(id);
			},
			deleteUser(id) {
				this.$store.commit('delUser', id);
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

	.user {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.info {
		display: flex;
	}
	.actions a,
	.name {
		padding: 11px;
	}
	.btn-people {
		border: 2px solid;
		border-radius: 100%;
		width: 32px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		text-transform: uppercase;
		transition: 0.3s all;
		margin: 4px;
	}
</style>
