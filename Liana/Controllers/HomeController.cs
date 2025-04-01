using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Liana.API;
using Liana.Models;

namespace Liana.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PaginaMujeres()
        {
            return View();
        }

        public IActionResult CatalogoSacos()
        {
            return View();
        }

        public IActionResult CatalogoPantalones()
        {
            return View();
        }

        public IActionResult DetallesSacos()
        {
            return View();
        }

        public IActionResult DTEElegante()
        {
            return View();
        }

        public IActionResult PaginaHombres()
        {
            return View();
        }

        public IActionResult CatalogoTrajes()
        {
            return View();
        }

        public IActionResult CatalogoChaquetas()
        {
            return View();
        }

        public IActionResult DetallesTrajes2()
        {
            return View();
        }
        public IActionResult DTEEleganteH()
        {
            return View();
        }

        public IActionResult DetallesChaquetas()
        {
            return View();
        }

        public IActionResult DetallesChaquetas2()
        {
            return View();
        }
        public IActionResult CatalogoBolsos()
        {
            return View();
        }
        public IActionResult DetallesBolsos()
        {
            return View();
        }
        public IActionResult DetallesBolsos2()
        {
            return View();
        }
        public IActionResult CatalogoJoyeria()
        {
            return View();
        }
        public IActionResult DetallesJoyeria()
        {
            return View();
        }
        public IActionResult PaginaInicioSesion()
        {
            return View();
        }
      
        public IActionResult Pagina3()
        {
            return View();
        }

        public async Task<IActionResult> PaginaRegistro()
        {
            UserAPI repository = new UserAPI();
            User oUser = new User();
            oUser = await repository.GetUsersRequest();

            List<User> oUsers = new List<User>();
            oUsers = await repository.GetUsersFromFileRequest();
            return View(oUser);
        }

        [HttpPost]
        public async Task<ActionResult> CreateUser(User user)
        {
            UserAPI repository = new UserAPI();
            List<User> oUsers = new List<User>();
            oUsers = await repository.CreateUserRequestAsync(user);
            return View("UserList", oUsers);

        }
        public async Task<IActionResult> UserList()
        {
            UserAPI repository = new UserAPI();
            List<User> oUsers = new List<User>();
            oUsers = await repository.GetUsersFromFileRequest();

            return View(oUsers);
        }

        public async Task<IActionResult> DetallesTrajes()
        {
            ProductoAPI repository = new ProductoAPI();
            List<DetalleTrajes> oDetalles = new List<DetalleTrajes>();
            oDetalles = await repository.GetDetallesFromFileRequest();

            return View(oDetalles[1]);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}