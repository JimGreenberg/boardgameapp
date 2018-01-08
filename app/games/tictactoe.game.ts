import { Game } from "../games";
import * as i from "../base-interfaces";

enum Marker { O, X };

export interface TictactoeState extends i.GameState {
  board: Array<Array<Marker>>;
}

export class Tictactoe extends Game {
  state: i.GameState = {};
  metadata: i.GameMetadata;

  static newMetadata(): i.GameMetadata {
    return ({ gameType: "tictatoe",
              minPlayers: 2,
              maxPlayers: 2
            });
  }

  getMove(state: TictactoeState): TictactoeState {

    return state;
  }
}
