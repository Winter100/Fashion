import AuthProtectedRoute from "@/app/_layouts/Protected/AuthProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthProtectedRoute>{children}</AuthProtectedRoute>;
}
