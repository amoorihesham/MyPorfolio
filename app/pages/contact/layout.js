export const metadata = {
  title: "Amr - Contact",
};

function ContactLayout({ children }) {
  return (
    <div className="contactPage py-8">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
export default ContactLayout;
