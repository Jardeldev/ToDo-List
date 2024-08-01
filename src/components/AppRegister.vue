<template>
  <div class="containerRegister">
    <div class="logo">
      <img src="@/assets/img/register-todolist.png" alt="Logo" class="logo-img">
    </div>
    <div class="primeira">
      <form class="form" @submit.prevent="register">
        <label>
          <span>Seu Email</span>
          <input v-model="email" type="email" name="email" placeholder="Digite seu email">
        </label>
        <label>
          <span>Senha</span>
          <input v-model="password" type="password" name="password" placeholder="Digite sua senha">
        </label>
        <button button class="submit" type="submit">Cadastre-se</button>
      </form>
      <p class="link-login">Já possui uma conta? <a href="/">Faça login</a></p>
    </div>  
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'AppRegister',
  setup() {
    const store = useStore();
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const register = async () => {
      try {
        await store.dispatch('register', { email: email.value, password: password.value });
        alert('Registration successful');
      
        router.push('/applogin');
      } catch (error) {
        alert('Login failed: ' + error.message);
        console.error('Erro durante o login:', error);
      }
    };

    return {
      email,
      password,
      register
    };
  }
};
</script>

<style scoped>
.containerRegister {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(244, 245, 246);
}

.logo {
  margin-bottom: 20px;
}

.logo-img {
  max-width: 300px;
}

.primeira {
  background: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label span {
  font-size: 14px;
  font-weight: 600;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

button {
  display: block;
  margin: 20px auto;
  width: 100%;
  max-width: 260px;
  padding: 10px;
  border-radius: 30px;
  background-color:rgb(81, 148, 184);
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color:#458db5;
}

.link-login {
  margin-top: 20px;
  font-size: 14px;
  color: #888;
}

.link-login a {
  color: #458db5;
  text-decoration: none;
}

.link-login a:hover {
  text-decoration: underline;
}
</style>
