import React from "react";

const OnePage = () => {
  return (
    <div>
      <Link href="/one/two">Two Page</Link>
      <Link href="/one/(.)two">Same Level Two Interceptor</Link>
    </div>
  );
};

export default OnePage;
