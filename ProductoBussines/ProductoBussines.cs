using ProductoDomain;

namespace ProductoBussines
{
    public class ProductoBussines
    {
        public IEnumerable<DetalleTrajes> getDetallesFromFile()
        {
            ProductoDB.ProductoDB ProductoDB = new ProductoDB.ProductoDB();
            return ProductoDB.getDetallesFromFile();
        }

    }
}