<template>
  <div class="user">
    <div v-for="user in getUsersFromLocalStorage" :key="user.id" class="user">
      {{ user }}
    </div>
  </div>
  <div class="btn-action" @click="showModal = !showModal">
    <a class="material-icons">add</a>
  </div>
  <modal v-if="showModal" @close-modal="showModal = !showModal">
    <template v-slot:header>
      <h5>Добавить</h5>
    </template>
    <template v-slot:content>
      <form name="addUser">
        <input name="name" placeholder="Имя" autocomplete="off">
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
        'getUsersFromLocalStorage'
    ])
  },
  methods: {
    saveUser() {
      let FD = new FormData(document.addUser)
      this.$store.commit('addUser', {
        name: FD.get('name')
      });
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
</style>
