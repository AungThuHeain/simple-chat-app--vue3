import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref(null);
let signIn = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("can't login");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignin = () => {
  return { error, signIn };
};

export default useSignin;
