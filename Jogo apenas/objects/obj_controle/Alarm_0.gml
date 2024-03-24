/// @description coisas que ocorrem
if room == rm_jogo{
var melhoria = choose(obj_melhoria_escudo, obj_melhoria_projetil); 
instance_create_layer(random_range(0, room_width), random_range(0, room_height), "Instances",melhoria);
alarm[0] = 600; //10 segundos
}