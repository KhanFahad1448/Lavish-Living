import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Eye,
  Phone,
  Mail,
  MessageCircle,
  Trash2,
  Loader2,
  X,
  MapPin,
} from "lucide-react";

import { api } from "../../lib/api";
import { useAdmin } from "../../context/AdminContext";

export default function InquiryManager() {
  const {
    inquiries,
    setInquiries,
    loading,
    refreshDashboard,
  } = useAdmin();
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  async function updateStatus(id, status) {
    try {
      await api.patch(`/inquiries/${id}/status`, {
        status,
      });

      setInquiries((prev) =>
        prev.map((item) =>
          item._id === id
            ? { ...item, status }
            : item
        )
      );

      if (
        selectedInquiry &&
        selectedInquiry._id === id
      ) {
        setSelectedInquiry((prev) => ({
          ...prev,
          status,
        }));
      }

      toast.success("Status updated");
      refreshDashboard();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't update status");
    }
  }

  async function deleteInquiry(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/inquiries/${id}`);

      setInquiries((prev) =>
        prev.filter((item) => item._id !== id)
      );

      if (
        selectedInquiry &&
        selectedInquiry._id === id
      ) {
        setSelectedInquiry(null);
      }

      toast.success("Inquiry deleted successfully");
      refreshDashboard();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't delete inquiry");
    }
  }

  function statusColor(status) {
    switch (status) {
      case "contacted":
        return "bg-blue-100 text-blue-700";

      case "converted":
        return "bg-green-100 text-green-700";

      case "closed":
        return "bg-gray-200 text-gray-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-10 sm:py-20">
        <Loader2 size={20} className="animate-spin text-brass sm:size-6" />
        <p className="mt-2 text-[11px] text-ink/60 sm:text-sm">
          Loading inquiries...
        </p>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="font-display text-lg font-semibold tracking-tight text-emerald-deep sm:text-4xl sm:font-normal sm:tracking-normal">
          Customer Inquiries
        </h1>

        <p className="mt-0.5 text-[11px] text-ink/60 sm:mt-2 sm:text-base">
          {inquiries.length} inquiries received
        </p>

        {inquiries.length === 0 ? (
          <div className="mt-4 rounded-lg bg-white p-6 text-center text-[11px] text-ink/60 shadow-soft sm:mt-10 sm:rounded-2xl sm:p-16 sm:text-base">
            No inquiries yet.
          </div>
        ) : (
          <div className="mt-4 sm:mt-8">

            {/* ========================================= */}
            {/* MOBILE — compact card list */}
            {/* ========================================= */}

            <div className="space-y-1.5 sm:hidden">
              {inquiries.map((item) => (
                <div
                  key={item._id}
                  className="rounded-md bg-white p-2 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-[11px] font-semibold text-emerald-deep">
                        {item.name}
                      </h4>
                      <p className="truncate text-[9px] text-ink/55">
                        {item.phone}
                      </p>
                      <p className="mt-0.5 truncate text-[9px] text-ink/55">
                        {item.service || "-"} · {item.budget || "-"}
                      </p>
                    </div>

                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateStatus(item._id, e.target.value)
                      }
                      className={`shrink-0 rounded-full border-0 px-1.5 py-0.5 text-[8px] font-medium ${statusColor(
                        item.status
                      )}`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div className="mt-1.5 flex items-center justify-between gap-1.5">
                    <span className="text-[8px] text-ink/40">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>

                    <div className="flex shrink-0 gap-0.5">

                      <button
                        type="button"
                        onClick={() => setSelectedInquiry(item)}
                        title="View"
                        className="rounded-md bg-blue-50 p-1 text-blue-700 transition hover:bg-blue-100"
                      >
                        <Eye size={11} />
                      </button>

                      <a
                        href={`tel:${item.phone}`}
                        title="Call"
                        className="grid place-items-center rounded-md bg-green-50 p-1 text-green-700 transition hover:bg-green-100"
                      >
                        <Phone size={11} />
                      </a>

                      <a
                        href={`https://wa.me/${item.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noreferrer"
                        title="WhatsApp"
                        className="grid place-items-center rounded-md bg-emerald-50 p-1 text-emerald-700 transition hover:bg-emerald-100"
                      >
                        <MessageCircle size={11} />
                      </a>

                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          title="Email"
                          className="grid place-items-center rounded-md bg-amber-50 p-1 text-amber-700 transition hover:bg-amber-100"
                        >
                          <Mail size={11} />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => deleteInquiry(item._id)}
                        className="rounded-md bg-red-50 p-1 text-red-600 transition hover:bg-red-100"
                        title="Delete"
                      >
                        <Trash2 size={11} />
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ========================================= */}
            {/* DESKTOP — original table */}
            {/* ========================================= */}

            <div className="hidden overflow-hidden rounded-2xl bg-white shadow-soft sm:block">
              <table className="w-full">
                <thead className="bg-cream">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Phone</th>
                    <th className="p-4 text-left">Service</th>
                    <th className="p-4 text-left">Budget</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {inquiries.map((item) => (
                    <tr
                      key={item._id}
                      className="border-t"
                    >
                      <td className="p-4 font-medium">
                        {item.name}
                      </td>

                      <td className="p-4">
                        {item.phone}
                      </td>

                      <td className="p-4">
                        {item.service || "-"}
                      </td>

                      <td className="p-4">
                        {item.budget || "-"}
                      </td>

                      <td className="p-4">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(
                              item._id,
                              e.target.value
                            )
                          }
                          className={`rounded-full px-3 py-1 text-sm border-0 ${statusColor(
                            item.status
                          )}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>

                      <td className="p-4">
                        {new Date(
                          item.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td className="p-4">
                        <div className="flex justify-center gap-3">

                          <button
                            type="button"
                            onClick={() => setSelectedInquiry(item)}
                            title="View"
                          >
                            <Eye size={18} />
                          </button>

                          <a
                            href={`tel:${item.phone}`}
                            title="Call"
                          >
                            <Phone size={18} />
                          </a>

                          <a
                            href={`https://wa.me/${item.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            title="WhatsApp"
                          >
                            <MessageCircle size={18} />
                          </a>

                          {item.email && (
                            <a
                              href={`mailto:${item.email}`}
                              title="Email"
                            >
                              <Mail size={18} />
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={() => deleteInquiry(item._id)}
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {selectedInquiry && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center"
            onClick={() => setSelectedInquiry(null)}
          >

            <div
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-xl bg-white p-3.5 sm:rounded-3xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex items-center justify-between">

                <h2 className="font-display text-base font-semibold text-emerald-deep sm:text-3xl sm:font-normal">
                  Inquiry Details
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedInquiry(null)
                  }
                  className="grid h-7 w-7 place-items-center rounded-full transition hover:bg-gray-100 sm:h-9 sm:w-9"
                >
                  <X size={16} className="sm:hidden" />
                  <X size={22} className="hidden sm:block" />
                </button>

              </div>

              <div className="mt-3 space-y-2 text-[11px] sm:mt-8 sm:space-y-4 sm:text-base">

                <p>
                  <strong>Name:</strong>{" "}
                  {selectedInquiry.name}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedInquiry.phone}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {selectedInquiry.email || "-"}
                </p>

                <p>
                  <strong>Location:</strong>{" "}
                  {selectedInquiry.location || "-"}
                </p>

                <p>
                  <strong>Service:</strong>{" "}
                  {selectedInquiry.service || "-"}
                </p>

                <p>
                  <strong>Budget:</strong>{" "}
                  {selectedInquiry.budget || "-"}
                </p>

                <p>
                  <strong>Project Type:</strong>{" "}
                  {selectedInquiry.projectType || "-"}
                </p>

                <div className="flex items-center gap-2 sm:gap-4">
                  <strong>Status:</strong>

                  <select
                    value={selectedInquiry.status}
                    onChange={(e) =>
                      updateStatus(
                        selectedInquiry._id,
                        e.target.value
                      )
                    }
                    className="rounded-md border p-1 text-[11px] sm:rounded-lg sm:p-2 sm:text-base"
                  >
                    <option value="new">New</option>
                    <option value="contacted">
                      Contacted
                    </option>
                    <option value="converted">
                      Converted
                    </option>
                    <option value="closed">
                      Closed
                    </option>
                  </select>
                </div>

                <div>
                  <strong>Message:</strong>

                  <div className="mt-1 rounded-md bg-gray-100 p-2 sm:mt-2 sm:rounded-xl sm:p-4">
                    {selectedInquiry.message ||
                      "No message"}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}
      </div>
    </>
  );
}