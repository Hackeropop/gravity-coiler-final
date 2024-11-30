namespace SpriteKind {
    export const freind = SpriteKind.create()
    export const flag = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tele 0`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level 4`))
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    level = 5
    game.showLongText("!! Don't step on fake grass !! It looks almost same as the real grass !!", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tele 1`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level 2`))
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 24))
    level = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile38`, function (sprite, location) {
    Jump_keys = 5
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 980), music.PlaybackMode.InBackground)
    if (start == 10) {
        if (direction == 0) {
            if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.setVelocity(0, -70)
            }
        } else {
            if (mySprite.isHittingTile(CollisionDirection.Top)) {
                mySprite.setVelocity(0, 70)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike up0`, function (sprite, location) {
    pause(100)
    sprites.destroy(mySprite, effects.fire, 500)
    pause(1000)
    player_die()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 980), music.PlaybackMode.InBackground)
    if (start == 10) {
        if (controller.B.isPressed()) {
            if (Jump_keys == 2) {
                if (direction == 0) {
                    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                        mySprite.setVelocity(0, -70)
                    }
                } else {
                    if (mySprite.isHittingTile(CollisionDirection.Top)) {
                        mySprite.setVelocity(0, 70)
                    }
                }
            }
            if (Jump_keys == 1) {
                if (direction == 0) {
                    mySprite.ay = -200
                    direction = 1
                    mySprite.setImage(img`
                        5 5 5 5 5 5 5 . 
                        5 5 5 5 5 5 5 5 
                        . 5 5 5 5 5 5 5 
                        . . 5 5 5 f 5 5 
                        . . . 5 5 5 5 . 
                        . . . . 7 . . . 
                        . . . 7 7 7 . . 
                        . . . 7 . 7 . . 
                        `)
                } else {
                    mySprite.ay = 200
                    direction = 0
                    mySprite.setImage(img`
                        . . . 7 . 7 . . 
                        . . . 7 7 7 . . 
                        . . . . 7 . . . 
                        . . . 5 5 5 5 . 
                        . . 5 5 5 f 5 5 
                        . 5 5 5 5 5 5 5 
                        5 5 5 5 5 5 5 5 
                        5 5 5 5 5 5 5 . 
                        `)
                }
                pause(1000)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(119, 12))
    info.setLife(info.life() - 1)
    mySprite = sprites.create(img`
        . . . 7 . 7 . . 
        . . . 7 7 7 . . 
        . . . . 7 . . . 
        . . . 5 5 5 5 . 
        . . 5 5 5 f 5 5 
        . 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 70, 0)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 200
    direction = 0
    pause(1000)
    myEnemy.follow(mySprite, 55)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level 5`))
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
    level = 10
    mySprite2 = sprites.create(img`
        d 1 1 1 1 . . . 
        d 1 2 1 1 1 2 1 
        d 2 1 1 1 2 1 1 
        d 2 1 2 1 2 1 1 
        d 2 2 1 1 1 2 1 
        d 1 1 1 1 1 1 1 
        d d . . 1 1 1 1 
        d d . . . . . . 
        `, SpriteKind.flag)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(79, 5))
    mySprite3 = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c44444444466c.
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
        ....644444444c66f4e44e44e44e44ee66c444444446....
        .....64eee444c66f4e44e44e44e44ee66c444eee46.....
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(88, 6))
    mySprite.setVelocity(0, -20)
    mySprite4 = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ..........111111111111..........
        ..........111111111111..........
        ..........112222122211..........
        ..........112111112111..........
        ..........112211112111..........
        ..........112111122211..........
        ..........111111111111..........
        ..........112211212221..........
        ..........112121211211..........
        ..........112121211211..........
        ..........112112212221..........
        ..........111111111111..........
        ..........112222121211..........
        ..........112111121211..........
        ..........111221122211..........
        ..........111112121211..........
        ..........112222121211..........
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(88, 10))
    mySprite4.setFlag(SpriteFlag.Invisible, true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 980), music.PlaybackMode.InBackground)
    if (start == 10) {
        if (controller.A.isPressed()) {
            if (Jump_keys == 1) {
                if (direction == 0) {
                    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                        mySprite.setVelocity(0, -70)
                    }
                } else {
                    if (mySprite.isHittingTile(CollisionDirection.Top)) {
                        mySprite.setVelocity(0, 70)
                    }
                }
            }
            if (Jump_keys == 2) {
                if (direction == 0) {
                    mySprite.ay = -200
                    direction = 1
                    mySprite.setImage(img`
                        5 5 5 5 5 5 5 . 
                        5 5 5 5 5 5 5 5 
                        . 5 5 5 5 5 5 5 
                        . . 5 5 5 f 5 5 
                        . . . 5 5 5 5 . 
                        . . . . 7 . . . 
                        . . . 7 7 7 . . 
                        . . . 7 . 7 . . 
                        `)
                } else {
                    mySprite.ay = 200
                    direction = 0
                    mySprite.setImage(img`
                        . . . 7 . 7 . . 
                        . . . 7 7 7 . . 
                        . . . . 7 . . . 
                        . . . 5 5 5 5 . 
                        . . 5 5 5 f 5 5 
                        . 5 5 5 5 5 5 5 
                        5 5 5 5 5 5 5 5 
                        5 5 5 5 5 5 5 . 
                        `)
                }
                pause(1000)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spike up`, function (sprite, location) {
    pause(100)
    sprites.destroy(mySprite, effects.fire, 500)
    pause(1000)
    player_die()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 10) {
        if (direction == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . 7 . 7 . . . 
                . . 7 7 7 . . . 
                . . . 7 . . . . 
                . 5 5 5 5 . . . 
                5 5 f 5 5 5 . . 
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                `,img`
                . . 7 . 7 . . . 
                . . 7 7 7 . . . 
                . . . 7 . . . . 
                . 5 5 5 5 . . . 
                5 5 f 5 5 5 . . 
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 . 
                `],
            500,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . 7 . 7 . . . 
                . . 7 7 7 . . . 
                . . . 7 . . . . 
                . 5 5 5 5 . . . 
                5 5 f 5 5 5 . . 
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                `,img`
                . . 7 . 7 . . . 
                . . 7 7 7 . . . 
                . . . 7 . . . . 
                . 5 5 5 5 . . . 
                5 5 f 5 5 5 . . 
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 . 
                `],
            500,
            false
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    pause(100)
    sprites.destroy(mySprite, effects.fire, 500)
    pause(1000)
    player_die()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tele 2`, function (sprite, location) {
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    level = 3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == 10) {
        if (direction == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . 7 . 7 . . 
                . . . 7 7 7 . . 
                . . . . 7 . . . 
                . . . 5 5 5 5 . 
                . . 5 5 5 f 5 5 
                . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 . 
                `,img`
                . . . 7 . 7 . . 
                . . . 7 7 7 . . 
                . . . . 7 . . . 
                . . . 5 5 5 5 . 
                . . 5 5 5 f 5 5 
                . 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                `],
            500,
            false
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                . . 5 5 5 f 5 5 
                . . . 5 5 5 5 . 
                . . . . 7 . . . 
                . . . 7 7 7 . . 
                . . . 7 . 7 . . 
                `,img`
                . 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 
                . . 5 5 5 f 5 5 
                . . . 5 5 5 5 . 
                . . . . 7 . . . 
                . . . 7 7 7 . . 
                . . . 7 . 7 . . 
                `],
            500,
            false
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(23, 3))
    level = 8
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level30`))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
    sprites.destroy(myEnemy)
    level = 9
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(105, 4))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tele 3`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level 3`))
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 33))
    level = 4
    game.showLongText("You can slide by creating friction by rubbing through walls that gives you an extra bonus for jump.", DialogLayout.Center)
})
info.onLifeZero(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile53`, function (sprite, location) {
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 9))
    level = 6
})
function player_die () {
    info.setLife(info.life() - 1)
    mySprite = sprites.create(img`
        . . . 7 . 7 . . 
        . . . 7 7 7 . . 
        . . . . 7 . . . 
        . . . 5 5 5 5 . 
        . . 5 5 5 f 5 5 
        . 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 . 
        `, SpriteKind.Player)
    mySprite.ay = 200
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 70, 0)
    direction = 0
    if (level == 1) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
    } else if (level == 2) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 24))
    } else if (level == 3) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    } else if (level == 4) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 33))
    } else if (level == 5) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    } else if (level == 6) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(22, 9))
    } else if (level == 7) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    } else if (level == 8) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(121, 3))
        myEnemy.follow(mySprite, 55)
    } else if (level == 9) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
    } else if (level == 10) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile57`, function (sprite, location) {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level22`))
    scene.cameraShake(4, 500)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 15))
    level = 7
    game.showLongText("Long Jumps! You need to jump from the last platform and then change gravity to get some extra time in the air to go farther.", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile53`, function (sprite, location) {
    game.gameOver(true)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let start = 0
let Jump_keys = 0
let direction = 0
let level = 0
level = 1
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level4`))
scene.setBackgroundColor(12)
effects.clouds.startScreenEffect()
effects.starField.startScreenEffect()
game.showLongText("Hello! Welcome to our game Gravity Coiler. Let's PLAY", DialogLayout.Center)
game.showLongText("But first, tell your name.", DialogLayout.Center)
let player_name = game.askForString("Your name")
game.showLongText("Use arrow keys for moving and jumping", DialogLayout.Center)
game.showLongText("Now, you could choose that you have to jump using Spacebar or Enter key.", DialogLayout.Center)
game.showLongText("Also, you have to choose that you want to use Spacebar or Enter key for changing gravity.", DialogLayout.Center)
game.showLongText("Choose using 1 or 2.", DialogLayout.Center)
direction = 0
Jump_keys = 0
start = 0
let run = 2
mySprite = sprites.create(img`
    . . . 7 . 7 . . 
    . . . 7 7 7 . . 
    . . . . 7 . . . 
    . . . 5 5 5 5 . 
    . . 5 5 5 f 5 5 
    . 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 4))
start = 10
game.showLongText("1 = Enter for changing gravity and spacebar for jumping. 2 = Enter for jump and Spacebar for changing gravity.", DialogLayout.Full)
game.showLongText("If you choose the - or . symbol, the game won't work", DialogLayout.Center)
game.showLongText("Use ENTER key while typing your answer for erasing your selection.", DialogLayout.Center)
Jump_keys = game.askForNumber("Choose", 1)
game.showLongText("If you want to change your selection now, then go to the RE tile in the left", DialogLayout.Center)
let monster = sprites.create(img`
    ............................
    ............................
    ............................
    ............................
    ............................
    3333333333333333333333333333
    3111111111111111111111111111
    3131113333131111313333131111
    3131113111131111313111131113
    3131113111131111313111131111
    3131113111131111313111131111
    3131113331113113113331131111
    3131113111113113113111131113
    3131113111113113113111131111
    3133313333111331113333133311
    3111111111111111111111111111
    3333333333333333333333333333
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    ............................
    `, SpriteKind.Player)
monster.setPosition(139, 7)
mySprite.ay = 200
monster.setFlag(SpriteFlag.RelativeToCamera, true)
let textSprite = textsprite.create(player_name, 0, 15)
pause(200)
info.setLife(25)
pause(200)
controller.moveSprite(mySprite, 70, 0)
forever(function () {
    if (10 == start) {
        while (Jump_keys == 5) {
            if (Jump_keys == 5) {
                game.showLongText("Please use only 1 or 2.", DialogLayout.Bottom)
                Jump_keys = game.askForNumber("Choose", 1)
            }
        }
    }
})
forever(function () {
    textSprite.setPosition(mySprite.x + 2, mySprite.y - 10)
})
forever(function () {
    info.setScore(level)
})
forever(function () {
    if (run == 2) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile50`)) {
            scene.cameraShake(2, 500)
            myEnemy = sprites.create(img`
                . . . e . . e . . e . . e . . . 
                . e . . f f f f f f . . . . . e 
                . . . f f f f f f f f f . f f . 
                e . f f f f 2 2 2 2 2 f . 5 f . 
                . . f f f 1 2 2 2 f 2 2 5 5 . e 
                . . f f f 2 1 2 2 1 2 5 5 . . . 
                e . f . f 2 2 2 1 2 5 5 f . . . 
                . . . . f 2 2 2 2 2 5 2 f . e . 
                . . . . f 2 2 1 2 2 2 2 f . . . 
                . . f 5 f 2 1 2 2 2 2 2 f . . . 
                . . 5 . f f f f f f f f . . . . 
                . . f . . 5 5 . . . 5 5 . . . . 
                2 . 5 . . f f . . . f f . . . . 
                2 5 f . . 5 5 . . . 5 5 . . . . 
                . . . . f f f . . f f f . . . . 
                . . . 5 5 5 . . 5 5 . . . . . . 
                `, SpriteKind.Boss)
            tiles.placeOnTile(myEnemy, tiles.getTileLocation(111, 12))
            pause(100)
            game.showLongText("RUN! RUN! RUN! If it touches you,you will die", DialogLayout.Bottom)
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level26`))
            pause(1000)
            myEnemy.follow(mySprite, 55)
            run += 12039
            level = 8
            myEnemy.setFlag(SpriteFlag.GhostThroughWalls, false)
        }
    }
})
forever(function () {
    if (level == 4) {
        if (direction == 0) {
            if (mySprite.isHittingTile(CollisionDirection.Left)) {
                mySprite.ay = 65
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                mySprite.ay = 65
            } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.ay = 205
            } else {
                mySprite.ay = 205
            }
        }
        if (direction == 1) {
            if (mySprite.isHittingTile(CollisionDirection.Left)) {
                mySprite.ay = -65
            } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
                mySprite.ay = -65
            } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.ay = -205
            } else {
                mySprite.ay = -205
            }
        }
    }
})
