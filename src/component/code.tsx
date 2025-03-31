export default function CodeInput() {
  return (
    <div className="flex justify-center gap-5">
      {[...Array(4)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-14 h-14 text-center text-lg bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      ))}
    </div>
  );
}