
public class StudentModel {
	private String rollNo;
	private String name;
	public StudentModel(){
		super();
	}
	
	public StudentModel(String rollNo, String name){
		super();
		this.rollNo =rollNo;
		this.name = name;
	}
	
	public String getRollNo(){
		return rollNo;
	}
	
	public void setRollNo(String rollNo){
		this.rollNo = rollNo;
	}
	
	public String getName(){
		return name;
	}
	
	public void setName(String name){
		this.name = name;
	}
	
	public String toString(){
		return "Student[rollNo="+rollNo+",name="+name+"]";
	}
}
