import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { message: 'This is sign in from service' };
  }

  signup() {
    return { message: 'This is sign up from service' };
  }
}
