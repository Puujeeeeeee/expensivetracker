import Link from "next/link";

function Wait() {
  return (
    <Link
      href={{
        pathname: "/Currency",
      }}
    >
      <div className="w-[100vw] h-[100vh] bg-white">
        <div className="flex flex-col justify-center items-center gap-[40px] p-[500px]">
          <p className="text-5xl text-black font-semibold">Geld</p>
          <span className="loading loading-lg loading-spinner text-info "></span>
          <p className="text-black">Түр хүлээнэ үү</p>
        </div>
      </div>
    </Link>
  );
}
export default Wait;
