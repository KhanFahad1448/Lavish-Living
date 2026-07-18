
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../lib/api";

import ReviewStats from "../components/admin/reviews/ReviewStats";
import ReviewFilters from "../components/admin/reviews/ReviewFilters";
import ReviewTable from "../components/admin/reviews/ReviewTable";
import ReviewModal from "../components/admin/reviews/ReviewModal";

export default function AdminReviews() {
  const [reviews,setReviews]=useState([]);
  const [loading,setLoading]=useState(true);

  const [search,setSearch]=useState("");
  const [status,setStatus]=useState("all");
  const [rating,setRating]=useState("all");

  const [open,setOpen]=useState(false);
  const [selected,setSelected]=useState(null);

  useEffect(()=>{ fetchReviews(); },[]);

  async function fetchReviews(){
    try{
      setLoading(true);
      const {data}=await api.get("/reviews/admin");
      setReviews(data.reviews||[]);
    }catch(e){
      console.error(e);
      toast.error("Unable to fetch reviews");
    }finally{
      setLoading(false);
    }
  }

  const filteredReviews=useMemo(()=>{
    return reviews.filter(r=>{
      const matchesSearch=r.name?.toLowerCase().includes(search.toLowerCase());
      const matchesStatus=
        status==="all" ||
        (status==="approved" && r.approved) ||
        (status==="pending" && !r.approved) ||
        (status==="featured" && r.featured);

      const matchesRating=
        rating==="all" || Number(r.rating)===Number(rating);

      return matchesSearch && matchesStatus && matchesRating;
    });
  },[reviews,search,status,rating]);

  async function handleApprove(review){
    try{
      await api.put(`/reviews/${review._id}/approve`);
      toast.success("Review updated");
      fetchReviews();
    }catch{
      toast.error("Unable to update review");
    }
  }

  async function handleFeature(review){
    try{
      await api.put(`/reviews/${review._id}/feature`);
      toast.success("Featured status updated");
      fetchReviews();
    }catch{
      toast.error("Unable to update review");
    }
  }

  async function handleDelete(review){
    if(!window.confirm("Delete this review?")) return;
    try{
      await api.delete(`/reviews/${review._id}`);
      toast.success("Review deleted");
      fetchReviews();
    }catch{
      toast.error("Unable to delete review");
    }
  }

  function handleEdit(review){
    setSelected(review);
    setOpen(true);
  }

  async function handleSave(updated){
    try{
      await api.put(`/reviews/${updated._id}`,updated);
      toast.success("Review updated");
      setOpen(false);
      setSelected(null);
      fetchReviews();
    }catch{
      toast.error("Unable to save review");
    }
  }

  return(
    <div className="section-pad bg-cream min-h-screen">
      <div className="container-luxe">
        <div className="mb-8">
          <h1 className="font-display text-4xl text-emerald-deep">
            Review Management
          </h1>
          <p className="mt-2 text-ink/60">
            Manage customer testimonials and approvals.
          </p>
        </div>

        <ReviewStats reviews={reviews}/>

        <ReviewFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          rating={rating}
          setRating={setRating}
        />

        {loading ? (
          <div className="mt-10 text-center text-emerald-deep">
            Loading reviews...
          </div>
        ) : (
          <ReviewTable
            reviews={filteredReviews}
            onApprove={handleApprove}
            onFeature={handleFeature}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}

        <ReviewModal
          open={open}
          review={selected}
          onClose={()=>{
            setOpen(false);
            setSelected(null);
          }}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}
