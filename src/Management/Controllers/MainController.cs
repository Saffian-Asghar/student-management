using System;
using Microsoft.AspNetCore.Mvc;

namespace Management.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class MainController : Controller
    {
        private readonly IStudentRepository _studentRepository;

        public MainController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _studentRepository.GetStudentsAsync();
            return Ok(students);
        }

        [HttpGet("{studentId}")]
        public async Task<IActionResult> GetStudent(int studentId)
        {
            var student = await _studentRepository.GetStudentAsync(studentId);
            return Ok(student);
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] Student student)
        {
            var newStudent = await _studentRepository.AddStudentAsync(student);
            return Ok(newStudent);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateStudent([FromBody] Student student)
        {
            var updatedStudent = await _studentRepository.UpdateStudentAsync(student);
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
        public async Task<IActionResult> AddCourse([FromBody] Course course)
        {
            var newCourse = await _studentRepository.AddCourseAsync(course);
            return Ok(newCourse);
        }

        [HttpPut("courses")]
        public async Task<IActionResult> UpdateCourse([FromBody] Course course)
        {
            var updatedCourse = await _studentRepository.UpdateCourseAsync(course);
            return Ok(updatedCourse);
        }

        [HttpDelete("courses/{courseId}")]
        public async Task<IActionResult> DeleteCourse(int courseId)
        {
            var deletedCourse = await _studentRepository.DeleteCourseAsync(courseId);
            return Ok(deletedCourse);
        }


    }
}
