import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {

  // ❌ user নাই → login এ পাঠাবে
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ admin না → home এ পাঠাবে
  if (user.email !== "admin@gmail.com") {
    return <Navigate to="/" />;
  }

  // ✅ admin হলে page দেখাবে
  return children;
}