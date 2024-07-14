using Microsoft.EntityFrameworkCore;
using Employee_Management_System__BackEnd.Models;

namespace Employee_Management_System__BackEnd.Data;

public class EmployeeContext : DbContext
{
    public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options) { }

    public DbSet<Employee> Employees { get; set; }

}
