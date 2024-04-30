import AuthProtectedRoute from "@/app/_components/Protected/AuthProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthProtectedRoute>{children}</AuthProtectedRoute>;
}
