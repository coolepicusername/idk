//player and movement

let joe = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . f f f f f f f f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . . f 2 2 2 2 2 2 f . . . .
    . . . f f 2 2 2 2 2 2 f f . . .
    . . . f 2 2 2 2 2 2 2 2 f . . .
    . . . f 2 2 2 2 2 2 2 2 f . . .
    . . . f 2 2 2 2 2 2 2 2 f . . .
    . . . f 2 2 2 f f 2 2 2 f . . .
    . . . f f 2 2 f f 2 2 f f . . .
    . . . . f 2 2 f f 2 2 f . . . .
    . . . . f 2 2 f f 2 2 f . . . .
    . . . . f f f f f f f f . . . .
    . . . . . . . . . . . . . . . .
`,SpriteKind.Player)
controller.moveSprite(joe,100,0)
scene.cameraFollowSprite(joe)
tiles.setCurrentTilemap(tilemap`level1`)

game.onUpdate(function() {
joe.vy += 5
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
    creator.y = y
    tiles.setTileAt(tiles.getTileLocation(0, 0), img` `)
    tiles.setWallAt(tiles.getTileLocation(creator.y, creator.x),)
}