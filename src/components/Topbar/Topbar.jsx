import Divider from "../Divider/Divider";
import Loginbar from "../Loginbar/Loginbar";
import Logo from "../Logo/Logo";
import Menubar from "../Menubar/Menubar";
import Searchbar from "../SearchBar/Searchbar";

const Topbar = ({ setPhotos }) => {
  return (
    <div className="p-4 pl-5 flex gap-4 align-middle">
      <Logo />
      <Searchbar setPhotos={setPhotos} />
      <Menubar />
      <Divider direction="v" />
      <Loginbar />
    </div>
  );
};

export default Topbar;
