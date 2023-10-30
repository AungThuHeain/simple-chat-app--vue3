<template>
  <div class="container nav-bar" v-if="user">
    <div class="nav">
      <div>
        <b>{{ user.displayName }}</b>
        <p>{{ user.email }}</p>
      </div>
      <div>
        <button @click="logout">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { ref } from "vue";
import { auth } from "@/firebase/config";
import getCuerrentuser from "../composables/getCurrentuser";

let error = ref(null);

export default {
  setup() {
    let { user } = getCuerrentuser();
    let logout = async () => {
      try {
        await signOut(auth);
        console.log("Logout successful");
      } catch (err) {
        error.value = err.message;
      }
    };

    return { logout, user };
  },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
}
.nav-bar {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
