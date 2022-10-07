//player and movement

let joe = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`,SpriteKind.Player)
controller.moveSprite(joe,100,0)
scene.cameraFollowSprite(joe)
tiles.setCurrentTilemap(tilemap`level1`)

game.onUpdate(function() {
joe.vy += 5
})
controller.up.onEvent(ControllerButtonEvent.Pressed,function() {
    joe.vy = -100
})

//generation

let creator = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
`,SpriteKind.Player)
let y = randint(6, 12)
for (let i = 0; i < 16; i++) {
    creator.y = y * 16 - 8
    creator.x = 8
    tiles.setTileAt(creator.tilemapLocation(), img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e
    `)
    tiles.setWallAt(creator.tilemapLocation(),true)
}