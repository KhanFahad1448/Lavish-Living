import {
  LayoutDashboard,
  Images,
  MessageSquare,
  PlusCircle,
} from "lucide-react";

export default function AdminSidebar({
  page,
  setPage,
}) {

  const menus = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "projects",
    label: "All Projects",
    icon: Images,
  },
  {
    id: "add-project",
    label: "Add Project",
    icon: PlusCircle,
  },
  {
    id: "inquiries",
    label: "Inquiries",
    icon: MessageSquare,
  },
];

  return (
    <aside className="rounded-2xl bg-white p-6 shadow-soft">

      <h2 className="font-display text-3xl text-emerald-deep">
        Lavish Living
      </h2>

      <p className="mt-1 text-sm text-ink/60">
        Admin Panel
      </p>

      <div className="mt-8 space-y-2">

        {menus.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition
              ${
                page === item.id
                  ? "bg-gradient-luxe text-white"
                  : "hover:bg-cream"
              }`}
            >
              <Icon size={18} />

              {item.label}

            </button>
          );

        })}

      </div>

    </aside>
  );
}