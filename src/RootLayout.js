import { Link, Outlet } from "react-router";
 
export function RootLayout() {
  return (
    <div>
      <header>
        <p>TenSci</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/proposals">Proposals</Link>
        </nav>
      </header>
 
      <main>
        <Outlet />
      </main>
 
      <footer>
        <p>TenSci</p>
      </footer>
    </div>
  );
}