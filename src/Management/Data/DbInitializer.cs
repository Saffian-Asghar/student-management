namespace Management.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StudentManagementDbContext context)
        {
            context.Database.EnsureCreated();

            // Seed students if the table is empty
            if (!context.Students.Any())
            {
                var students = new[]
                {
                    new Student { Name = "John Doe", DateOfBirth = new DateTime(1990, 1, 1), Address = "123 Main St", PhoneNumber = "123-456-7890" },
                    new Student { Name = "Jane Smith", DateOfBirth = new DateTime(1995, 5, 10), Address = "456 Elm St", PhoneNumber = "456-789-0123" }
                    // Add more students as needed
                };

                context.Students.AddRange(students);
                context.SaveChanges();
            }

            // Seed courses if the table is empty
            if (!context.Courses.Any())
            {
                var courses = new[]
                {
                    new Course { Name = "Introduction to Computer Science", Description = "Basic concepts of computer science", Category = "Computer Science", Instructor = "Dr. Smith", DateCreated = DateTime.Now, DateEnded = DateTime.Now.AddMonths(3) },
                    new Course { Name = "Web Development Fundamentals", Description = "Fundamental concepts of web development", Category = "Web Development", Instructor = "Prof. Johnson", DateCreated = DateTime.Now, DateEnded = DateTime.Now.AddMonths(2) }
                    // Add more courses as needed
                };

                context.Courses.AddRange(courses);
                context.SaveChanges();
            }

            // Seed student-course associations if the table is empty
            if (!context.StudentCourses.Any())
            {
                var studentCourses = new[]
                {
                    new StudentCourse { StudentId = 1, CourseId = 1 }, // John Doe enrolled in Introduction to Computer Science
                    new StudentCourse { StudentId = 2, CourseId = 2 }  // Jane Smith enrolled in Web Development Fundamentals
                    // Add more student-course associations as needed
                };

                context.StudentCourses.AddRange(studentCourses);
                context.SaveChanges();
            }
        }
    }
}
