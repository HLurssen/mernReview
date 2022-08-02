const Game = require ("../models/game.model");

// module.exports.sayHello = (req,res)=>{
//     res.json({msg: "Japanese Denim"});
// }
// ================================================= //
module.exports.findAllGames = (req,res)=>{
    Game.find()

        .then(allGames=>{
            res.json({results: allGames})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.createGame = (req,res)=>{
    Game.create(req.body)

        .then(newlyCreatedGame=>{
            res.json({results: newlyCreatedGame})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.findOneGame = (req,res)=>{
    Game.findOne({_id: req.params.id})

        .then(foundGame =>{
            res.json({results: foundGame})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.updateGame = (req,res)=>{
    Game.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )

        .then(updatedGame=>{
            res.json({results: updatedGame})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}
// ================================================= //
module.exports.deleteGame = (req,res)=>{
    Game.deleteOne({_id: req.params.id})

        .then(deletedGame=>{
            res.json({results: deletedGame})
        })

        .catch(err=>{
            res.json({msg: "Sum' aint right homie.", error: err})
        })
}