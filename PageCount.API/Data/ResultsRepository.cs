using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PageCount.API.Interfaces;
using PageCount.API.Model;

namespace PageCount.API.Data
{
    public class ResultsRepository : IResultsRepository
    {
        private readonly DataContext _context;

        public ResultsRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Result result)
        {

                _context.Results.AddAsync(result);
                _context.SaveChangesAsync();
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Result> GetResult(int id)
        {
            var result = await _context.Results.FirstOrDefaultAsync(x => x.Id == id);
            return result;
        }
        public async Task<IEnumerable<Result>> GetResultsByDate(string date)
        {   var time = DateTime.Parse(date);
            var resultsByDate = await _context.Results.Where(x => x.DateAdded == time).ToListAsync();
            return resultsByDate;
        }

        public async Task<IEnumerable<Result>> GetResults()
        {
            var results = await _context.Results.ToListAsync();
            return results;
        }

        public async Task<IEnumerable<Result>> GetResultsByPeriod(DateTime from, DateTime to)
        {
            var resultsByPeriod = await _context.Results.Where(x => x.DateAdded <= from && x.DateAdded >= to).ToListAsync();
            return resultsByPeriod;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public async Task<bool> ResultAlreadyExists(int userId, DateTime dateAdded)
        {
            if(await _context.Results.AnyAsync(x => x.UserId == userId && x.DateAdded == dateAdded))
            {
                return true;
            }
            return false;
        }
    }
}