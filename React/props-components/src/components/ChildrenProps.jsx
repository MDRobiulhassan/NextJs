import React from "react";

function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500",
    green: "border-green-500",
    purple: "border-purple-500",
    red: "border-red-500",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} rounded-lg bg-gray-50 p-6 shadow-md`}
    >
      {title && (
        <h3 className="mb-4 text-xl font-bold text-gray-800">{title}</h3>
      )}

      <div className="space-y-3 text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-wrap gap-4",
    grid: "grid grid-cols-1 gap-6 md:grid-cols-2",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="rounded-xl bg-white p-8 shadow-2xl">
      <h2 className="mb-4 text-3xl font-bold text-gray-800">Children Props</h2>

      <p className="mb-8 text-gray-600">
        The <code>children</code> prop allows you to pass JSX or other
        components between the opening and closing tags of a component.
      </p>

      <h3 className="mb-6 text-xl font-semibold text-gray-800">
        Card Component with Children
      </h3>

      <Container layout="grid">
        <Card title="User Profile" color="blue">
          <p>
            <strong>Name:</strong> Robiul Hassan
          </p>
          <p>
            <strong>Email:</strong> robiul@gmail.com
          </p>
          <p>
            <strong>Role:</strong> Software Engineer
          </p>
        </Card>

        <Card title="Quick Actions" color="green">
          <div className="flex flex-wrap gap-3">
            <button className="rounded bg-green-500 px-5 py-2 text-white transition hover:bg-green-600">
              Create New
            </button>

            <button className="rounded bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600">
              View All
            </button>
          </div>
        </Card>

        <Card title="Warning" color="red">
          <p>
            Your trial will expire in <strong>5 days</strong>. Upgrade now to
            continue using all premium features.
          </p>
        </Card>

        <Card title="Statistics" color="purple">
          <p>
            <strong>Projects:</strong> 12
          </p>
          <p>
            <strong>Tasks Completed:</strong> 156
          </p>
          <p>
            <strong>Success Rate:</strong> 98%
          </p>

          <button className="mt-3 rounded bg-purple-500 px-5 py-2 text-white transition hover:bg-purple-600">
            View Report
          </button>
        </Card>
      </Container>
    </section>
  );
}

export default ChildrenProps;
