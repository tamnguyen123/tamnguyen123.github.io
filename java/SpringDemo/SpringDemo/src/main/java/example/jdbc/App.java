package example.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class App {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("datasource-config.xml");
		JdbcTemplate jdbcTemplate = (JdbcTemplate) context.getBean("jdbcTemplate");

		StudentDAO studentDAO = new StudentDAO(jdbcTemplate);
		Student s1 = studentDAO.getStudentById(1);
		System.out.println(s1);
	}
}
