package example.injectingcollection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		JavaCollection javaCollection = (JavaCollection) context.getBean("javaCollection");

		System.out.println("List \t:" + javaCollection.getAddressList());
		System.out.println("Set \t:" + javaCollection.getAddressSet());
		System.out.println("Map \t:" + javaCollection.getAddressMap());
		System.out.println("Props \t:" + javaCollection.getAddressProp());
	}
}
