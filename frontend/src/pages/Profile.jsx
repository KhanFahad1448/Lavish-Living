import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../context/AuthContext";
import { api } from "../lib/api";

import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import RecentActivity from "../components/profile/RecentActivity";
import SecurityCard from "../components/profile/SecurityCard";
import PersonalInformation from "../components/profile/PersonalInformation";

export default function Profile() {
  const { user } = useAuth();

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyInquiries();
  }, []);

  async function fetchMyInquiries() {
    try {
      const { data } = await api.get("/inquiries/my");
      setInquiries(data.inquiries || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>My Profile | Lavish Living</title>

        <meta
          name="description"
          content="Manage your Lavish Living profile."
        />
      </Helmet>

      <section className="min-h-screen bg-cream">

        <div className="container-luxe py-12">

          <ProfileHero
            user={user}
            totalEnquiries={inquiries.length}
            onEdit={() => {}}
            onChangePassword={() => {}}
          />

          <ProfileStats
            totalEnquiries={inquiries.length}
            activeProjects={0}
            quotations={0}
            reviews={0}
          />

          <PersonalInformation
            user={user}
            onEdit={() => {}}
          />

        </div>

      </section>
    </>
  );
}