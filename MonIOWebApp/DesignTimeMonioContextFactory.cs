using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using mon_io_app.DataLayer;

namespace mon_io_app
{
    public class DesignTimeMonioContextFactory : IDesignTimeDbContextFactory<MonioContext>
    {
        public MonioContext CreateDbContext(string[] args)
        {
            // https://codingblast.com/entityframework-core-idesigntimedbcontextfactory/
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();
 
            var builder = new DbContextOptionsBuilder<MonioContext>();
    
            var connectionString = configuration.GetConnectionString("MonioDB");
            builder.UseMySql(connectionString);
            return new MonioContext(builder.Options);
        }
    }
}
