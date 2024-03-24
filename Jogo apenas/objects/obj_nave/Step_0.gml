if keyboard_check(vk_up){
	sprite_index = spr_nave_andando;
	speed = veloc;
}else if keyboard_check(vk_down){
	sprite_index = spr_nave_andando;
	speed = -veloc;
}else{
	speed = lerp(speed, 0, 0.05);
	sprite_index = spr_nave_parada;
}

if keyboard_check(vk_left){
	direc = 3;
}else if keyboard_check(vk_right){
	direc = -3;
} else{
	direc = lerp(direc, 0, 0.08);	
}

if keyboard_check_pressed(vk_space){
	audio_play_sound(snd_projetil, 1, false);
	var _inst = instance_create_layer(x, y, "Instances", obj_projetil);
	_inst.speed = 6; 
	_inst.direction = direction;
	_inst.image_angle = direction;
	_inst.dano = dano_nave;
}
direction += direc;
image_angle = direction;

move_wrap(true, true, 0);

if alarm[0] > 0{
	if image_alpha <= 0{
		alfa_add = 0.05;
	}else if image_alpha >= 1{
		alfa_add = -0.05;
	}
	
	image_alpha += alfa_add;
	
}else{
	image_alpha = 1;
}

if vida <= 0{
	game_restart();
}

if global.pont >= 1000{
	room_goto(rm_final);
}
