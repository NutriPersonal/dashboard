import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

class GoogleSignInService {
  constructor() {
    this.googleSignInService = new GoogleAuthProvider();
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.auth.languageCode = "br";
  }

  async signIn() {
    return await signInWithPopup(this.auth, this.provider)
      .then((response) => {
        GoogleAuthProvider.credentialFromResult(response);

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            name: response.user.displayName,
            photoURL: response.user.photoURL,
          })
        );

        return response.user !== null;
      })
      .catch((error) => {
        console.log("error", error);
        return false;
      });
  }

  async signOut() {
    return await signOut(this.auth)
      .then(() => {
        localStorage.clear();
        return true;
      })
      .catch((error) => {
        console.log("error", error);
        return false;
      });
  }
}

export default GoogleSignInService;
