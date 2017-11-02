var menu = function(game){};

menu.prototype = {
    create: function () {

        var localHighScoreJson = localStorage.getItem("highscores");

        if (localHighScoreJson) {
            var localHighScoresArray = JSON.parse(localHighScoreJson);
        }

        if (!localHighScoresArray) {
            var localHighScoresArray = new Array;
        }

        localHighScoresArray.push({highScore: this.endScore});

        // Sort All Local Scores with the Players Score.
        localHighScoresArray.sort(function (a, b) {
            return b.highScore - a.highScore
        });

        

        this.interfaceBackground = game.add.sprite(0, 25, 'ui-bg');
        this.interfaceBackground.scale.setTo(1, 15);
        this.interfaceBackground.alpha = .8;

        this.scoreText1 = game.add.text(150, 55, "GAME OVER", {
            font: 'bold 24px Lato',
            fill: '#ff0000',
            align: 'center'
        });
        this.scoreText1.anchor.setTo(0.5, 0.5);

        this.scoreText2 = game.add.text(150, 100, "SCORE: " + this.endScore, {
            font: '32px Lato',
            fill: '#ffffff',
            align: 'center'
        });
        this.scoreText2.anchor.setTo(0.5, 0.5);


        this.playButton = this.game.add.button(150, game.world.height - 25, "playagain-button", this.playTheGame, this);
        this.playButton.anchor.setTo(0.5, 0.5);
    },

    update: function(){
        
    },




    playTheGame: function(){
        this.playButton.destroy();
        this.interfaceBackground.kill();
        this.game.state.start("GameLoop", true, false, this.gameDifficulty);
    }

};