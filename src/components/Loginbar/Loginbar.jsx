const Loginbar = () => {
  return (
    <div className=" gap-4 items-center px-4 hidden lg:flex ">
      <a href="#">Login</a>
      <button className="p-1 px-2 border rounded-md shadow-sm border-gray-300	">
        Submit a Photo
      </button>
      <a href="#">
        <i className="ri-menu-line"></i>
      </a>
    </div>
  );
};

export default Loginbar;
