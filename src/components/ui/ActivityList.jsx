import { CiCalendar } from "react-icons/ci";

function ActivityList({ activity, index, setActiveIndex, activeIndex }) {
  function handleActiveIndex() {
    setActiveIndex(index);
  }

  return (
    <div
      className={`flex gap-2 border-2 p-4  mb-5 hover:border-green-500 rounded-md transition-all text-base items-center text-green-700 hover:shadow-md ${index === activeIndex ? "shadow-md border-green-500 " : "border-green-200"}`}
      onClick={handleActiveIndex}
    >
      <CiCalendar className="text-xl" />
      <p>{activity.date}</p>
    </div>
  );
}

export default ActivityList;
