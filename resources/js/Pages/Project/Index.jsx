import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";

export default function Project({ auth, projects }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className=" py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* <pre>{JSON.stringify(projects)}</pre> */}
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="bg-gray-50">
                <tr className="text-nowrap">
                  <th className="px-3 py-2">ID</th>
                  <th className="px-3 py-2">Image</th>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">status</th>
                  <th className="px-3 py-2">Created Date</th>
                  <th className="px-3 py-2">Due Date</th>
                  <th className="px-3 py-2">Created By</th>
                  <th className="px-3 py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {projects.data?.map((project) => (
                  <tr
                    key={project.id}
                    className="bg-white border-b dark:bg_gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={project.image_path}
                        className="image-full rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.created_at}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.due_date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {project.createdBy.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        href={route("projects.edit", project.id)}
                        className="  hover:underline btn m-1  px-4 py-2 cursor-pointer bg-cyan-700 text-gray-100 rounded-md btn-primary"
                      >
                        Edit
                      </Link>
                      <Link
                        href={route("projects.destroy", project.id)}
                        className="hover:underline btn m-1 px-4 py-2 cursor-pointer bg-pink-700 text-gray-100 rounded-md btn-primary"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination links={projects.meta.links} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
