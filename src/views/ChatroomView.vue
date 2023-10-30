<template>
  <Navbar />
  <Messagelist></Messagelist>
  <newchatform />
</template>

<script>
import Messagelist from "../components/Messagelist";
import Navbar from "@/components/Navbar.vue";
import { watch } from "vue";
import getCurrentuser from "@/composables/getCurrentuser";
import { useRouter } from "vue-router";
import Newchatform from "@/components/Newchatform.vue";
export default {
  components: {
    Messagelist,
    Navbar,
    Newchatform,
  },
  setup() {
    let { user } = getCurrentuser();
    let route = useRouter();
    watch(user, () => {
      if (!user.value) {
        route.push("/");
      }
    });
  },
};
</script>

<style></style>
