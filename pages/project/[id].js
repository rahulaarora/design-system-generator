import Navbar from "@/components/Home/Navbar";
import Project from "@/components/Project/Project";

const project = () => {
  return (
    <>
      <Navbar />
      <Project />
    </>
  );
};

export async function getServerSideProps(ctx) {
  // get project id from ctx
  const { params } = ctx;
  const { id } = params;

  return {
    props: {
      data: null,
    },
  };
}

export default project;
