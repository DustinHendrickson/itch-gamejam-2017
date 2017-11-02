var preload = function(game){};

preload.prototype = {
    preload: function(){

        this.load.crossOrigin = 'Anonymous';

        var loadingBar = this.add.sprite(game.world.centerX,game.world.centerY,"loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);

        var logo = game.add.sprite(game.world.centerX, game.world.centerY - 35, 'logo');
        logo.anchor.setTo(0.5,0.5);

        game.load.image('sky', 'assets/sky.png');

        game.load.image('sky-parralax', 'assets/_Asset - Tileable Buildings@2x.png', 320, 130);
        game.load.spritesheet('hover-icon', 'assets/Hover SpriteSheet.png', 50, 50);
    
        game.load.spritesheet('player', 'assets/_Spritesheet-Drone@2x.png', 130, 128);

        console.log("%cPreload Complete.", "color:white; background:green");
    },

    create: function(){
        game.state.start("Menu");
    }
}