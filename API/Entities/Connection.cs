namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
        }

        public Connection(string connectionId, string username)
        {
            ConnectionId = connectionId;
            Username = username;
        }

        public string ConnectionId { get; set; } // When giving the name + Id, Entity Framework is going to automatically consider this the primary key

        public string Username { get; set; }
    }
}