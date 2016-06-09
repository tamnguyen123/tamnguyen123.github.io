package example.eventhandling;

import org.springframework.context.ApplicationEvent;

public class CustomEvent extends ApplicationEvent{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CustomEvent(Object source) {
		super(source);
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "My custom event";
	}
}
