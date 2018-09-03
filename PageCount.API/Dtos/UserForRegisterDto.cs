using System.ComponentModel.DataAnnotations;
using PageCount.API.Model;

namespace PageCount.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public Department Department { get; set; }
        [Required]
        [StringLength(32, MinimumLength=8, ErrorMessage="Your password must have between 8 and 32 characters")]
        public string Password { get; set; }
    }
}