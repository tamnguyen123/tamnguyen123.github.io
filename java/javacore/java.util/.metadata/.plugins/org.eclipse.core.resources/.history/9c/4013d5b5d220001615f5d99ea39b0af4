package LinkedHashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;

public class LinkedHashSetDemo {

    /**
     * Java LinkedHashSet example
     * Adding/removing objects to the LinkedHashSet and basic LinkedHashSet methods 
     */
    public static void main(String[] args) {
        LinkedHashSet<String> studentsSet = new LinkedHashSet<String>(); 
        studentsSet.add("Harsha");
        studentsSet.add("Bharat");
        studentsSet.add("Tejaswini");
        studentsSet.add("Naren");
        studentsSet.add("Venu"); 
        System.out.println("Set elements:");
        for(String s : studentsSet){
            System.out.println("-" + s);
        }
        System.out.println("Set size:" + studentsSet.size());
        System.out.println("Removing element 'Third'...");
        studentsSet.remove("Venu");
        System.out.println("Set size:" + studentsSet.size());
        System.out.println("Set elements:");
        //iterating by iterator
        Iterator<String> i = studentsSet.iterator(); 
        while (i.hasNext()) {
            String s = i.next();
            System.out.println("-" + s);
        }
        System.out.println("Set contains object 'First'? " 
                + studentsSet.contains("First"));
        
        System.out.println("Removing all elements...");
        studentsSet.clear();
        System.out.println("Set is empty now? " + studentsSet.isEmpty());
        studentsSet.add(null);
    }
}