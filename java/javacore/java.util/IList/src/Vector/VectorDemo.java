package Vector;
import java.util.*;

public class VectorDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vector<String> vector = new Vector<>();

		vector.addElement("JavaCodeGeeks");

		vector.addElement("is");

		vector.addElement("Cool!");

		String[] wordArray;

		synchronized (vector) {

			int size = vector.size();

			wordArray = new String[size];

			for (int i = 0; i < wordArray.length; i++) {

				wordArray[i] = (String) vector.elementAt(i);

			}

		}

		System.out.println("word.length" + wordArray.length);

		for (int i = 0; i < wordArray.length; i++) {

			System.out.println("[" + i + "]=" + wordArray[i]);

		}

	}
}
