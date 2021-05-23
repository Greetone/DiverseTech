//require stuff
let scripts = Seq.with(
  //blocks
  "blocks/fusion-machine", "blocks/quantum-former",
  //turrets
  "turrets/mist", "turrets/magma"
);
scripts.each(e => {
  require(e);
});
print("DiverseTech is loaded, are you sure that u will play this?");

//client load info
Events.on(WorldLoadEvent, () => {
  Vars.ui.showInfoText("[#ff4444]Confirm[]\n DiverseTech Mod", "If you are playing this mod, be aware it is under testing and that it still in development. \n \n If you want to make a suggestion/pull request goto FlinTyX/DiverseTech.");
});
