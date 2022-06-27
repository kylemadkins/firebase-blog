import toast from "react-hot-toast";

export default function HomePage() {
  return (
    <div>
      <button
        className="button buttonPrimary"
        onClick={() => toast.success("Hello!")}
      >
        Toast Me
      </button>
    </div>
  );
}
