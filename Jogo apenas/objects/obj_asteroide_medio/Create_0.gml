///@description Movimentação do asteroide
//Iniciar o movimento do asteroide

randomize();

rotac = random_range(1, 1.5);
speed = random_range(0.8, 1.2);
direction = irandom_range(0, 359);

vida = 2;

image_index = irandom_range(0, 2);