using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository { get; }

        IMessageRepository MessageRepository { get; }

        ILikesRepository LikesRepository { get; }

        Task<bool> Complete(); // This is goind the method that will save all of our changes.

        bool HasChanges(); // See EntityFramework has been tracking or has any changes
    }
}