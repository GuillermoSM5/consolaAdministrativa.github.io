import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login-service/login.service';
import { StorageService } from 'src/app/core/storage/storage.service';
import { LoginResponse } from '../../../Interfaces/Response/login.interface';
import { BaseResponse } from '../../../Interfaces/Response/baseResponse.interfase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginError = {
    email: {
      email: 'El correo no es válido ejemplo@banorte.com',
      required: 'El correo es requerido',
      pattern: 'El correo no es @banorte.com',
    },
    phrase: {
      required: 'La contraseña es requerida',
      minlength:
        'La longitud de la contraseña debe estar entre los 8 y 12 caracteres',
      maxlength:
        'La longitud de la contraseña debe estar entre los 8 y 12 caracteres',
    },
  };

  loginForm: FormGroup = this.fb.group({
    email: [
      ,
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^.*banorte.com.*$'),
      ],
    ],
    phrase: [
      ,
      [
        ,
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router
  ) {}

  async sendLogin() {
    const response = await this.loginService.login(this.loginForm.value);
    // const response: BaseResponse<LoginResponse> = {
    //   responseCode: 0,
    //   description: 'mock',
    //   result: {
    //     userId: 1,
    //     name: 'Guillermo',
    //     lastName: 'Soto',
    //     motherLastName: 'Marquez',
    //     jwt: 'qwerty',
    //   },
    // };

    if (response?.responseCode === 1 || response === undefined) {
      return;
    }
    this.storageService.setSession(response!?.result);
    this.router.navigate(['/consola']);
  }

  ngOnInit(): void {}
}
