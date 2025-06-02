import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Scholarship Finder</h1>
      <Link to="/admin/dashboard">
        <button>Go to Admin Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;
