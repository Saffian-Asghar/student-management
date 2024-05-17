using System;
using Microsoft.AspNetCore.Mvc;

namespace Management.Controllers
{
    [ApiController]
    [Route("api/")]
    public class MainController : Controller
    {
        private readonly IStudentRepository _studentRepository;

        public MainController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        [HttpGet("students")]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _studentRepository.GetStudentsAsync();
            return Ok(students);
        }

        [HttpGet("students/{studentId}")]
        public async Task<IActionResult> GetStudent(int studentId)
        {
            var student = await _studentRepository.GetStudentAsync(studentId);
            return Ok(student);
        }

        [HttpPost("students")]
        public async Task<IActionResult> AddStudent([FromBody] CreateStudentDto student)
        {
            var newStudent = new Student
            {
                Id = GenerateUniqueId(),
                Name = student.Name,
                DateOfBirth = student.DateOfBirth,
                Address = student.Address
            };
            var addedStudent = await _studentRepository.AddStudentAsync(newStudent);
            return Ok(addedStudent);
        }

        private int GenerateUniqueId()
        {
            return new Random().Next(1000, 9999);
        }

        [HttpPut("students")]
        public async Task<IActionResult> UpdateStudent([FromBody] UpdateStudentDto student)
        {
            var updateObject = new Student
            {
                Name = student.Name,
                DateOfBirth = student.DateOfBirth,
                Address = student.Address,
                PhoneNumber = student.PhoneNumber
            };
            var updatedStudent = await _studentRepository.UpdateStudentAsync(updateObject);
            return Ok(updatedStudent);
        }

        [HttpDelete("{studentId}")]
        public async Task<IActionResult> DeleteStudent(int studentId)
        {
            var deletedStudent = await _studentRepository.DeleteStudentAsync(studentId);
            return Ok(deletedStudent);
        }

        [HttpGet("courses")]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await _studentRepository.GetCoursesAsync();
            return Ok(courses);
        }

        [HttpGet("courses/{courseId}")]
        public async Task<IActionResult> GetCourse(int courseId)
        {
            var course = await _studentRepository.GetCourseAsync(courseId);
            return Ok(course);
        }

        [HttpPost("courses")]
        public async Task<IActionResult> AddCourse([FromBody] CreateCourseDto course)
        {
            var newCourse = new Course
            {
                Id = GenerateUniqueId(),
                Name = course.Name,
                Description = course.Description,
                Category = course.Category,
                Instructor = course.Instructor,
                DateCreated = course.DateCreated,
                DateEnded = course.DateEnded
            };
            var result = await _studentRepository.AddCourseAsync(newCourse);
            return Ok(result);
        }

        [HttpPut("courses")]
        public async Task<IActionResult> UpdateCourse([FromBody] UpdateCourseDto course)
        {
            var courseToUpdate = await _studentRepository.GetCourseAsync(course.Id);
            var updatedCourse = await _studentRepository.UpdateCourseAsync(courseToUpdate);
            return Ok(updatedCourse);
        }

        [HttpDelete("courses/{courseId}")]
        public async Task<IActionResult> DeleteCourse(int courseId)
        {
            var deletedCourse = await _studentRepository.DeleteCourseAsync(courseId);
            return Ok(deletedCourse);
        }

        [HttpPost("enroll")]
        public async Task<IActionResult> EnrollStudentInCourse(int studentId, int courseId)
        {
            await _studentRepository.EnrollStudentCourseAsync(studentId, courseId);
            return Ok();
        }

        [HttpGet("studentcourses/{studentId}")]
        public async Task<IActionResult> GetCoursesForStudent(int studentId)
        {
            var courses = await _studentRepository.GetStudentCoursesAsync(studentId);
            return Ok(courses);
        }



    }
}
