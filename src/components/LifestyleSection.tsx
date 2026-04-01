import lifestyleImg from "@/assets/lifestyle.jpg";

const LifestyleSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={lifestyleImg}
              alt="Diverse law students and professionals"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-80 lg:h-[420px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading">
              You Belong in This{" "}
              <span className="text-gradient-gold">Profession.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Love Law™ was created for law students and attorneys who don't always see
              themselves reflected in the legal world. We celebrate identity, build
              confidence, and remind you every single day that you were made for this.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Because representation matters — and so does your mental health on this journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
