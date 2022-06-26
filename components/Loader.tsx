import theme from "../styles/theme";

export default function Loader() {
  return (
    <div className="loader">
      <style jsx>{`
        .loader {
          border: 10px solid transparent;
          border-top: 10px solid ${theme.colors.blue};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
