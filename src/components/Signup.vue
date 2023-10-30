<template>
  <h1>Signup</h1>
  <form @submit.prevent="Signup">
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="email" v-model="email" />
    <input type="text" placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Signup</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
  setup(props, context) {
    let name = ref("");
    let email = ref("");
    let password = ref("");

    let { error, create } = useSignup();
    let Signup = async () => {
      let res = await create(email.value, password.value, name.value);
      if (res) {
        context.emit("chatroom");
      }
    };
    return { name, email, password, Signup, error };
  },
};
</script>

<style></style>
