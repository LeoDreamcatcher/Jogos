package jogo_leitura;

import java.util.Random;
import java.util.Scanner;

public class Main {
	
	public static void main(String[]args) {
		Scanner in = new Scanner(System.in);
		String nome;
		Random rand = new Random();
		System.out.println("Welcome to the game, digite seu nome: ");
		nome = in.nextLine();
		System.out.println("Boa sorte "+nome);
		System.out.println("Deseja avançar para qual direção? (w, s, a, d)");
		String comando = in.nextLine();
		if(comando.equals("w")) {
			System.out.println("Você caminhou lentamente para frente...");
			System.out.println("Um inimigo surge na sua frente, o que voce deseja fazer? (a = atacar ou c = correr)");
			comando = in.nextLine();
			if(comando.equals("a")) {
				if(rand.nextInt(100) < 75) {
					System.out.println("Voce matou a criatura e venceu o jogo! Parabens!!!");
				}else {
					System.out.println("Você morreu... que decepcionante");
				}
			}else {
				System.out.println("Você fugiu para o horizonte, sua jornada acaba por enquanto!");
			}
			
		}else if (comando.equals("s")) {
			System.out.println("Epa, voce saiu do mapa");
		}else if (comando.equals("d")) {
			System.out.println("Você se perdeu pelo caminho escuro...");
		}else if (comando.equals("a")) {
			System.out.println("voce segue pela esquerda aguardando ser o caminho certo...");
			System.out.println("voce encontra uma casa na sua frente, oque voce vai fazer? (a = entrar na casa ou b = ir embora)");
			comando = in.nextLine();
			if(comando.equals("a")) {
				System.out.println("Voce adentrou a casa...");
				} else {
					System.out.println("Você fugiu para o horizonte, sua jornada acaba por enquanto!");
				}
				
			}
		}
		
}

