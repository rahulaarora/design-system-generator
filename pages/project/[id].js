import Navbar from "@/components/Home/Navbar";
import AddProperties from "@/components/Project/AddProperties";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useState } from "react";

const project = ({ data, projectName }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [properties, setProperties] = useState(
    data?.properties || defaultProperties
  );

  return (
    <>
      <Navbar />
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">{projectName}</h1>
        <button className="btn btn-outline btn-info hover:!text-white">
          Save Project
        </button>
      </div>
      <AddProperties properties={properties} setProperties={setProperties} />
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
      projectName: data.project.title,
    },
  };
}

export default project;

const defaultProperties = {
  colors: {},
  radius: {},
  spacing: {},
};
