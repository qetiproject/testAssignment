import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  set<T>(key: string, arg: T) {
    localStorage.setItem(key, JSON.stringify(arg));
  }

  get(key:string): any{
   return localStorage.getItem(key)
  }
}
