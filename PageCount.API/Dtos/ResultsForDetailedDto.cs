using System;
using PageCount.API.Model;

namespace PageCount.API.Dtos
{
    public class ResultsForDetailedDto
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public Shift Shift { get; set; }
        public int Pages { get; set; }
        public int Associations { get; set; }
        public int Ads { get; set; }
        public int TimeSpentOnAds { get; set; }
        public int userId { get; set; }
    }
}