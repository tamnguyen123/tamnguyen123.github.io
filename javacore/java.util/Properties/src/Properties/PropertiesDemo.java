package Properties;

import java.util.*;


public class PropertiesDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Properties capitals = new Properties();
		Set states;
		String str;

		capitals.put("Illinois", "Springfield");
		capitals.put("Missouri", "Jefferson City");
		capitals.put("Washington", "Olympia");
		capitals.put("California", "Sacramento");
		capitals.put("Indiana", "Indianapolis");

		// Show all state and capital in hashtable.
		states = capitals.keySet(); // set set-view to key
		Iterator itr = states.iterator();
		while (itr.hasNext()) {
			str = (String) itr.next();
			System.out.println("Capital 's " + str + " is " + capitals.getProperty(str) + ".");
		}
		System.out.println();

		// Find state don't have in list -- default
		str = capitals.getProperty("Florida", "Not Found");
		System.out.println("Capital 's Florida is " + str + ".");
	}

}
