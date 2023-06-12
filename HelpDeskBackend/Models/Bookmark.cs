using System;
using System.Collections.Generic;

namespace HelpDeskBackend.Models;

public partial class Bookmark
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int TicketId { get; set; }

    public virtual Ticket? Ticket { get; set; }

    public virtual User? User { get; set; }
}
