export default function MainNavBar() {
  return (
    <div className="m-auto mt-10 flex max-w-screen-lg justify-between ">
      <header>
        <h2 className="text-7xl font-bold">오늘 어때?</h2>
      </header>
      <nav className="flex items-center border-2">
        <ul className="flex  gap-7 text-2xl font-black">
          <li>오늘 어때?</li>
          <li>내일 어때?</li>
          <li>이거 어때?</li>
        </ul>
      </nav>
    </div>
  );
}
