package example.eventhandling;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
	public static void main(String[] args) {
		ConfigurableApplicationContext context = new ClassPathXmlApplicationContext("event-handling-beans.xml");
		HelloEventHandling handling = (HelloEventHandling) context.getBean("helloEventHandling");
		
		//raise a start event
		context.start();
		
		handling.printMessage();
		
		//raise a stop event
		context.stop();
		
		CustomEventPublisher customEventPublisher = (CustomEventPublisher) context.getBean("customEventPublisher");
		customEventPublisher.publish();
	}
}
