import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderNavigationService {
  private navigationTag: string = 'about';
  private dataSubject: Subject<string> = new Subject<string>();

  getNavigationTag() {
    return this.navigationTag;
  }

  setNavigationTag(tag: string) {
    this.navigationTag = tag;
    this.dataSubject.next(tag);
  }

  gettagChanges() {
    return this.dataSubject.asObservable();
  }
}
