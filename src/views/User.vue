<template>
	<div class="users">
		<div v-for="user in users" :key="user.id" class="user">
			<div class="info">
				<div :style="'color:' + user.color" class="btn-people">
					<span>{{ user.name.substr(0, 2) }}</span>
				</div>
				<div class="name">{{ user.name }} :: {{ user.id }}</div>
			</div>
			<div class="actions">
				<a @click="editUser(user.id, user.name)" class="material-icons">
					edit
				</a>
				<a @click="delUser(user.id, user.name)" class="material-icons">
					delete
				</a>
			</div>
		</div>
	</div>
	<div class="btn-action" @click="addUser">
		<a class="material-icons">add</a>
	</div>
	<modal v-if="showModal" @close-modal="modalToggle">
		<template v-slot:header>
			<h5>Добавить</h5>
		</template>
		<template v-slot:content>
			<form name="addUser" :data-id="userForm.id" @submit="saveUser">
				<input
					name="name"
					:value="userForm.name"
					placeholder="Имя"
					autocomplete="off"
				/>
			</form>
		</template>
		<template v-slot:footer>
			<a class="btn right" @click="saveUser">Сохранить</a>
		</template>
	</modal>
	<confirm v-if="delConfirm" @close="delConfirmToggle" @ok="delUser">
		Удалить {{ userForm.name }}? <br />Купленные товары так же удалятся
	</confirm>
</template>

<script>
	import Modal from '../components/modal'
	import Confirm from '../components/confirm'
	import { mapGetters } from 'vuex';
	export default {
		components: {
			Modal,
			Confirm
		},
		data: () => ({
			showModal: false,
			delConfirm: false,
			userForm: {
				id: '',
				neme: ''
			}
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
			delConfirmToggle() {
				this.delConfirm = !this.delConfirm
			},
			addUser() {
				setTimeout(() => { document.addUser.name.focus() }, 0)
				this.modalToggle()
				this.userForm = {
					id: false,
					neme: ''
				}
			},
			editUser(id, name) {
				setTimeout(() => { document.addUser.name.focus() }, 0)
				this.modalToggle()
				this.userForm = {
					id: id,
					name: name
				}
			},
			delUser(id, name) {
				this.delConfirmToggle()
				if (id) {
					this.userForm = {
						id: id,
						name: name
					}
				} else {
					this.$store.commit('delUser', this.userForm.id);
				}
			},
			saveUser(e) {
				e.preventDefault()
				let FD = new FormData(document.addUser),
					userId = this.userForm.id
				if (!userId)
					this.$store.commit('addUser', {
						name: FD.get('name'),
						color: getUserColot(FD.get('name'))
					})
				else
					this.$store.commit('editUser', {
						id: userId,
						name: FD.get('name'),
						color: getUserColot(FD.get('name'))
					})
				document.addUser.reset()
				this.modalToggle()
			},
		}
	}

	function getUserColot(name) {
		let str = '#', i = 0
		while (str.length < 7) {
			str += (name.charCodeAt(i) ** 5).toString(16)[1]
			i = name[i + 1] ? (i + 1) : 0
		}
		return str
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
