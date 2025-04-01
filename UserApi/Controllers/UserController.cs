using Microsoft.AspNetCore.Mvc;
using UserDomain;

namespace UserAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;

        [HttpGet("GetUsersFromFile")]
        public IEnumerable<User> GetUsersFromFile()
        {
            UserBusiness.UserBusiness userBusiness = new UserBusiness.UserBusiness();
            return userBusiness.getUsersFromFile();
        }
        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }
 
        [HttpPost("RegisterUserInFile")]
        public IEnumerable<User> RegisterUserInFile(User user)
        {
            UserBusiness.UserBusiness userBusiness = new UserBusiness.UserBusiness();
            return userBusiness.registerUser(user);
        }
    }
}