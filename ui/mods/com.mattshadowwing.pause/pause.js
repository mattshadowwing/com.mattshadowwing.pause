model.menuPauseGame = function(){
	model.pauseSim();
	model.closeMenu();
	api.Panel.message('chat','paused')
}