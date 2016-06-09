package example.beanlifecycle;

public class HelloWorld {
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void printMessage() {
		System.out.println("Xin chao " + name);
	}

	public void init() {
		System.out.println("This is initializing method");
	}

	public void destroy() {
		System.out.println("This is destroy method");
	}
}
