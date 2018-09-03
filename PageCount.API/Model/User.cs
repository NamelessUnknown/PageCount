using System;
using System.Collections.Generic;

namespace PageCount.API.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public Department Department { get; set; }
        public DateTime RegisteredSince { get; set; }
        public DateTime LastActive { get; set; }
        public ICollection<Result> Results { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}