import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {User} from "./user.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    email!: string;
    constructor(public layoutService: LayoutService, private router: Router, private http: HttpClient) { }

    onSubmit() {
        // Create a request payload
        const payload = {
            username: this.email,
            password: this.password,
            role: "USER"
        };

        // Making the API call
        this.http.post<User>('http://localhost:8080/auth/login', payload).subscribe({
            next: (response: User) => {
                console.log('Login successful', response);
                this.router.navigate(['/']);
            },
            error: (error) => {
                console.error('Login failed', error);
            }
        });
    }
}
