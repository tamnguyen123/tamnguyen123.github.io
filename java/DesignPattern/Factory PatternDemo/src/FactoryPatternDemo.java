
public class FactoryPatternDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ShapeFactory shapeFactory = new ShapeFactory();
		
		//get a circle object and call fuction draw()
		Shape shape1 = shapeFactory.getShape("CIRCLE");
		//call function draw of Circle
		shape1.draw();
		
		//get a Rectangle object and call function draw()
		Shape shape2 = shapeFactory.getShape("RECTANGLE");
		//call func draw() of Rectangle
		shape2.draw();
		
		//get a Square object and call func draw()
		Shape shape3 = shapeFactory.getShape("SQUARE");
		//call func draw() of Square
		shape3.draw();
	}

}
