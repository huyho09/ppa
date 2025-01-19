import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private storage = sessionStorage;

  saveUserData(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  getUserData(key: string): string | null {
    return this.storage.getItem(key);
  }

  removeUserData(key: string): void {
    this.storage.removeItem(key);
  }

  clearAllData(): void {
    this.storage.clear();
  }
}
