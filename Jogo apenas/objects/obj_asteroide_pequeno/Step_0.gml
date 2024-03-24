/// @description borda
move_wrap(true, true, 0);

image_angle += rotac;

if vida <= 0{
	audio_play_sound(snd_explosao, 1, false);
	global.pont += 20;
	repeat(4){
		instance_create_layer(x, y, "Instances", obj_detritos);	
	}
	instance_destroy();	
}