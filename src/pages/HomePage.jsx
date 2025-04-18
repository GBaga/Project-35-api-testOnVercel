import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to FastFood!</h1>
      <p className="mb-6">Delicious meals ready to take away. Order now!</p>
      <Link
        to="/menu"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Browse Menu
      </Link>
    </div>
  );
}
