namespace Management;

public class DbInitializer 
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        Initialize(scope.ServiceProvider.GetService<StudentManagementDbContext>());
    }
    public static void Initialize(StudentManagementDbContext context)
    {
        context.Database.EnsureCreated();

        if (context.Students.Any())
        {
            return;
        }

        var students = new Student[]
        {
            new Student
            {
                Name = "John Doe",
                Email = "jdoe@gmail.com",
                DateOfBirth = new DateTime(1990, 1, 1),
                Address = "123 Elm St",
                PhoneNumber = "123-456-7890",
                // StudentCourses = [1, 2, 3]
            },
            new Student
            {
                Name = "Jane Doe",
                Email = "jane@gmail.com",
                DateOfBirth = new DateTime(1991, 2, 2),
                Address = "456 Oak St",
                PhoneNumber = "456-789-0123",
                // StudentCourses = [10, 20, 30]
            }
        };

        foreach (var student in students)
        {
            context.Students.Add(student);
        }

        context.SaveChanges();

    }

}
