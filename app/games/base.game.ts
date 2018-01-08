import { FirebaseService } from "../services/firebase.service";
import { GameState, GameMetadata } from "../base-interfaces";

export abstract class Game {
  newMetadata: () => GameMetadata;
  state: GameState;
  metadata: GameMetadata;

  constructor(private fbs: FirebaseService) { }

  /**
  turn logic, does not mutate this.state
  */
  abstract getMove(state: GameState): GameState;


  /**
  use for actions that are part of a players turn but still require other players' inputs
  pseudoabstract, not needed for all games
  */
  outOfTurnAction() { }

  takeTurn(state: GameState): void {
    this.fetchGameState();
    this.state = this.getMove(state);
    this.writeGameState();
  }

  fetchGameState(): void {
    // fetch from fbs
    // set to this.gamestate
  }

  writeGameState(): void {
    //
    // set to this.gamestate
  }
}
