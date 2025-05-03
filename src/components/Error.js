import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <section className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="text-center p-4">
        <div
          className="bg-center bg-cover h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
          }}
        >
          <h1 className="text-8xl font-bold text-white drop-shadow-lg">404</h1>
        </div>

        <div className="mt-[-3rem]">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {err.statusText ||
              "Page not found or an unexpected error occurred."}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Go to Home
          </a>

          <h4 className="mt-6 text-gray-500">
            {err.status ? `${err.status} : ${err.statusText}` : ""}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Error;
