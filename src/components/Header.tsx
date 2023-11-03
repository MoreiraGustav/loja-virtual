
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div className="flex w-full h-20 bg-white px-20 justify-between">
      <div className="flex items-center gap-2 ">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <div className="flex justify-center items-center">LOGO</div>
      <div className="flex h-full items-center justify-end  ">
       <Dropdown />
      </div>
    </div>
  );
}
