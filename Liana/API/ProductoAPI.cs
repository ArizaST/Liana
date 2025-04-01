using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;
using Liana.Models;

namespace Liana.API
{

    public class ProductoAPI
    {

        public async Task<List<DetalleTrajes>> GetDetallesFromFileRequest()
        {
            String result = string.Empty;

            try
            {
                string url = "https://localhost:7013/DetalleTrajes/";
                string api = "GetDetallesFromFile";
                using (HttpClient client = new HttpClient())
                {

                    client.BaseAddress = new Uri(url);
                    client.DefaultRequestHeaders.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var response = await client.GetAsync(api);
                    result = response.Content.ReadAsStringAsync().Result;

                }
            }
            catch (Exception e)
            {
                return null;
            }
            if (result.Contains("HTTP ERROR 500"))
            {
                return null;
            }
            List<DetalleTrajes> oDetalles = new List<DetalleTrajes>();
            oDetalles = (List<DetalleTrajes>)JsonConvert.DeserializeObject(result, typeof(List<DetalleTrajes>));

            return oDetalles;
        }

    }
}
