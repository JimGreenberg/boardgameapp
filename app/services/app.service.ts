import { Injectable } from "@angular/core";

import { FirebaseService } from "./firebase.service";

import { Player } from "../base-interfaces";

@Injectable()
export class AppService {
  user: Player;
  color: string;

  constructor(private fbs: FirebaseService) {
    let token: string;
    this.fbs.generatePushToken().then(generatedToken => token = generatedToken);

    this.user = { name: `Player ${("0000" + Math.floor(Math.random() * 10000)).slice(-4)}`,
                  pushToken: token
                }
    this.color = "#" + Math.random().toString(16).slice(2, 8);
  }

  changeName(newName: string) {
    // TODO change your name in all open rooms you're a part of
    this.user.name = newName;
  }

  setColor(newColor: string) {
    // we don't want colors too light or too dark
    while (this.checkSimilarColor(newColor, "#ffffff") ||
           this.checkSimilarColor(newColor, "#000000")) {
      throw "Error changing color: new color too dark or too light";
    }
    this.color = newColor
  }

  checkSimilarColor(color1: string, color2: string): boolean {
    // returns true if colors are similar (bad)
    return [
      Math.abs(parseInt(color1.slice(1, 3), 16) - parseInt(color2.slice(1, 3), 16)),
      Math.abs(parseInt(color1.slice(3, 5), 16) - parseInt(color2.slice(3, 5), 16)),
      Math.abs(parseInt(color1.slice(5, 7), 16) - parseInt(color2.slice(5, 7), 16))
    ].every(v => v < 50);
  }
}
