package StringBuffer;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class StringBufferDemo {

	public static void main(String[] args) throws IOException {

		// create StringBuffer object
		StringBuffer sbf = new StringBuffer();

		// StringBuffer contents
		sbf.append("StringBuffer contents first line.");
		// new line
		sbf.append(System.getProperty("line.separator"));
		// second line
		sbf.append("StringBuffer contents second line.");

		/*
		 * To write contents of StringBuffer to a file, use BufferedWriter
		 * class.
		 */

		BufferedWriter bwr = new BufferedWriter(new FileWriter(new File("demo.txt")));

		// write contents of StringBuffer to a file
		bwr.write(sbf.toString());

		// flush the stream
		bwr.flush();

		// close the stream
		bwr.close();

		System.out.println("Content of StringBuffer written to File.");
	}
}