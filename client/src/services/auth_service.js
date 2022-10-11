class AuthService {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  getCurrentUserName() {
    return this.currentUser.name;
  }

  getCurrentUserPhotoUrl() {
    return this.currentUser.photoURL;
  }
}

export default AuthService;
