import "../../globals.css";

export const metadata = {
  title: "Amr - Features",
};

function FeaturesLayout({ children }) {
  return (
    <div className="featuresPage py-8">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
export default FeaturesLayout;
