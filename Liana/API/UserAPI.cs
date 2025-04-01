using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;
using Liana.Models;

namespace Liana.API
{

    public class UserAPI
    {
        public async Task<User> GetUsersRequest()
        {
            String result = string.Empty;

            try
            {
                string url = "https://localhost:7056/User/";
                string api = "GetUser";
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
            //List<User> oUsers = new List<User>();
            //oUsers = (List<User>)JsonConvert.DeserializeObject(result, typeof(List<User>));
            User oUser = new User();
            oUser = (User)JsonConvert.DeserializeObject(result, typeof(User));
            return oUser;
        }

        public async Task<List<User>> GetUsersFromFileRequest()
        {
            String result = string.Empty;

            try
            {
                string url = "https://localhost:7056/User/";
                string api = "GetUsersFromFile";
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
            List<User> oUsers = new List<User>();
            oUsers = (List<User>)JsonConvert.DeserializeObject(result, typeof(List<User>));

            return oUsers;
        }


        public async Task<List<User>> CreateUserRequestAsync(User user)
        {
            String result = string.Empty;

            try
            {
                string url = "https://localhost:7056/User/";
                string api = "RegisterUserInFile";
                using (HttpClient client = new HttpClient())
                {

                    string jsonString = JsonConvert.SerializeObject(user, Formatting.Indented);
                    StringContent content = new StringContent(jsonString, Encoding.UTF8, "application/json");
                    client.BaseAddress = new Uri(url);
                    client.DefaultRequestHeaders.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var response = await client.PostAsync(api, content);
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
            List<User> oUsers = new List<User>();
            oUsers = (List<User>)JsonConvert.DeserializeObject(result, typeof(List<User>));
            return oUsers;
        }
    }
}
