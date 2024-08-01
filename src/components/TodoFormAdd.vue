<template>
    <form 
    @submit.stop.prevent="addTodo"   
    class="flex items-center px-4 bg-[#ffffff] 0 h-15 rounded-sm border-1-2 border-green-400 mb-3">
    <input
      v-model="title"
      placeholder="Adicione um novo item..."
      type="text"
      class="bg-[#ffffff] placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3">

      <button
        class="text-[#458db5] text-xs font-semibold focus:outline-none"
        type="submit">
        ADICIONAR
      </button>
  </form>
</template>

<script>
export default {
  name: 'TodoFormAdd',
  data() {
    return {
      title: '',
      criadoEm: '',
    }
  },
  computed: {
      userEmail() {
        return this.$store.state.user ? this.$store.state.user.email : 'Usuário';
      }
    },
  methods: {
    addTodo() {
      if (!this.title) {
        return false;
      }
      this.$store.dispatch('addTodo', {
        title: this.title,
        userEmail: this.userEmail,
        criadoEm: Date(),
        completed: false
      }).finally(() => {
        this.title = ''
      })
    }
  }
}
</script>
 
<style scoped>

  form {
    box-shadow: 0 1px 38px rgba(0, 0, 0, 0.3), 0 1px 12px rgba(0, 0, 0, 0.22);
    border-radius: 15px;
  }

</style>