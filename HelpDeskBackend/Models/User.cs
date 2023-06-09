﻿using System;
using System.Collections.Generic;

namespace HelpDeskBackend.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; set; } = new List<Bookmark>();
}
