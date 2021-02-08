import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINT: string = "http://localhost:3000/api/v1/calculations" 

  constructor(private httpClient: HttpClient) { }

  public addNumbers(number1: number, number2: number) { 
    return this.httpClient.get(`${this.ENDPOINT}/add/${number1}/${number2}`);
  }

  public subNumbers(number1: number, number2: number) {
    return this.httpClient.get(`${this.ENDPOINT}/sub/${number1}/${number2}`);
  }
}
