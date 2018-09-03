using System;
using PageCount.API.Model;

namespace PageCount.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public Department Department { get; set; }
        public DateTime LastActive { get; set; }

    }
}