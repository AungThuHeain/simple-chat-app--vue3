vue:
<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <Login @chatroom="chatroom"></Login>
      <p>
        Don't have account?
        <span @click="showLogin = !showLogin" class="link">Signup</span>
      </p>
    </div>
    <div v-else>
      <Signup @chatroom="chatroom"></Signup>
      <p>
        Already have account?
        <span @click="showLogin = !showLogin" class="link">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup";
import Login from "../components/Login";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Signup,
    Login,
  },

  setup() {
    let showLogin = ref(true);
    let route = useRouter();
    let chatroom = () => {
      route.push({ name: "chat" });
    };
    return { showLogin, chatroom };
  },
};
</script>

<style>
.container {
  text-align: center;
  margin: 20px 0px;
  padding: 20px;
}
.link {
  cursor: pointer;
  font-weight: bold;
  color: cornflowerblue;
}
</style>
