<template>
  <h1>Login</h1>
  <form @submit.prevent="Login">
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <div v-if="error">
      {{ error }}
    </div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignin from "../composables/useSignin";
export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");
    let { error, signIn } = useSignin();
    let Login = async () => {
      let res = await signIn(email.value, password.value);
      if (res) {
        context.emit("chatroom");
      }
    };

    return { email, password, Login, error };
  },
};
</script>

<style></style>
