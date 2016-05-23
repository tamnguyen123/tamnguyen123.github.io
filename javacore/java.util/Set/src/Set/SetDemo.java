package Set;

import java.util.*;

public class SetDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int count[] = { 34, 22, 10, 60, 30, 22 };
		Set<Integer> set = new HashSet<Integer>();
		try {
			for (int i = 0; i < 5; i++) {
				set.add(count[i]);
			}
			System.out.println(set);

			TreeSet<Integer> sortedSet = new TreeSet<Integer>(set);
			System.out.println("Sorted list is:");
			System.out.println(sortedSet);

			System.out.println("First item of list: " + (Integer) sortedSet.first());
			System.out.println("Last item of list: " + (Integer) sortedSet.last());
		} catch (Exception e) {
		}
	}

}