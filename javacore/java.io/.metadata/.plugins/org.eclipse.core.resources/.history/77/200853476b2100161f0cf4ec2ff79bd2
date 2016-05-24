package PrintWriter;

import java.io.*;

public class PrintWriterDemo {

   public static void main(String[] args) {
      String s = "Hello World";
      try {

         // create a new stream at specified file
         PrintWriter pw = new PrintWriter(System.out);

         // write the string in the file
         pw.write(s);

         // flush the writer
         pw.flush();

      } catch (Exception ex) {
         ex.printStackTrace();
      }
   }
}