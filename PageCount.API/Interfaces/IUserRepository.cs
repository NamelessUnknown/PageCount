using System.Collections.Generic;
using System.Threading.Tasks;
using PageCount.API.Model;

namespace PageCount.API.Interfaces
{
    public interface IUsersRepository
    {
         void Add <T>(T entity) where T : class; 
         void Update <T>(T entity) where T : class; 
         void Delete <T>(T entity) where T : class; 
         Task<User> GetUserStatsAndResults(int id);
         Task<IEnumerable<User>> GetUsersAndTheirStats();
         Task<bool> SaveAll();
    }
}