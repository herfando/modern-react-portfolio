import React from "react";
import Card from "../../ui/Card";

function Features() {
  const features = [
    { title: "Fast", desc: "Lightning fast performance." },
    { title: "Responsive", desc: "Looks great on any device." },
    { title: "Customizable", desc: "Easily adapt to your needs." },
  ];

  return (
    <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <Card key={i} title={f.title} desc={f.desc} />
        ))}
      </div>
    </section>
  );
}

export default Features;
