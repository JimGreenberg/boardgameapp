import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { Subscription } from 'rxjs/Subscription';

import { FirebaseService } from "../services/firebase.service";
import { RoomService } from "../services/room.service";


@Component({
  selector: "menu",
  templateUrl: "menu/menu.component.html",
})
export class MenuComponent implements OnInit, OnDestroy {
  public color1: string;
  public color2: string;
  public btnTxt: string;
  public skipNext: boolean = false;

  private subscription: Subscription;

  constructor(private fbs: FirebaseService,
              private rs: RoomService) { }

  buttonTap() {
    if (this.skipNext) {
      setTimeout(() => this.skipNext = false, 1000)
      return;
    }
    this.color1 = "#" + Math.random().toString(16).slice(2, 8)
    this.color2 = "#" + Math.random().toString(16).slice(2, 8)
    if (this.checkSimilarColor(this.color1, this.color2)) {
      this.btnTxt = "too similar"
      this.skipNext = true;
    } else {
      this.btnTxt = "ok"
    }
  }

  checkSimilarColor(color1: string, color2: string): boolean {
    // returns true if colors are similar (bad)
    return [
      Math.abs(parseInt(color1.slice(1, 3), 16) - parseInt(color2.slice(1, 3), 16)),
      Math.abs(parseInt(color1.slice(3, 5), 16) - parseInt(color2.slice(3, 5), 16)),
      Math.abs(parseInt(color1.slice(5, 7), 16) - parseInt(color2.slice(5, 7), 16))
    ].every(v => v < 50);
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
