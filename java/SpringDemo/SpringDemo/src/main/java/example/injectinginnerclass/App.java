package example.injectinginnerclass;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

		Pen pen = (Pen) context.getBean("pen");
		pen.printPenColor();
	}
}
