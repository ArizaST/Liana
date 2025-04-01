using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Text;
using ProductoDomain;

namespace ProductoDB
{
    public class ProductoDB
    {
        private string sPath = @"C:\Users\Admin\Documents\Downloads\LianaFinal\LianaFinal\Liana\DetalleFile.csv";
        public IEnumerable<DetalleTrajes> getDetallesFromFile()
        {

            using var reader = new StreamReader(sPath);

            var csvConfig = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                Delimiter = ",",
                HasHeaderRecord = false
            };

            using var csv = new CsvReader(reader, csvConfig);
            return csv.GetRecords<DetalleTrajes>().ToList();
        }
    }
}