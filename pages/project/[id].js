import Navbar from "@/components/Home/Navbar";
import AddProperties from "@/components/Project/AddProperties";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UserComponents from "@/components/Project/UserComponents";

const project = ({ data, projectName, projectId }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [properties, setProperties] = useState(
    data?.properties || defaultProperties
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setProperties(data?.properties || defaultProperties);
  }, [data]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [componentProperties, setComponentProperties] = useState({
    colors: "white",
    radius: "0px",
    spacing: "0px",
  });

  async function saveProjectHandler() {
    const headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      id: projectId,
      data: {
        properties: properties,
        components: {},
      },
    });

    const response = await fetch("/api/projects/save", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const data = await response.json();

    if (!data.success) {
      console.error(data.error);
      toast.error("Error saving project");
      return;
    }

    toast.success("Project saved successfully");
  }

  return (
    <>
      <Navbar />
      <div className="flex gap-5 justify-center items-center mt-5">
        <h1 className="text-3xl font-bold text-center">{projectName}</h1>
        <button
          className="btn btn-outline btn-info hover:!text-white"
          onClick={saveProjectHandler}
        >
          Save Project
        </button>
      </div>
      <AddProperties
        properties={properties}
        setProperties={setProperties}
        setComponentProperties={setComponentProperties}
      />
      <UserComponents componentProperties={componentProperties} />
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
      projectId: data.project._id,
    },
  };
}

export default project;

const defaultProperties = {
  colors: {},
  radius: {},
  spacing: {},
};
