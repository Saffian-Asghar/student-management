namespace Management;

public interface IStudentRepository
{
    Task<List<Student>> GetStudentsAsync();
    Task<Student> GetStudentAsync(int studentId);
    Task<Student> AddStudentAsync(Student student);
    Task<Student> UpdateStudentAsync(Student student);
    Task<Student> DeleteStudentAsync(int studentId);

    Task<List<Course>> GetCoursesAsync();
    Task<Course> GetCourseAsync(int courseId);
    Task<Course> AddCourseAsync(Course course);
    Task<Course> UpdateCourseAsync(Course course);
    Task<Course> DeleteCourseAsync(int courseId);

    Task<List<Course>> GetStudentCoursesAsync(int studentId);
    Task<bool> EnrollStudentCourseAsync(int studentId, int courseId);


}
