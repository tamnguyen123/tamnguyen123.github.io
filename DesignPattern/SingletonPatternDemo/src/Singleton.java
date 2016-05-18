
public class Singleton {
	//create a Singleton object
	private static Singleton instance = new Singleton();
	
	//
	private Singleton(){}
	
	//Get the only object avaible
	public static Singleton getInstance(){
		return instance;
	}
	
	public void showMessage(){
		System.out.println("Hello!");
	}
}
