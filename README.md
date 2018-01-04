# Board Game App
a board game engine and platform for iOS/Android using nativescript+angular and firebase
https://github.com/JimGreenberg/boardgameapp

## MVP
  - Players can set preferences such as favorite color and name saved locally
  - Create a framework for games to be written upon with an easy to follow API that is robust enough to support even very complicated games
    - Games will be rule-enforced with programmatic turns and win conditions
    - Turn structure should allow for out-of-turn action (required for certain games)
  - Create rooms for 2+ players to play board games on
    - Set up a game instance with metadeta for game
    - App will not require auth
  - Allow players to take turns in games as well as chat
  - At least 1 working game
    - Additional proof-of-concept game tic-tac-toe


## TODO
- [x] Create barebones nativescript project
- [x] Implement firebase test functions
  - [x] Realtime DB read
  - [x] Realtime DB write
  - [x] Cloud messenger message
- [ ] Create menu views
  - Games list
    - Start new session
  - Open rooms
    - Join session
- [ ] Create game session initializer service
  - Allow for creation of one game instance
  - Allow other players to see and join open instances
- [ ] Create game turn handler service
  - Uses firebase service to manage game state
  - Allows for reads and writes to single game instance


- [ ] More TODOs later, this is plenty for now


### About
I have no plans to release this publicly, it was intended as a way to simply play boardgames with my friends. I'll be incredibly lucky if I actually get anyone to use it though. This is for personal/nonprofit use, so don't sue me.
