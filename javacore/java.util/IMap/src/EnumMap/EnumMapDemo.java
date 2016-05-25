package EnumMap;
import java.util.EnumMap;
import java.util.Iterator;
 
/**
 * @author Tam Nguyen
 * Define enum Color
 */
public class EnumMapDemo {
 
  public enum Color {
    RED,ORANGE,YELLOW;
  }
 
  public static void main(String args[]) {
 
    EnumMap<Color, String> map = new EnumMap<Color, String>(Color.class);
 
    map.put(Color.RED, "The color red");
    map.put(Color.ORANGE, "The color orange");
    map.put(Color.YELLOW, "The color yellow");
 
    Iterator<Color> colors = map.keySet().iterator();
 
    while (colors.hasNext()) {
      Color c = colors.next();
      System.out.println(c + " : " + map.get(c));
    }
 
  }
}