package Exception;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class ExceptionDemo {
	private static final String filename = "onput.txt";

	public static void main(String[] args) {
		BufferedReader rd = null;
		try {
			// Open the file for reading.
			rd = new BufferedReader(new FileReader(new File(filename)));

			// Read all contents of the file.
			String inputLine = null;
			while ((inputLine = rd.readLine()) != null)
				System.out.println(inputLine);
		} catch (IOException ex) {
			System.err.println("An IOException was caught!");
			ex.printStackTrace();
		} finally {
			// Close the file.
			try {
				rd.close();
			} catch (IOException ex) {
				System.err.println("An IOException was caught!");
				ex.printStackTrace();
			}
		}
	}
}