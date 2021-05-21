let rot = 0;

//tests
const fragB = extend(ContinuousLaserBulletType, {
  length: 150,
  drawSize: 150,
  damage: 50,
  collides: true,
  lifetime: 200,
  continuous: true,
});

const lBullet = extend(ArtilleryBulletType, {
  damage: 10,
  speed: 2.2,
  lifetime: 70,
  width: 14,
  heigth: 12,
  collidesTiles: false,
  splashDamageRadius: 72,
  splashDamage: 65,
  
  
  despawned(b){
    rot = b.rotation();
    for(let i = 0; i < 4; i++){
      let ang = 90 * i + b.rotation();
      fragB.create(b.owner, b.team, b.x, b.y, ang);
    }
  },
  update(b){
    rot = rot + 2;
});

//bullet
const lotus = extend(PowerTurret, "lotus", {
  targetAir: false,
  shots: 1,
  inaccuracy: 3,
  reloadTime: 300,
  shootShake: 7,
  range: 290,
  minRange: 65,
  shootType: lBullet
});

lotus.buildType = () => extend(PowerTurret.PowerTurretBuild, lotus, {
/*
  updateTile(){
    this.super$updateTile();
    if(this.isShooting()){
      Timer.schedule(() => {
        this.block.shootDuration = 150;
      }, 1)
    } else if(!this.isShooting()){
      this.block.shootDuration = 1;
    }
  }
*/
});
