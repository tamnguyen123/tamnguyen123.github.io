package example.eventhandling;

import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;

public class CustomEventPublisher implements ApplicationEventPublisherAware {

	private ApplicationEventPublisher publisher;

	@Override
	public void setApplicationEventPublisher(ApplicationEventPublisher arg0) {
		// TODO Auto-generated method stub
		this.publisher = arg0;
	}
	
	public void publish() {
		CustomEvent customEvent = new CustomEvent(this);
		publisher.publishEvent(customEvent);
	}
}
