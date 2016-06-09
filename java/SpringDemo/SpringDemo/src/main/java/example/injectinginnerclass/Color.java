package example.injectinginnerclass;

public class Color {
	private String colorName;

	public Color() {
		// TODO Auto-generated constructor stub
		System.out.println("Initialize color constructor ");
	}

	public String getColorName() {
		return colorName;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public void printColorName() {
		System.out.println("Color of Pen: " + colorName);
	}
}
