namespace Management;

public class UpdateCourseDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string Instructor { get; set; }
    public DateTime DateCreated { get; set; }
    public DateTime DateEnded { get; set; }

}
