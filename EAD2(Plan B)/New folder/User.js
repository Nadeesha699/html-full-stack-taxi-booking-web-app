class User {
  constructor() {
    this.id = sessionStorage.getItem('id');
    this.username = sessionStorage.getItem('username');
  }
}

const user = new User();
