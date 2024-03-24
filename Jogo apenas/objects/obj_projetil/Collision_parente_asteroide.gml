/// @description colisão
audio_play_sound(snd_hit, 1, false);
var _dano = dano;

with(other){
	vida -= _dano;	
}

instance_destroy();
