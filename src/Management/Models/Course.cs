using System.ComponentModel.DataAnnotations;

namespace Management;

public class Course
{
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public string Instructor { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime DateEnded { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }
    }
