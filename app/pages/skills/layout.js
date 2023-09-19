import React from "react";

export const metadata = {
  title: "Amr - Skills",
};

function SkillsLayout({ children }) {
  return (
    <div className="skillsPage py-8">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}

export default SkillsLayout;
