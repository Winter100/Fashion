import NoAuthProtectedRoute from "@/app/_layouts/Protected/NoAuthProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NoAuthProtectedRoute>{children}</NoAuthProtectedRoute>;
}
