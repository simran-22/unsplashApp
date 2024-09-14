const Divider = ({ direction }) => {
  return direction === "v" ? (
    <div className=" border-l-2 border-zinc-200 hidden lg:block"></div>
  ) : (
    <div className=" border-b-2 w-full h-1 border-zinc-200 hidden lg:block"></div>
  );
};

export default Divider;
