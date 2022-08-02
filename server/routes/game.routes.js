const GameController = require("../controller/game.controller");


// Routes go here
module.exports = (app)=>{
    app.get ("/api/games", GameController.findAllGames);
    app.post("/api/games", GameController.createGame);
    app.get("/api/games/:id", GameController.findOneGame);
    app.put("/api/games/:id", GameController.updateGame);
    app.delete("/api/games/:id", GameController.deleteGame);
}