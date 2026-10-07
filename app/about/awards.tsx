"use client";

import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const awards = [
  {
    year: "2021",
    title: "The Best Microfinance Bank in Ogun State",
    category: "Award of Excellence",
    organization:
      "Scholars Communications Publishers of First Focus Magazine",
    description:
      "Recognised for contributions toward grassroots development in Ogun State.",
    image: "/award_1.jpeg",
  },
  {
    year: "Campus Best Award 8.0",
    title: "Most Student Friendly Microfinance Bank of the Year",
    category: "Campus Best Award",
    organization:
      "Ogun State Polytechnic of Health and Allied Sciences",
    description:
      "Recognised by students for Catland's impact and support on campus.",
    image: "/award_2.jpeg",
  },
  {
    year: "2024",
    title: "Honorary Award",
    category: "Honorary Recognition",
    organization:
      "Nigeria Union of Teachers, Ijebu North East Branch",
    description:
      "Recognised for outstanding contributions and unwavering economic support to teachers in the local government.",
    image: "/award_3.jpeg",
  },
  {
    year: "Recognition",
    title: "Award of Appreciation",
    category: "Appreciation Award",
    organization:
      "National Association of Microfinance Banks, Ogun State",
    description:
      "Recognised for Catland's commitment toward human capacity development.",
    image: "/award_4.jpeg",
  },
  {
    year: "2022",
    title: "Merit Award",
    category: "Merit Recognition",
    organization: "Ilese Development Council",
    description:
      "Recognised for consistent and unwavering financial and material support towards the success of Ilese Day & Carnival.",
    image: "/award_5.jpeg",
  },
];

/* Animation Variants */
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AwardsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#39246a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#39246a]">
            <Award size={15} />
            Awards & Recognition
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Recognised for Excellence
          </h2>

          <p className="mt-5 text-sm leading-7 tracking-wide text-gray-600 sm:text-base">
            Our commitment to responsible banking, financial inclusion,
            customer service and sustainable growth continues to earn
            recognition across the financial sector.
          </p>
        </motion.div>

        {/* Featured Award */}
        <motion.div
          className="mt-14 overflow-hidden rounded-[2rem] bg-[#39246a]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src="/award_1.jpeg"
                alt="Catland Microfinance Bank Award of Excellence"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <Calendar size={16} />
                16 September 2021
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Award of Excellence
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                The Best Microfinance Bank in Ogun State
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                Catland Microfinance Bank was recognised for its
                contributions toward grassroots development in Ogun State.
              </p>

              <div className="mt-8 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Award size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">
                    Presented by
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-white">
                    Scholars Communications Publishers of First Focus
                    Magazine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="mt-14">

          <motion.div
            className="mb-7 flex items-end justify-between gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#39246a]">
                Our Recognition
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Awards & Achievements
              </h3>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {awards.map((award) => (
              <motion.div
                key={award.title}
                variants={fadeInUp}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#39246a]/20 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Year */}
                  <div className="absolute left-4 top-4 max-w-[85%] rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#39246a] shadow-sm">
                    {award.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#39246a]">
                    {award.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-gray-900">
                    {award.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                    {award.organization}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-14 rounded-3xl border border-[#39246a]/10 bg-[#39246a]/5 px-6 py-8 text-center sm:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-700 sm:text-base">
            Every recognition reflects our continued commitment to building
            trust, delivering value and creating meaningful financial
            opportunities for the communities we serve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}