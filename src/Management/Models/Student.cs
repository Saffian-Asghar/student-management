using System.ComponentModel.DataAnnotations;

namespace Management;

public class Student
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }
    }