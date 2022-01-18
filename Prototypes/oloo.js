// OLOO: objects linked to other objects

// Let's say we need to construct a login and authorization pipeline

// How do use JS in it's most effectively Designed Way?
const AuthController = {
  authenticate() {
    server.authenticate(
      [this.username, this.password],
      this.handleResponse.bind(this)
    );
  },
  handleResponse(resp) {
    if (!resp.ok) this.displayError(resp.msg);
  }gi
};

const LoginFormController = Object.assign(Object.create(AuthController), {
  onSubmit() {
    this.username = this.$username.val();
    this.password = this.$password.val();
    this.authenticate(); // linked the authenticate method from AuthController
  },
  displayError(msg) {
    alert(msg);
  },
});

console.log({ AuthController });
console.dir({ LoginFormController });