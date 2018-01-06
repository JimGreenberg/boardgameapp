import { Injectable } from "@angular/core";

import { AppService } from "./app.service";
import { FirebaseService } from "./firebase.service";

import * as games from "../games";
import { Room, Player, GameMetadata, GameState, Chat } from "../base-interfaces";


@Injectable()
export class RoomService { // HAHA GET IT? AHAHAHAHAH
  rooms: { [key: string]: Room }

  constructor(private app: AppService,
              private fbs: FirebaseService) { }

  hostNewRoom(gameType: games.Game): void {
    const newRoom: Room = {
      uid: ("00000" + Math.floor(Math.random() * 100000)).slice(-5),
      open: true,
      host: this.app.user,
      players: [this.app.user],
      metadata: gameType.newMetadata(),
      gameState: {}, // empty until game starts
      chatlog: [],
    };
    this.joinRoom(newRoom);
  }

  joinRoom(room: Room) {
    this.rooms[room.uid] = room;
  }
}
