using System;

namespace PageCount.API.Model
{
    public class Result
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public Shift Shift { get; set; }
        public int Pages { get; set; }
        public int Associations { get; set; }
        public int Ads { get; set; }
        public int TimeSpentOnAds { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}