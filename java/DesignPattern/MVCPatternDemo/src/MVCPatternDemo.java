
public class MVCPatternDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//fetch student record based on his roll no from the
		StudentModel model = retriveStudentFromDatabase();
		
		//
		StudentView view = new StudentView();
		StudentController controller = new StudentController(model, view);
		controller.updateView();
		//update model data
		controller.setStudentName("John");
		controller.updateView();
	}
	private static StudentModel retriveStudentFromDatabase(){
	      StudentModel student = new StudentModel();
	      student.setName("Robert");
	      student.setRollNo("10");
	      return student;
	   }

}
