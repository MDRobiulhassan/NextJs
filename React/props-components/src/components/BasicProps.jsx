import React, { useState } from "react";

function Button({
  text,
  color = "primary",
  size = "medium",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-medium transition-all duration-300

        ${
          size === "small"
            ? "px-4 py-2 text-sm"
            : size === "large"
              ? "px-8 py-3 text-lg"
              : "px-6 py-2 text-base"
        }

        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${
          color === "secondary"
            ? "bg-gray-500 hover:bg-gray-600 text-white"
            : ""
        }
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${
          color === "success"
            ? "bg-green-500 hover:bg-green-600 text-white"
            : ""
        }

        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:scale-105"
        }
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="rounded-xl bg-white p-8 shadow-2xl">
      <h2 className="mb-4 text-3xl font-bold text-gray-800">Basic Props</h2>

      <p className="mb-8 text-gray-600">
        This example demonstrates how different props can change the appearance
        and behaviour of a reusable React button component.
      </p>

      {/* Different Colours */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Different Colours
        </h3>

        <p className="mb-4 text-gray-600">
          Button Clicks: <span className="font-bold">{clickCount}</span>
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>

      {/* Different Sizes */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-800">
          Different Sizes
        </h3>

        <div className="flex flex-wrap gap-4">
          <Button
            text="Small"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Medium"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Large"
            color="success"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          />

          <Button
            text="Disabled"
            color="danger"
            disabled
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
