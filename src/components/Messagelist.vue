<template>
  <div class="widget" ref="msgList">
    <div class="content" v-for="message in formatResult" :key="message.id">
      <span>
        <b>{{ message.name }}</b>
      </span>
      <span>
        <p>{{ message.message }}</p>
      </span>
      <span>
        <small>{{ message.created_at }}</small>
      </span>
    </div>
  </div>
</template>

<script>
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/firebase/config";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup() {
    let msgList = ref(null);
    onUpdated(() => {
      msgList.value.scrollTop = msgList.value.scrollHeight;
    });
    let res = ref([]);
    let formatResult = computed(() => {
      return res.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });
    const q = query(collection(db, "messages"), orderBy("created_at"));
    onSnapshot(q, (querySnapshot) => {
      let message = [];
      querySnapshot.forEach((doc) => {
        let document = { ...doc.data(), id: doc.id };
        doc.data().created_at && message.push(document);
      });
      res.value = message;
    });

    return { res, formatResult, msgList };
  },
};
</script>

<style>
.widget {
  background-color: bisque;
  height: 500px;
  padding: 20px;
  overflow: auto;
  max-width: 50%;
  margin: 0px auto;
}
.content {
  padding: 10px;
  border-radius: 20px;
  margin: 2px auto;
  background: rgb(248, 247, 250);
}
</style>
