export default function loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        type="button"
        className="bg-indigo-500 text-white py-2 px-4 flex items-center space-x-2 rounded-lg"
        disabled
      >
        <svg
          className="animate-spin h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          />
        </svg>
        <span>Processing...</span>
      </button>
    </div>
  );
}
