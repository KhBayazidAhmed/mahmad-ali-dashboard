import AdminAllUserSection from "@/components/admin/AdminAllUserSection";

export default function page() {
  return (
    <section className="container mx-auto mt-8 px-4">
      <h1 className="md:text-3xl text-xl font-bold mb-6">All users </h1>
      <AdminAllUserSection />
    </section>
  );
}
