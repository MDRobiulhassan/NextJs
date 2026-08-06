import React from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      <img
        src={user.avatar}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />

      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>

      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full ${theme.badgeBg}`}
      >
        {user.role}
      </span>

      <p className="mt-2">Status: {user.status}</p>

      {user.stats && (
        <div className="mt-4 space-y-2">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-1">
              <span className="capitalize">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-6">
        <button
          className={`px-4 py-2 rounded ${actions.primary.className}`}
          onClick={actions.primary.onClick}
        >
          {actions.primary.label}
        </button>

        <button
          className={`px-4 py-2 rounded ${actions.secondary.className}`}
          onClick={actions.secondary.onClick}
        >
          {actions.secondary.label}
        </button>
      </div>
    </div>
  );
}

function ComplexProps() {
  const users = [
    {
      user: {
        name: "John Doe",
        email: "johndoe@gmail.com",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 50,
          followers: 1200,
          following: 300,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("View John's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Send Message",
          onClick: () => alert("Send message to John"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Jane Smith",
        email: "jane@gmail.com",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        role: "Moderator",
        status: "Busy",
        stats: {
          articles: 85,
          likes: 3200,
          comments: 980,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-emerald-100",
        textColor: "text-gray-800",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("View Jane's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Follow",
          onClick: () => alert("Follow Jane"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-2xl font-bold">User Profile Cards</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {users.map((userData, index) => (
          <UserProfileCard key={index} {...userData} />
        ))}
      </div>
    </div>
  );
}

export default ComplexProps;
