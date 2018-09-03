using System.Threading.Tasks;
using PageCount.API.Model;

namespace PageCount.API.Interfaces
{
    public interface IAuthRepository
    {
        Task<User> Register (User user, string password);
        Task<User> Login (string username, string password);
        Task<bool> UserAlreadyExist (string username);
    }
}