import Chatbox from "@/components/Chatbox";
import { LogoutButton } from "@/components/LogoutButton";

function Page() {
  return (
    <div className="flex justify-end p-2 items-end min-h-[90dvh] bg-gray-50 dark:bg-gray-900">
      <Chatbox />
    </div>
  );
}
export default Page;
