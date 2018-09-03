using Microsoft.EntityFrameworkCore;
using PageCount.API.Model;

namespace PageCount.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
            public DbSet<User> Users {get; set;} 
            public DbSet<Result> Results {get; set;} 
    }
}