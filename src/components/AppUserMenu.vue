<template>
    <div class="user-menu-logout" @mouseover="showMenu = true" @mouseleave="showMenu = false">
      <div class="user-info">
        <span>{{ userEmail }}</span>
      </div>
      <transition name="fade">
        <div v-if="showMenu" class="menu-items">
          <button class="button-logout" @click="logout">Deslogar</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMenu: false
      };
    },
    computed: {
      userEmail() {
        return this.$store.state.user ? this.$store.state.user.email : 'Usuário';
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>

  .user-info {
    color: #458db5;

  }

  .user-menu-logout {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    box-shadow: 0 1px 38px rgba(0, 0, 0, 0.3), 0 1px 12px rgba(0, 0, 0, 0.22);
    padding: 10px;
    border-radius: 15px;
    z-index: 1000;
  }
  
  .menu-items {
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  button.button-logout {
  display: block;
  width: 100%;
  max-width: 260px;
  padding: 10px;
  border-radius: 30px;
  background-color: rgb(81, 148, 184);
  color: white;

}

button:hover {
  background-color: #458db5;
}

  </style>
  