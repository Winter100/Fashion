import LoginInfo from "@/app/_components/My/LoginInfo";
import RecordInfo from "@/app/_components/My/RecordInfo";
import UserInfo from "@/app/_components/My/UserInfo";

export default function page() {
  return (
    <div className="m-auto max-w-3xl">
      <h1 className="text-center text-5xl">마이페이지</h1>

      <div className=" h-full">
        <UserInfo />
        <RecordInfo />
        <LoginInfo />
      </div>
    </div>
  );
}
