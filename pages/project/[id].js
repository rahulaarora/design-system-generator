import Navbar from "@/components/Home/Navbar";
import AddProperties from "@/components/Project/AddProperties";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

const project = ({ data }) => {
  return (
    <>
      <Navbar />
      <AddProperties data={data} />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // get project id from ctx
  const { params } = ctx;
  const { id } = params;

  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/projects/${id}`,
    {
      method: "GET",
      headers: headersList,
    }
  );

  const data = await response.json();

  if (!data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data.project.data || null,
    },
  };
}

export default project;
