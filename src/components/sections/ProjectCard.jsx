const ProjectCard = () => {
  return (
    <>
      <div
        className="  w-[32rem] overflow-hidden flex flex-col gap-5  rounded-xl"
        style={{ padding: "2rem 2rem", border: ".1rem solid gray" }}
      >
        <div className="bg-[#e2e2e2] h-56 w-52 "></div>
        <div
          className="h-1/2 w-full flex flex-col gap-2 justify-center"
          style={{ margin: "2rem 0" }}
        >
          <h2 className="text-[#ffffff] text-2xl">Title</h2>
          <p className="text-[#4e4e4e] text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolore, voluptates commodi corrupti velit fugit numquam dolores ea.
            Rem iusto repudiandae eveniet fugit alias, qui laboriosam? Maxime,
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
