<template>
  <div class="container input-box">
    <textarea
      cols="100"
      rows="2"
      v-model="message"
      @keypress.enter="sendMessage"
      style="border-radius: 10px"
    ></textarea>
  </div>
</template>

<script>
import { ref } from "vue";
import getCurrentuser from "@/composables/getCurrentuser";
import addCollection from "@/composables/addCollection";
import { serverTimestamp } from "firebase/firestore";
export default {
  setup() {
    let message = ref("");
    let { user } = getCurrentuser();
    let { error, addMessage } = addCollection();
    let sendMessage = async () => {
      let data = {
        message: message.value,
        name: user.value.displayName,
        created_at: serverTimestamp(),
      };

      await addMessage(data);
      message.value = "";
    };

    return { message, sendMessage, error };
  },
};
</script>

<style>
.input-box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>
