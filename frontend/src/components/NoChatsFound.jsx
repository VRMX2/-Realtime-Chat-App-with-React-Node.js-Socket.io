import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10">
        <MessageCircleIcon className="w-8 h-8 text-cyan-400" />
      </div>
      <div>
        <h4 className="mb-1 font-medium text-slate-200">No conversations yet</h4>
        <p className="px-6 text-sm text-slate-400">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm transition-colors rounded-lg text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;