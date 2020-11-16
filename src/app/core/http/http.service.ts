import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appSettings } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {

    private apiURL: string;

    constructor(private httpClient: HttpClient) {
        this.apiURL = appSettings.apiURL;
    }


    get(): Observable<any> {
        return this.httpClient.get(this.apiURL)
            .pipe(
                map(
                    success => success,
                    error => error
                ));
    }

}
