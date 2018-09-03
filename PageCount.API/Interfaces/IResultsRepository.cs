using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PageCount.API.Model;

namespace PageCount.API.Interfaces
{
    public interface IResultsRepository
    {
        void Add (Result result);
         void Update <T>(T entity) where T : class; 
         void Delete <T>(T entity) where T : class; 
         Task<Result> GetResult(int id);
         Task<IEnumerable<Result>> GetResults();
         Task<IEnumerable<Result>> GetResultsByDate(string date);
         Task<IEnumerable<Result>> GetResultsByPeriod(DateTime from, DateTime to);
         Task<bool> SaveAll();
         Task<bool> ResultAlreadyExists(int id, DateTime dateAdded);
    }
}