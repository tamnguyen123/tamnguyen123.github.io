
public class SingletonPatternDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Get the only object available
		Singleton object = Singleton.getInstance();
		
		//show the message
		object.showMessage();
	}

}
