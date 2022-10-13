//player and movement
let jumps = 1

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
 if (jumps > 0) {
     joe.vy = -150
     jumps -= 1
 }
   

})
let joe: Sprite = null
joe = sprites.create(img`
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
    `, SpriteKind.Player)
controller.moveSprite(joe, 150, 0)
scene.cameraFollowSprite(joe)
controller.B.onEvent(ControllerButtonEvent.Pressed,function() {
game.splash(joe.y / 16)
})


game.onUpdate(function() {
  if (joe.isHittingTile(CollisionDirection.Bottom)) {
      jumps = 2
  }

})
joe.x = 120 * 16


