export class AuthService {
  constructor(request) {
    this.request = request;
  }

  async signup(username, password) {
    return await this.request.post('/signup', {
      data: { username, password }
    });
  }

  async login(username, password) {
    return await this.request.post('/login', {
      data: { username, password }
    });
  }
}
