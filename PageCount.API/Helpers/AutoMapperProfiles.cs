using AutoMapper;
using PageCount.API.Dtos;
using PageCount.API.Model;

namespace PageCount.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>();
            CreateMap<User,UserForDetailedDto>();
            CreateMap<Result,ResultsForDetailedDto>();
        }
    }
}