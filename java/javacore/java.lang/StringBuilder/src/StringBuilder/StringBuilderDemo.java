package StringBuilder;

import java.lang.*;

public class StringBuilderDemo {

	public static void main(String[] args) {

		StringBuilder str = new StringBuilder("India ");
		System.out.println("string = " + str);

		// append character to the StringBuilder
		str.append('!');
		// convert to string object and print it
		System.out.println("After append = " + str.toString());

		str = new StringBuilder("Hi ");
		System.out.println("string = " + str);
		// append integer to the StringBuilder
		str.append(123);
		// convert to string object and print it
		System.out.println("After append = " + str.toString());
	}
}