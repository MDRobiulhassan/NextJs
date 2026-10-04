import React from "react";

const DocsPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Docs Page {slug}</h1>
    </div>
  );
};

export default DocsPage;
