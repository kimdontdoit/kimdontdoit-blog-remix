import { Outlet } from "remix";

export default function PostsRoute() {
  return (
    <div>
      <h1>Blog posts</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
