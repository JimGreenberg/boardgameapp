import { GameState, GameMetadata } from "../base-interfaces";

export abstract class Game {
gameState: GameState;
GameMetadata: GameMetadata;

abstract takeTurn();
abstract outOfTurnAction();
abstract newMetadata();
}
