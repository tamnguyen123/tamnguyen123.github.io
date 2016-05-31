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

			TreeSet sortedSet = new TreeSet<Integer>(set);
			System.out.println("Danh sach da qua sap xep la:");
			System.out.println(sortedSet);

			System.out.println("Phan tu dau tien cua tap hop la: " + (Integer) sortedSet.first());
			System.out.println("Phan tu cuoi cung cua tap hop la: " + (Integer) sortedSet.last());
		} catch (Exception e) {
		}
	}

}
