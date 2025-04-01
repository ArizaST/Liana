using Microsoft.AspNetCore.Mvc;
using ProductoBussines;
using ProductoDomain;

namespace ProductoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DetalleTrajesController : ControllerBase
    {

        private readonly ILogger<DetalleTrajesController> _logger;

        [HttpGet("GetDetallesFromFile")]
        public IEnumerable<DetalleTrajes> GetDetallesFromFile()
        {
            ProductoBussines.ProductoBussines ProductoBussines = new ProductoBussines.ProductoBussines();
            return ProductoBussines.getDetallesFromFile();
        }
        public DetalleTrajesController(ILogger<DetalleTrajesController> logger)
        {
            _logger = logger;
        }
    }
}