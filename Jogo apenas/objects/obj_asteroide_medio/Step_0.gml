move_wrap(true, true, 0);

image_angle += rotac;

if vida <= 0{
	audio_play_sound(snd_explosao, 1, false);
	global.pont += 15;
	repeat(2){
		instance_create_layer(x, y, "Instances", obj_asteroide_pequeno);
}

	repeat(7){
		instance_create_layer(x, y, "Instances", obj_detritos);	
	}
	instance_destroy();	
}