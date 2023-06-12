using System;
using System.Collections.Generic;

namespace HelpDeskBackend.Models;

public partial class Ticket
{

    public int Id { get; set; }

    public string? Description { get; set; }

    public string? Resolution { get; set; }

    public bool? IsClosed { get; set; }

    [System.Text.Json.Serialization.JsonIgnore]
    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();
}
