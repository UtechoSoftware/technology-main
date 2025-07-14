"use client";
import {
  business,
  college,
  data,
  featureimg,
  living,
  multi,
  office,
  project11,
  warehouse,
} from "@/public/assets/images";
import Image from "next/image";

export default function Detail({ id }) {
  const services = [
    {
      title: "Multi Family",
      description: [
        "Apartment complexes want to keep their tenants safe. Residents’ safety and security are key factors in the residential market. The more secure an individual feels in a home or complex, the more individuals will be willing to live there, and at a higher rate. Protecting your residents creates the demand for your property, which becomes invaluable. Our video surveillance solutions operate in real time to capture events as they occur, and our electronic locking systems can lock any individual out in a matter of seconds.",
        "We deliver services as soon as your residents need them. With our custom solution, you get maximum security and control over who enters your private home. ",
      ],
      id: "multi-family",
      image: multi,
    },
    {
      title: "Commercial Warehouse",
      description: [
        "Warehouse security camera systems are essential for securing industrial spaces. We are experts in the design and installation of warehouse cameras and storage monitoring systems that you can view from anywhere on your phone or laptop. We can also design complete security systems that include access control, cameras and alarm systems optimized for your facility.",
        "Our team of experts is always ready to help, answer all your warehouse security questions and provide customized solutions for your needs.",
      ],
      id: "commercial-warehouse",
      image: warehouse,
    },
    {
      title: "Data Center",
      description: [
        "Let us use our hardware to protect yours. We can work to plan and install a system that works best for your unique set of needs. From fire systems that help limit excessive fire damage, to cameras that will protect and keep track of products, to access control systems that will limit what individuals will have access to your building, we will help get you protected.",
      ],
      id: "data-center",
      image: data,
    },
    {
      title: "Critical Infrastructure",
      description: [
        "Ensure the safety and reliability of your critical assets with our expert services in inspection, compliance, and infrastructure integrity. At PROtect LLC, we specialize in safeguarding essential systems—such as pipelines, facilities, and mechanical equipment—through advanced technologies like Eddy Current Testing, Infrared Thermography, and Optical Gas Imaging. Our comprehensive approach helps you stay compliant with regulatory standards, minimize operational risks, and maintain uninterrupted performance of your most vital infrastructure.",
      ],
      id: "critical-infrastructure",
      image: project11,
    },
    {
      title: "Assisted Living Facilities",
      description: [
        "Your security measures for your entire building should match your care levels for patients. We can work with you to determine your exact needs for your operations. From Cameras, intercom systems and electronic locking mechanisms, we can limit who enters, as well as who leaves, and in what time frames. This encourages safety for all patients as well as staff, providing that extra piece of mind each day.",
        "Not only that, but we can provide fire & burglar alarm precautions. Ask us about our monitoring options today!",
      ],
      id: "assisted-living-facilities",
      image: business,
    },
    {
      title: "Office Buildings",
      description: [
        "Failing to plan is planning to fail. The office is a place that requires many people to have access. But what about those areas not everyone should be in? What about the times you don’t want anyone in the building at all? What about those times an angry employee is asked to leave? We have the solutions to all of it.",
        "Our range of electronic locking systems are bound to fit the needs of your company. As the very first United States partner of iLOQ, the first sustainable, battery-free solution in the world. As well as many others, we can help guide you to the best solution for your company. Each of these systems has their own strengths in limiting individuals’ access to buildings, limiting what times the building is open overall (or for specific individuals), and providing control to management to decide what other restrictions they see fit.",
        " Locking solutions aren’t the only thing we can do for your building. Our CCTV systems solution is  another one of our popular additons for many buildings. If you provide us with the floorpan of your building/office, we can provide the best places for cameras for both the interior and exterior. We can simply do a walkthrough of the building and determine the best locations that way. No matter what method, you tell us you can adjust the amount of cameras you want, and we will work within your budget.",
        " We are a one stop shop for all your security and internet office system needs. Tell us what you need, and we’ll suggest the options we think will suit you best.",
      ],
      id: "office-buildings",
      image: office,
    },
    {
      title: "Houses/Estates",
      description: [
        "Your home is your safe place. Let us ensure that it stays your safe place. With our fire monitoring and burglar alarm options, you can relax knowing that your home is being looked over.",
        "In today’s day and age, you never know what can happen or when. Our CCTV system will give you eyes to your home while you’re away. Tell us how many cameras you want and where, and we can set you up with our very own surveillance app. Whether you worry about thieves, vandals, in-laws, or children, know what always goes on in and/or around your home.",
      ],
      id: "houses-estates",
      image: featureimg,
    },
    {
      title: "College Housing Solutions",
      description: [
        "he most important part of college housing is ensuring that students can feel safe in their placements. Every school year college dorms, apartments, and other housing units are switched, and students are rarely in the same dorm year after year. This means that with regular locking systems, it is up to the school to keep track of all keys given out and when. This is not the most trustworthy method as even if this is successful, regular keys can be duplicated.",
        "We can set you up with an electronic locking system that cannot be duplicated, can immediately shut down access on a given date, and will allow you to keep track of who exactly has access to certain rooms, club rooms, study rooms, gyms, and any other amenity you may have on campus. Our iLOQ battery-free sustainable solutions or our Assa Abloy VingCard can work on many campuses. Feel free to reach out if you have any questions or would like to know more!",
      ],
      id: "college-housing-solutions",
      image: college,
    },
    {
      title: "Multi Location Business",
      description: [
        "Due to our electronic locking systems, we have the capability to connect multiple properties under one portfolio online. Manage not just one, but all your businesses under a single system.",
      ],
      id: "multi-location-business",
      image: living,
    },
  ];

  const service = services.find((service) => service.id === id);
  return (
    <>
      <div className="bg-brand-secondaryLight dark:bg-brand-secondaryDark py-8 md:py-16 px-4">
        <div className="">
          <div className="relative max-w-7xl mx-auto">
            <Image
              src={service.image}
              alt="serviceDetailImage"
              className="w-full relative h-[300px] md:h-[500px] object-cover rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-15 z-10"></div>
          </div>

          <div className="my-8 max-w-7xl mx-auto">
            <h2 className="text-brand-secondary dark:text-white capitalize text-3xl kumbh_sans_semibold">
              {service.title}
            </h2>
            {service.description.map((description, index) => {
              return (
                <div className="my-5" key={index}>
                  <p className="text-brand-muted kumbh_sans_regular text-base">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
