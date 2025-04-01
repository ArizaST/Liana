using UserDomain;

namespace UserBusiness
{
    public class UserBusiness
    {
        public IEnumerable<User> getUsersFromFile()
        {
            UserDB.UserDB userDB = new UserDB.UserDB();
            return userDB.getUsersFromFile();
        }
        public IEnumerable<User> registerUser(User user)
        {
            UserDB.UserDB userDB = new UserDB.UserDB();
            return userDB.registerUser(user);
        }
    }
}