import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function HomePage() {
  return (
    <div>
      <Loader />
      <button
        className="button buttonPrimary"
        onClick={() => toast.success("Hello!")}
      >
        Toast Me
      </button>
    </div>
  );
}
