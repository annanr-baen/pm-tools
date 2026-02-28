import MainSidebarX from "@/components/MainSidebar";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-300 py-4 pr-4">
      <MainSidebarX />
      <MainContent />
    </div>
  );
}
