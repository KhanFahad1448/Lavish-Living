import {
  LayoutDashboard,
  Images,
  MessageSquare,
  PlusCircle,
  Star,
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
    {
      id: "reviews",
      label: "Reviews",
      icon: Star,
    },
  ];

  return (
    <>

      {/* ========================================= */}
      {/* Mobile — horizontal scrollable tab bar */}
      {/* ========================================= */}

      <aside className="sticky top-0 z-20 -mx-4 flex gap-1.5 overflow-x-auto rounded-none bg-white px-4 py-2.5 shadow-soft lg:hidden">

        {menus.map((item) => {
          const Icon = item.icon;
          const active = page === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                active
                  ? "bg-gradient-luxe text-brass"
                  : "text-ink/55 hover:bg-cream"
              }`}
            >
              <Icon size={14} />
              {item.label}
            </button>
          );
        })}

      </aside>

      {/* ========================================= */}
      {/* Desktop — compact vertical sidebar */}
      {/* ========================================= */}

      <aside className="hidden rounded-xl border border-emerald/10 bg-white p-4 shadow-soft lg:block">

        <h2 className="font-display text-lg font-semibold tracking-tight text-emerald-deep">
          Lavish Living
        </h2>

        <p className="mt-0.5 text-xs text-ink/50">
          Admin Panel
        </p>

        <div className="mt-4 space-y-1">

          {menus.map((item) => {
            const Icon = item.icon;
            const active = page === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                  active
                    ? "bg-gradient-luxe text-brass"
                    : "text-ink/65 hover:bg-cream"
                }`}
              >
                <Icon size={15} />
                {item.label}
              </button>
            );
          })}

        </div>

      </aside>

    </>
  );
}