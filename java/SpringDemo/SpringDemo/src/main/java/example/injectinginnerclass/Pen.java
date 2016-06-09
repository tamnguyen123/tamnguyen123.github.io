package example.injectinginnerclass;

public class Pen {
	private Color color;

	public Pen() {
		// TODO Auto-generated constructor stub
	}
	
	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}

	public void printPenColor() {
		color.printColorName();
	}

}
