using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;
using System.Text;
using UserDomain;

namespace UserDB
{
    public class UserDB {
        private string sPath = @"C:\Users\Admin\Documents\Downloads\LianaFinal\LianaFinal\Liana\UserFile.csv";
        public IEnumerable<User> getUsersFromFile()
        {

            using var reader = new StreamReader(sPath);

            var csvConfig = new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                Delimiter = ",",
                HasHeaderRecord = false
            };

            using var csv = new CsvReader(reader, csvConfig);
            csv.Context.RegisterClassMap<UserMap>();
            return csv.GetRecords<User>().ToList();
        }

        public IEnumerable<User> registerUser(User user)
        {

            using (StreamWriter sw = new StreamWriter(sPath, true, new UTF8Encoding(true)))
            using (CsvWriter cw = new CsvWriter(sw, CultureInfo.InvariantCulture))
            {
                //cw.WriteHeader<EmployeeModel>();
                //cw.NextRecord();
                //foreach (EmployeeModel emp in employeeModels)
                //{
                //    cw.WriteRecord<EmployeeModel>(emp);
                //    cw.NextRecord();
                //}
                cw.WriteRecord<User>(user);
                cw.NextRecord();
            }
            return getUsersFromFile();
        }
    }

    public class UserMap : ClassMap<User>
    {
        public UserMap()
        {
            Map(p => p.UserName).Index(0);
            Map(p => p.Password).Index(1);
            Map(p => p.FSName).Index(2);
            Map(p => p.LastName).Index(3);
            Map(p => p.Email).Index(4);
            Map(p => p.Phone).Index(5);
            Map(p => p.DOBirthday).Index(6); 
        }
    }

}