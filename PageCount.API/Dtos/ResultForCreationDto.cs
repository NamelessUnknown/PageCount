using System;
using PageCount.API.Model;

namespace PageCount.API.Dtos
{
    public class ResultForCreationDto
    {
        public DateTime DateAdded { get; set; }
        public Shift Shift { get; set; }
        public int Pages { get; set; }
        public int Associations { get; set; }
        public int Ads { get; set; }
        public int TimeSpentOnAds { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public ResultForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}