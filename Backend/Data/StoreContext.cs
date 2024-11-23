
using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class StoreContext : DbContext
{
    // public StoreContext(DbContextOptions<StoreContext> options) : base(options)
    // {

    // }
    public StoreContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Product> Products { get; set;}
}
