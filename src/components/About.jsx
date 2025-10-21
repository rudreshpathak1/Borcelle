import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-10 space-y-8">

      {/* Header */}
      <div className=" text-center text-2xl md:text-3xl font-semibold">
      <h1>About<span className="text-primary"> Us!</span></h1>
    </div>

      {/* Introduction */}
      <div className="space-y-4 text-gray-700 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Bringing the World’s Flavors to Your Fingertips
        </h2>
        <p>
          Welcome to <span className="text-primary font-semibold">Borcelle</span>,
          where food meets technology, and every craving finds its cure.
          We’re not just a food delivery app — we’re a movement to make good food accessible, enjoyable, and unforgettable.
        </p>
        <p>
          At <span className="text-primary font-semibold">Borcelle</span>,
          we understand that food is deeply personal. It’s not just what you eat —
          it’s a reflection of your mood, your culture, your story. From comforting home-cooked meals to gourmet restaurant dishes,
          we bring together the best of both worlds — authentic taste and seamless convenience.
        </p>
      </div>

      {/* Our Story */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">Our Story</h3>
        <p>
          The idea for <span className="text-primary font-semibold">Borcelle</span> was born out of a simple observation — people love food, but the experience of discovering and enjoying it was becoming complicated. Long queues, confusing menus, inconsistent delivery, and lack of access to regional delicacies — we wanted to change that.
        </p>
        <p>
          So, we built a platform that connects customers, restaurants, and local chefs through technology. Our journey started with a small team, big dreams, and an even bigger appetite for innovation. Today, <span className="text-primary font-semibold">Borcelle</span> is a growing community of food lovers, chefs, and local businesses who share one common goal: spreading happiness through food.
        </p>
      </div>

      {/* What We Offer */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">What We Offer</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Endless Variety:</strong> From North Indian curries to South Indian dosas, Italian pastas to Indo-Chinese noodles — something for everyone.</li>
          <li><strong>Local & Homemade Options:</strong> Partnering with home kitchens and local chefs who prepare meals with love, giving you that “ghar ka khana” touch.</li>
          <li><strong>Seamless Experience:</strong> Browse menus, customize your order, track deliveries in real-time, and pay securely — all in a few taps.</li>
          <li><strong>Curated Cuisines:</strong> Handpicked dishes from trusted restaurants known for quality, hygiene, and authenticity.</li>
          <li><strong>Exclusive Offers:</strong> Exciting discounts, combo deals, and loyalty rewards to make every order a win.</li>
        </ul>
      </div>

      {/* Our Mission */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">Our Mission</h3>
        <p>
          Our mission is to redefine the way people experience food by combining flavor, freshness, and technology. We aim to empower local restaurants, small eateries, and home chefs by giving them digital visibility while ensuring customers enjoy reliable service and mouth-watering meals.
        </p>
        <p className="italic font-semibold">“To deliver happiness, one meal at a time.”</p>
      </div>

      {/* Our Values */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">❤️ Our Values</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Quality First:</strong> Every meal listed on our app goes through strict quality and hygiene checks.</li>
          <li><strong>Customer Happiness:</strong> Your satisfaction is our fuel. We constantly improve based on feedback.</li>
          <li><strong>Community Support:</strong> Uplifting local businesses and helping small food entrepreneurs grow.</li>
          <li><strong>Innovation:</strong> Always cooking up something new — from smart delivery systems to AI-based recommendations.</li>
          <li><strong>Sustainability:</strong> Eco-friendly packaging and responsible food sourcing.</li>
        </ul>
      </div>

      {/* Our Vision */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">Our Vision</h3>
        <p>
          To build the most trusted and loved food platform in India — one that bridges taste, technology, and trust. We envision a world where every meal you crave is just a tap away, delivered fresh, safe, and full of joy.
        </p>
        <p>
          Whether it’s your morning breakfast, midnight cravings, or a festive family dinner — <span className="text-primary font-semibold">Borcelle</span> is here to serve you with speed, flavor, and a smile.
        </p>
      </div>

      {/* Join the Journey */}
      <div className="space-y-4 text-gray-700">
        <h3 className="text-xl md:text-2xl font-semibold">Join the Journey</h3>
        <p>
          We’re more than an app. We’re a growing family of food lovers, restaurant owners, delivery partners, and customers who believe that food can bring people closer.
        </p>
        <p>
          The next time hunger strikes, open <span className="text-primary font-semibold">Borcelle</span>, explore your favorites, and let us take care of the rest. Because when it comes to food — you deserve the best.
        </p>
      </div>

    </div>
  );
};

export default About;
