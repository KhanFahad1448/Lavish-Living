import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Eye,
  Phone,
  Mail,
  MessageCircle,
  Trash2,
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
      <div className="py-20 text-center">
        Loading inquiries...
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="font-display text-4xl text-emerald-deep">
          Customer Inquiries
        </h1>

        <p className="mt-2 text-ink/60">
          {inquiries.length} inquiries received
        </p>

        {inquiries.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white p-16 text-center shadow-soft">
            No inquiries yet.
          </div>
        ) : (
          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-soft">
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
        )}
      </div>

      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="w-full max-w-xl rounded-3xl bg-white p-8">

            <div className="flex items-center justify-between">

              <h2 className="font-display text-3xl">
                Inquiry Details
              </h2>

              <button
                onClick={() =>
                  setSelectedInquiry(null)
                }
                className="text-3xl"
              >
                ×
              </button>

            </div>

            <div className="mt-8 space-y-4">

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

              <div className="flex items-center gap-4">
                <strong>Status:</strong>

                <select
                  value={selectedInquiry.status}
                  onChange={(e) =>
                    updateStatus(
                      selectedInquiry._id,
                      e.target.value
                    )
                  }
                  className="rounded-lg border p-2"
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

                <div className="mt-2 rounded-xl bg-gray-100 p-4">
                  {selectedInquiry.message ||
                    "No message"}
                </div>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}