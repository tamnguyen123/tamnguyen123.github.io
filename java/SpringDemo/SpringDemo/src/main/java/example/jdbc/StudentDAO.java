package example.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class StudentDAO {
	private JdbcTemplate jdbcTemplate;

	public StudentDAO(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Student> getListStudent() {
		// List<Student> res = new ArrayList<Student>();
		String sql = "SELECT * FROM Student";
		List<Student> res = jdbcTemplate.query(sql, new StudentMapper());
		return res;
	}

	public Student getStudentById(int id) {
		String sql = "SELECT * FROM Student WHERE id=?";
		Student student = jdbcTemplate.queryForObject(sql, new Object[]{id}, new StudentMapper());
		return student;
	}

	public void deleteStudent(int id) {
		String sql = "DELETE FROM Student WHERE id =" + id;
		jdbcTemplate.execute(sql);
	}

	public void insertStudent(Student student) {
		String sql = "INSERT INTO Student(name, age) VALUES(?,?)";
		jdbcTemplate.update(sql, new Object[]{student.getName(), student.getAge()});
	}

	public class StudentMapper implements RowMapper<Student> {
		public Student mapRow(ResultSet rs, int rowNum) throws SQLException {
			Student student = new Student();
			student.setId(rs.getInt("id"));
			student.setName(rs.getString("name"));
			student.setAge(rs.getInt("age"));
			return student;
		}
	}
}
