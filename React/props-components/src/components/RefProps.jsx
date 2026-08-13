import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(
  ({ label, placeholder, className = "" }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">{label}</label>

        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInput = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const focusSecondInput = () => {
    secondInput.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Ref Props</h2>

      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat
        error tempora recusandae, voluptatibus optio.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-4">Try it Out</h3>

        <CustomInput
          ref={inputRef}
          label="First Input with Ref"
          placeholder="Type something"
        />

        <CustomInput
          ref={secondInput}
          label="Second Input with Ref"
          placeholder="Type something"
        />

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={focusInput}
          >
            Focus First Input
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={focusSecondInput}
          >
            Focus Second Input
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={getInputValue}
          >
            Get First Input Value
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={clearInput}
          >
            Clear First Input
          </button>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
