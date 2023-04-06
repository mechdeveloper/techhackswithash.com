import Link from "next/link";
import Layout from "../components/layout/layout";

const Custom404 = () => (
  <Layout
    pageMeta={{
      title: "Opps! Page doesnot exist...",
    }}
  >
    <div className="contianer mx-auto flex h-full flex-col items-center justify-center space-y-12 py-16">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl sm:text-6xl">404 - Page not found</h1>
        <p className="text-xl">
          We cannot find the page you are looking for...
        </p>
      </div>
      <Link href="/">
        <div className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap">
          Go back home
        </div>
      </Link>
    </div>
  </Layout>
);

export default Custom404;
