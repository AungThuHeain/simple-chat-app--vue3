import { ref } from "vue";
import { auth, createUserWithEmailAndPassword } from "../firebase/config";
import { updateProfile } from "firebase/auth";

let error = ref(null);

let create = async (email, password, name) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, { displayName: name });

    if (!res) {
      throw new Error("Couldn't create user");
    }
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, create };
};

export default useSignup;
