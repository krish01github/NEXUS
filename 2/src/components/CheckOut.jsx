import { useSelector } from "react-redux";

export default function CheckOut() {
  const val = useSelector(state => state.cartSlice.item);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Checkout Items
      </h1>

      <div className="space-y-4">
        {val.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold text-gray-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
