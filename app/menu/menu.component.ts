import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router/router-extensions';

import { Subscription } from 'rxjs/Subscription';

import { FirebaseService } from "../services/firebase.service";


@Component({
  selector: "menu",
  templateUrl: "menu/menu.component.html",
})
export class MenuComponent implements OnInit, OnDestroy {
  public color: string;
  public thing: boolean;

  private subscription: Subscription;

  constructor(private fbs: FirebaseService) { }

  buttonTap() {
    this.thing = !this.thing;
    this.color = this.thing ? "purple" : "yellow";
    this.fbs.generatePushToken();
  }

  ngOnInit() {
    this.subscription = this.fbs.color.subscribe(color => this.color = color);
    this.color = "red";
    this.thing = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
