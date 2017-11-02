
var boot = function(game){
    console.log("%cStarting game...", "color:white; background:green");
};

boot.prototype = {
    preload: function(){
        this.game.load.image("loading","assets/loading.png");
        this.game.load.image('logo', 'assets/logo.png');
    },
    create: function(){
        game.input.mspointer.capture = false;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.setBoundsToWorld();

        this.game.state.start("Preload");
    }
}