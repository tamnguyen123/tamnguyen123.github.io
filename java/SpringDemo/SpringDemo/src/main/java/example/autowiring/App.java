package example.autowiring;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		//Autowire by annotation
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
		Car car = (Car) context.getBean("carBean");
		System.out.println(car);
		
		//autowire by xml configuration
		ApplicationContext context1 = new ClassPathXmlApplicationContext("wiringbeans.xml");
		Student student = (Student) context1.getBean("student");
		System.out.println(student);
	}
}
