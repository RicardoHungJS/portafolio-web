import { Injectable } from '@angular/core';
/* import { getAnalytics, logEvent } from '@angular/fire/analytics';
import { initializeApp } from '@angular/fire/app'; */
import { environment } from '../../../environments/environment';

interface EventData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  /* gaGetAnalytics!: any;

  public trackEvent(eventName: string, data: EventData): void {
    logEvent(this.gaGetAnalytics, eventName, data);
  }

  public init(): void {
    const app = initializeApp(environment.firebaseConfig);
    this.gaGetAnalytics = getAnalytics(app);
  } */
}
