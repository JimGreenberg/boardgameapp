import { Injectable } from "@angular/core";

import { FirebaseService } from "./firebase.service";

import { Player } from "../base-interfaces";

Injectable()
export class AppService {
  user: Player;
  color: string;

  constructor(private fbs: FirebaseService) {
    let token: string;
    this.fbs.generatePushToken().then(gendToken => token = gendToken);

    this.user = { name: `Player ${("0000" + Math.floor(Math.random() * 10000)).slice(-4)}`,
                  pushToken: token
                }
    this.color = "#" + Math.random().toString(16).slice(2, 8)
  }

  changeName(newName: string) {
    // TODO change your name in all open rooms you're a part of
    this.user.name = newName;
  }

  setColor(newColor: string) {
    while (!this.checkColor(newColor)) {
      throw "Error changing color: new color too dark or too light";
    }
    this.color = newColor
  }

  // we don't want colors too light or too dark
  // returns true if color is OK
  checkColor(color: string): boolean {
    return [
      parseInt(color.slice(1, 3), 16),
      parseInt(color.slice(3, 5), 16),
      parseInt(color.slice(5, 7), 16)
    ].every(v => v > 50 && v < 200);
  }
}
