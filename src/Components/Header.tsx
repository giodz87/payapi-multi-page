import useUserContext from "../context";

export default function Header() {
  const context = useUserContext();
  return (
    <header
      className="w-full flex items-center justify-center relative
     
    "
    >
      <div className=" w-[375px] flex flex-row items-center justify-between py-6  px-5 ">
        <img src="./assets/shared/desktop/logo.svg" alt="" />
        <img
          className=" z-50"
          onClick={() => context.setMenu(!context.menu)}
          src={` ${
            context.menu
              ? " public/assets/shared/mobile/close.svg"
              : "./assets/shared/mobile/menu.svg"
          }  `}
          alt=""
        />
      </div>
    </header>
  );
}
