import Button from "./Button";

function Card({ title = "Deafult", buttonText = "Check it out", imageurl }) {
  return (
    <div className="max-w-sm mt-8 bg-white border border-gray-200 rounded-xl shadow overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <img className="w-full h-56 object-cover" src={imageurl} alt="Nature" />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nisi vitae adipisci rerum, rem necessitatibus?
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Card;
