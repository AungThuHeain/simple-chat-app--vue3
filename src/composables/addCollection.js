import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

let addCollection = () => {
  let error = ref(null);
  let addMessage = async (data) => {
    try {
      await addDoc(collection(db, "messages"), data);
    } catch (err) {
      error.value = err.message;
      console.log(err.message);
    }
  };
  return { error, addMessage };
};

export default addCollection;
