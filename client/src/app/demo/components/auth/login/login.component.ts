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
    errorMessage: string = '';  // Add this line

    password!: string;
    email!: string;
    constructor(public layoutService: LayoutService, private router: Router, private http: HttpClient) { }

    onSubmit() {
        const payload = {
            username: this.email,
            password: this.password
        };

        // Assuming the response is now of type 'json' and not 'text'
        this.http.post<AuthenticationResponseDTO>('http://localhost:8080/login', payload)
            .subscribe({
                next: (response: AuthenticationResponseDTO) => {
                    console.log('Login successful', response);

                    // Optionally store the username and role in local storage or elsewhere
                    localStorage.setItem('authToken', response.token);
                    localStorage.setItem('username', response.username);
                    localStorage.setItem('userRole', response.role);

                    // Navigate to home page or wherever is appropriate post-login
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    console.error('Login failed', error);
                    this.errorMessage = 'Login failed. Please check your credentials and try again.';
                }
            });
    }
}

interface AuthenticationResponseDTO {
    username: string;
    token: string;
    role: string;
}
