using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskBackend.Models;

public partial class HelpDeskContext : DbContext
{
    public HelpDeskContext()
    {
    }

    public HelpDeskContext(DbContextOptions<HelpDeskContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Bookmark> Bookmarks { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=HelpDesk;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bookmark>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Bookmark");

            entity.HasOne(d => d.Ticket).WithMany()
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Bookmark__Ticket__4D94879B");

            entity.HasOne(d => d.User).WithMany()
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Bookmark__UserId__4CA06362");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ticket__3213E83F43475F43");

            entity.ToTable("Ticket");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description).HasMaxLength(100);
            entity.Property(e => e.IsClosed).HasColumnName("isClosed");
            entity.Property(e => e.Resolution).HasMaxLength(300);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3213E83FF3360522");

            entity.ToTable("User");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Name).HasMaxLength(25);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
