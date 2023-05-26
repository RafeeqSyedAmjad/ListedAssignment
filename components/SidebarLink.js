import Image from "next/image";
import { useRouter } from "next/router";

function SidebarLink({logo,text,active}) {
    const router = useRouter();
  return (
      <div className={`flex cursor-pointer items-center justify-start text-[#ffffff] space-x-5 text-lg font-normal font-Mont ${active && "font-bold"}`} onClick={() => active && router.push("/")}>
          <Image height={17.54} width={17.54} src={logo} alt="logo"/>
        <span className="inline">{text}</span>
    </div>
  )
}

export default SidebarLink;