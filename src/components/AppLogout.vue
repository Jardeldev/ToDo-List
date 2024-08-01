<template>
  <div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'AppLogout',
  setup() {
    const store = useStore();

    const logout = async () => {
      try {
        await store.dispatch('logout');
        alert('Logout successful');
      } catch (error) {
        alert('Logout failed: ' + error.message);
      }
    };

    return {
      logout
    };
  }
};
</script>
