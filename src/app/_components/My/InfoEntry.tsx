import LoginInfo from "./LoginInfo";
import RecordInfo from "./RecordInfo";
import UserInfo from "./UserInfo";

export default function InfoEntry() {
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
