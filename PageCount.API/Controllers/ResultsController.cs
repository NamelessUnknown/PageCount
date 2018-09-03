using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PageCount.API.Dtos;
using PageCount.API.Interfaces;
using PageCount.API.Model;

namespace PageCount.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ResultsController : ControllerBase
    {
        private readonly IResultsRepository _repo;
        private readonly IMapper _mapper;

        public ResultsController(IResultsRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetResult(int id){
            var result = await _repo.GetResult(id);
            var resultToReturn = _mapper.Map<ResultsForDetailedDto>(result);
            return Ok(resultToReturn);
        }
        
        [HttpPost("add")]
        public async Task<IActionResult> AddPageCount(int userId, Result result){
            int ticket = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var TimeStamp = DateTime.Now.Hour;
            if(TimeStamp>=7 && TimeStamp < 15)
                result.Shift = Shift.Morning;
            else if(TimeStamp>=15 && TimeStamp < 23)
                result.Shift = Shift.Afternoon;
            else result.Shift = Shift.Night;


            result.UserId = ticket;
            result.DateAdded = DateTime.Now.Date;

            if(await _repo.ResultAlreadyExists(result.UserId, result.DateAdded))
            return BadRequest("Page count already exists");


            _repo.Add(result);
            return StatusCode(201);
        }

        [HttpGet]
        public async Task<IActionResult> GetResults() {
            var results = await _repo.GetResults();
            return Ok(results);
        }
//do naprawy:
        [HttpGet("range/{datetime}")]
        public async Task<IActionResult> GetResultsByDate(string datetime){
            
            var resultsByDate = await _repo.GetResultsByDate(datetime);
            return Ok(resultsByDate);
        }
    }
}