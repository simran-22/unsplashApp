import { ArrowDownToLine, Heart, Plus } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../../features/photoSlice";

const Gallory = () => {
  const disptach = useDispatch();
  const photos = useSelector((state) => state.photos.photos);

  useEffect(function () {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${
        import.meta.env.VITE_MAIN_API
      }`
    )
      .then(function (data) {
        return data.json();
      })
      .then(function (respones) {
        disptach(setPhotos(respones));
      });
  }, []);

  return (
    <div className="p-4 relative ">
      <div className="columns-3 space-y-5 relative">
        {photos.map(function (item, index) {
          return (
            <div className="relative group " key={index}>
              <div className="bg-zinc-300">
                <img className="object-cover " src={item.urls.regular} alt="" />
              </div>
              <div className=" bg-gradient-to-b from-neutral-900/55 to-blue-500/5 transition-all	 p-4 absolute bottom-0  left-0 right-0  opacity-0 flex flex-col justify-between top-0 group-hover:opacity-100">
                <div className="topIcon justify-end flex gap-2">
                  <a href="#">
                    {" "}
                    <Heart className="bg-slate-200 rounded-sm p-1 " />
                  </a>
                  <a href="#">
                    {" "}
                    <Plus className="bg-slate-200 rounded-sm p-1" />
                  </a>
                </div>
                <div className="flex justify-between items-center	">
                  <div className="flex justify-between items-center	gap-2">
                    <img
                      className="w-10 h-10 rounded-full object-cover "
                      src={item.user.profile_image.small}
                      alt=""
                    />
                    <p className="text-white	">
                      {item.user.first_name} {item.user.last_name}
                    </p>
                  </div>
                  <div>
                    <a href="#">
                      <ArrowDownToLine className="bg-slate-300 rounded-sm p-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallory;
