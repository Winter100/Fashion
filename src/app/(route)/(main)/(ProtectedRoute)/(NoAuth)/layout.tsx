import NoAuthProtectedRoute from "@/app/_components/Protected/NoAuthProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <NoAuthProtectedRoute>{children}</NoAuthProtectedRoute>;
}
