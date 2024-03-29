import { Link } from "@inertiajs/react";
export default function Pagination({ links }) {
  console.log(links);
  return (
    <nav className="text-center mt-4 ">
      {/* {JSON.stringify(links)} */}
      {links.map((link) => {
        return (
          <Link
            href={link?.url}
            dissabled={link.active}
            className={`px-4 py-2 text-sm font-medium hover:bg-blue-300 ${
              link.active ? " bg-blue-300 cursor-not-allowed" : " bg-gray-200"
            } ${!link.url ? " bg-gray-400" : ""} text-slate-800 m-1 `}
            dangerouslySetInnerHTML={{ __html: link.label }}
          ></Link>
        );
      })}
    </nav>
  );
}
