import Footer from "@/components/Footer";
import AddReviewForm from "@/components/AddReviewForm";

const AddReview = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 bg-custom-yellow">
        <h1 className="text-3xl font-merriweather text-custom-text mb-6">
          Add a Book Review
        </h1>
        <AddReviewForm />
      </div>
      <Footer />
    </>
  );
};

export default AddReview;
