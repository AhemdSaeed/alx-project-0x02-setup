// pages/users.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold text-green-600">Users</h1>
        {loading ? (
          <p className="text-gray-600">Loading users...</p>
        ) : (
          users.map((user) => <UserCard key={user.id} {...user} />)
        )}
      </div>
    </div>
  );
}
