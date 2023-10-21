import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    templateUrl: './emptydemo.component.html'
})
export class EmptyDemoComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        const token = localStorage.getItem('authToken');
        if (token) {
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            this.http.get<string>('http://localhost:8080/test', { headers, responseType: 'text' as 'json' })
                .subscribe({
                    next: response => {
                        console.log('API response', response);
                    },
                    error: error => {
                        console.error('API error', error);
                    }
                });
        } else {
            console.error('No auth token found');
        }
    }
}
