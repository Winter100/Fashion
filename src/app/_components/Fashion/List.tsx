import Item from "./Item";

export default function List() {
  const DUMMY = [
    { title: "1" },
    { title: "12" },
    { title: "13" },
    { title: "14" },
    { title: "15" },
  ];
  return (
    <ul className=" grid grid-cols-3 gap-10">
      {DUMMY.map((item) => (
        <Item key={item.title} />
      ))}
    </ul>
  );
}
