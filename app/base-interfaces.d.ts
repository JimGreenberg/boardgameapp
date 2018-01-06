export interface Room {
  uid: string;
  open: boolean;
  host: Player;
  players: Array<Player>;
  metadata: GameMetadata;
  gameState: GameState;
  chatlog: Array<Chat>;
  colorMap?: {[key: string]: string;}
}

export interface GameMetadata {
  gameType: string;
  minPlayers: number;
  maxPlayers: number;
  additionalRules?: any;
}

export interface GameState {
  // abstract interface to be extended upopn by each game
}

export interface Chat {
  body: string;
  author: string;
  timestamp: Date;
}

export interface Player {
  name: string;
  pushToken: string; // double use as UUID
}
