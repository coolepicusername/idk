// Add your code here
let height = 12
tiles.setCurrentTilemap(tilemap`level1`)
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
    `, SpriteKind.Player)
let y = randint(25, 35) * 16
creator.x = 8
for (let index = 0; index < 128; index++) {
    creator.y = y 
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
    tiles.setWallAt(creator.tilemapLocation(), true)
    for (let index = 0; index < 16; index++) {
        creator.y += 16
        tiles.setTileAt(creator.tilemapLocation(), img`
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
                        e e e e e e e e e e e e e e e e
                        e e e e e e e e e e e e e e e e
                        e e e e e e e e e e e e e e e e
                        e e e e e e e e e e e e e e e e
                        e e e e e e e e e e e e e e e e
                        e e e e e e e e e e e e e e e e
                    `)
        tiles.setWallAt(creator.tilemapLocation(), true)
    }
    creator.x += 16
    if (y > 255 && y < 640) {
        y += randint(randint(height, -height), randint(height, -height))
    } else if (y < 256) {
        y += randint(0, height)
    } else if (y > 639) {
        y += randint(0, -height)
    }
}
game.onUpdate(function () {
    joe.vy += 5
})


