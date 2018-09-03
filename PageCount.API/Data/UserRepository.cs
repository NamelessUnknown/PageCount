using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PageCount.API.Interfaces;
using PageCount.API.Model;

namespace PageCount.API.Data
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DataContext _context;

        public UsersRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<User> GetUserStatsAndResults(int id)
        {
            var userAndResults = await _context.Users.Include( x => x.Results).FirstOrDefaultAsync(u => u.Id == id);
            return userAndResults;
        }
        public async Task<IEnumerable<User>> GetUsersAndTheirStats()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}