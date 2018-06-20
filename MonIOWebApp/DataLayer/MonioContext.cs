using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;
using mon_io_app.Models;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace mon_io_app.DataLayer
{
    public class MonioContext : DbContext
    {
        protected string _connString;

        #region DbSets
        public DbSet<Budget> Budget { get; set; }

        public DbSet<Budget_Income> Budget_Income { get; set; }

        public DbSet<Budget_ExpenseCategory> Budget_ExpenseCategory { get; set; }

        public DbSet<Expense> Expense { get; set; }

        public DbSet<Expense_Bill> Expense_Bill { get; set; }

        public DbSet<SavingsCategory_Child> SavingsCategory_Child { get; set; }

        public DbSet<SavingsCategory_Main> SavingsCategory_Main { get; set; }

        public DbSet<SavingsCategory_BalanceTransfer> SavingsCategory_BalanceTransfer { get; set; }

        public DbSet<User> User { get; set; }

        #endregion

        public MonioContext(DbContextOptions options) : base(options)  {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            foreach(var property in modelBuilder.Model.GetEntityTypes().SelectMany(t => t.GetProperties()).Where(p => p.Name == "ID")) {
                property.Relational().ColumnType = "bigint";
            }

            foreach(var property in modelBuilder.Model.GetEntityTypes().SelectMany(t => t.GetProperties()).Where(p => p.Name == "IsDeleted")) {
                property.Relational().DefaultValue = false;
            }

            modelBuilder.Entity<Budget>(entity =>
            {
                entity.HasKey(e => e.ID);
            });
            modelBuilder.Entity<Budget>()
                .HasOne(e => e.User)
                .WithMany(f => f.Budgets)
                .IsRequired();

            modelBuilder.Entity<Budget_Income>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(45);
                entity.Property(e => e.IsTaxable).HasDefaultValue(true);
            });
            modelBuilder.Entity<Budget_Income>()
                .HasOne(e => e.Budget)
                .WithMany(f => f.Budget_Incomes)
                .IsRequired();

            modelBuilder.Entity<Budget_ExpenseCategory>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(45);
                entity.Property(e => e.Type).IsRequired().HasMaxLength(25);
            });
            modelBuilder.Entity<Budget_ExpenseCategory>()
                .HasOne(e => e.SavingsCategory_Child)
                .WithMany(f => f.Budget_ExpenseCategories)
                .IsRequired();
            modelBuilder.Entity<Budget_ExpenseCategory>()
                .HasOne(e => e.OverflowExpenseCategoryTo)
                .WithMany(f => f.OverflowExpenseCategoryFrom);
            modelBuilder.Entity<Budget_ExpenseCategory>()
                .HasOne(e => e.Budget)
                .WithMany(f => f.Budget_ExpenseCategories);

            modelBuilder.Entity<Expense>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Location).IsRequired().HasMaxLength(45);
                entity.Property(e => e.Reason).HasMaxLength(45);
            });
            modelBuilder.Entity<Expense>()
                .HasOne(e => e.Budget_ExpenseCategory)
                .WithMany(f => f.Expenses)
                .IsRequired();

            modelBuilder.Entity<Expense_Bill>(entity =>
            {
                entity.HasKey(e => e.ID);
            });
            modelBuilder.Entity<Expense_Bill>()
                .HasOne(e => e.Budget_ExpenseCategory)
                .WithMany(f => f.Expense_Bills)
                .IsRequired();

            modelBuilder.Entity<SavingsCategory_Child>(entity =>
            {
                entity.HasKey(e => e.ID);
            });
            modelBuilder.Entity<SavingsCategory_Child>()
                .HasOne(e => e.SavingsCategory_Main)
                .WithMany(f => f.SavingsCategory_Children)
                .IsRequired();

            modelBuilder.Entity<SavingsCategory_Main>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(45);
            });
            modelBuilder.Entity<SavingsCategory_Main>()
                .HasOne(e => e.User)
                .WithMany(f => f.SavingsCategories)
                .IsRequired();

            modelBuilder.Entity<SavingsCategory_BalanceTransfer>(entity =>
            {
                entity.HasKey(e => e.ID);
            });
            modelBuilder.Entity<SavingsCategory_BalanceTransfer>()
                .HasOne(e => e.SavingsCategoryTo)
                .WithMany(f => f.BalanceTransfersReceived)
                .IsRequired();
            modelBuilder.Entity<SavingsCategory_BalanceTransfer>()
                .HasOne(e => e.SavingsCategoryFrom)
                .WithMany(f => f.BalanceTransfersSent)
                .IsRequired();

            modelBuilder.Entity<User>(entity => 
            {
                entity.HasKey(e => e.ID);
            });

        }

    }
}