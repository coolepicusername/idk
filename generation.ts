// Add your code here
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
let y = randint(25, 35)
creator.x = 8
for (let index = 0; index < 128; index++) {
    creator.y = y * 16 - 8
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
    if (y > 15 && y < 40) {
        y += randint(randint(2, -2), randint(2, -2))
    } else if (y < 16) {
        y += randint(0, 2)
    } else if (y > 39) {
        y += randint(0, -2)
    }
}
game.onUpdate(function () {
    joe.vy += 5
})
