// ProfilePage.jsx
import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      {user ? (
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.isAdmin ? "Admin" : "Customer"}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
