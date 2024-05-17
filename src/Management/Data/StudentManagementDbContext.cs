using Microsoft.EntityFrameworkCore;

namespace Management;

public class StudentManagementDbContext : DbContext
{
    public StudentManagementDbContext(DbContextOptions<StudentManagementDbContext> options) : base(options)
    {
        
    }

    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<StudentCourse> StudentCourses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<StudentCourse>()
            .HasKey(sc => new { sc.StudentId, sc.CourseId });
    }

}
