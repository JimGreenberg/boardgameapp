import { Injectable } from "@angular/core";

import { AppService } from "./app.service";
import { FirebaseService } from "./firebase.service";

import * as games from "../games";
import { Room, Player, GameMetadata, GameState, Chat } from "../base-interfaces";


@Injectable()
export class RoomService { // HAHA GET IT? AHAHAHAHAH
  rooms: { [key: string]: Room }

  constructor(private fbs: FirebaseService,
              private app: AppService) { }

  hostNewRoom(metadata: GameMetadata): void {
    const newRoom: Room = {
      uid: ("00000" + Math.floor(Math.random() * 100000)).slice(-5),
      open: true,
      host: this.app.user,
      players: [],
      metadata,
      gameState: {}, // empty until game starts
      chatlog: [],
    };
    this.joinRoom(newRoom);
  }

  joinRoom(room: Room): Promise<any> {
    if (this.isJoinable(room)) {
      room.players.push(this.app.user);
      return this.fbs.update(`openRooms/${room.uid}`, room).then(() => {
        this.rooms[room.uid] = room;
      }).catch(e => {
        console.error(e, 'error joining room');
      });
    }
  }

  isJoinable(room: Room): boolean {
    // no 2 players may have the same name
    // no 2 players may have a similar color if the game requires colors
    return(room.players.every(player => player.name !== this.app.user.name) &&
          (!room.colorMap || Object.keys(room.colorMap).every(player => this.app.checkSimilarColor(room.colorMap[player], this.app.color)))
    );
  }

  closeRoom(room: Room): Promise<any> {
    room.open = false;
    return this.fbs.update(`closedRooms/${room.uid}`, room).then(() => {
      this.rooms[room.uid] = room;
    }).then(() => this.fbs.remove(`openRooms/${room.uid}`)).catch(e => {
      console.error(e, 'error joining room');
    });
  }
}
