using Microsoft.EntityFrameworkCore;

namespace Management;

public class StudentRepository : IStudentRepository
{
    private readonly StudentManagementDbContext _studentManagementDbContext;

    public StudentRepository(StudentManagementDbContext studentManagementDbContext)
    {
        _studentManagementDbContext = studentManagementDbContext;
    }

    public Task<List<Student>> GetStudentsAsync()
    {
        return _studentManagementDbContext.Students.ToListAsync();
    }

    public Task<Student> GetStudentAsync(int studentId)
    {
        return _studentManagementDbContext.Students.FirstOrDefaultAsync(s => s.Id == studentId);
    }

    public Task<Student> AddStudentAsync(Student student)
    {
        _studentManagementDbContext.Students.Add(student);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => student);
    }

    public Task<Student> UpdateStudentAsync(Student student)
    {
        _studentManagementDbContext.Students.Update(student);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => student);
    }

    public Task<Student> DeleteStudentAsync(int studentId)
    {
        var student = _studentManagementDbContext.Students.FirstOrDefaultAsync(s => s.Id == studentId);
        _studentManagementDbContext.Students.Remove(student.Result);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => student.Result);
    }

    public Task<List<Course>> GetCoursesAsync()
    {
        return _studentManagementDbContext.Courses.ToListAsync();
    }

    public Task<Course> GetCourseAsync(int courseId)
    {
        return _studentManagementDbContext.Courses.FirstOrDefaultAsync(c => c.Id == courseId);
    }

    public Task<Course> AddCourseAsync(Course course)
    {
        _studentManagementDbContext.Courses.Add(course);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => course);
    }

    public Task<Course> UpdateCourseAsync(Course course)
    {
        _studentManagementDbContext.Courses.Update(course);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => course);
    }

    public Task<Course> DeleteCourseAsync(int courseId)
    {
        var course = _studentManagementDbContext.Courses.FirstOrDefaultAsync(c => c.Id == courseId);
        _studentManagementDbContext.Courses.Remove(course.Result);
        return _studentManagementDbContext.SaveChangesAsync().ContinueWith(_ => course.Result);
    }

}
