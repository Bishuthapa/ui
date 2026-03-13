export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "24px" }}>UI Demo</h1>
      <p style={{ marginBottom: "16px" }}>
        This is a UI demo for the <code>service</code> and <code>course</code> pages.
      </p>
      <ul style={{ display: "flex", gap: "16px", paddingLeft: 0, listStyle: "none" }}>
        <li>
          <a href="/service" style={{ color: "#1253ED", textDecoration: "underline" }}>
            Service Page
          </a>
        </li>
        <li>
          <a href="/course" style={{ color: "#1253ED", textDecoration: "underline" }}>
            Course Page
          </a>
        </li>
      </ul>
      </main>
  );
}
