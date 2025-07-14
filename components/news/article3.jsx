import { accesscontrol } from "@/public/assets/images";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

export default function Article3() {
  return (
    <article className="bg-brand-ligthSecondary dark:bg-cardGradient rounded-3xl">
      <div className="max-h-[450px] flex items-center justify-center">
        <Image
          src={accesscontrol}
          alt="Article"
          className="w-full max-h-[450px] object-cover rounded-2xl"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 md:p-8">
        <div className="flex items-center space-x-4 text-sm mb-4 kumbh_sans_regular">
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaUserAlt className="h-3 w-3 text-brand-secondary" />
            <span>BY Tech</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-dark dark:text-brand-white">
            <FaCalendarAlt className="h-3 w-3 text-brand-secondary" />
            <span>January 15, 2024</span>
          </div>
        </div>

        <h1 className="text-3xl kumbh_sans_semibold text-brand-dark dark:text-white mb-6 leading-tight">
          Smart Access Control: Security Meets Convenience
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Modern access control systems go beyond traditional locks and keys.
            By integrating smart card readers, mobile credentials, and
            cloud-based management, businesses and residential communities can
            offer secure yet flexible access to authorized individuals only.
          </p>
          <ul className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6 list-disc pl-6">
            <li>
              **Multi-Factor Authentication:** Combine PINs, cards, and
              biometrics for enhanced security.
            </li>
            <li>
              **Remote Management:** Grant or revoke access instantly via web or
              mobile apps.
            </li>
            <li>
              **Audit Trails:** Detailed logs track every entry and exit,
              supporting compliance and investigations.
            </li>
            <li>
              **Visitor Management:** Issue temporary digital passes for guests,
              contractors, or deliveries.
            </li>
            <li>
              **Scalability:** Easily add new doors, users, or locations as your
              business grows.
            </li>
          </ul>
        </div>

        <div className="dark:bg-cardGradient bg-brand-ligthSecondaryDark p-4 md:p-8 rounded-2xl my-4">
          <blockquote className="prose prose-invert max-w-none">
            <p className="text-brand-muted kumbh_sans_medium text-base leading-relaxed mb-6">
              “Our access control solutions are designed to provide seamless
              entry, real-time monitoring, and instant alerts, enhancing both
              security and user experience.”
            </p>
          </blockquote>
          <div className="flex items-center justify-between space-x-2 text-brand-dark dark:text-brand-white">
            <div className="flex flex-col flex-1">
              <h3 className="text-brand-secondary text-lg kumbh_sans_semibold">
                Protection Technologies Team
              </h3>
              <p className="text-brand-dark dark:text-brand-white text-sm mb-0">
                Access Control Specialists
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="h-9 w-9 text-brand-secondary" />
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Features like remote unlocking, scheduled access, and integration
            with video intercoms ensure that only authorized people can enter,
            while property managers retain full control. This not only boosts
            security but also streamlines day-to-day operations for residents
            and staff.
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            <b>Additional Benefits:</b>
            <ul className="list-disc pl-6">
              <li>Reduced risk of lost or copied keys</li>
              <li>Instant lockdown capability in emergencies</li>
              <li>
                Customizable access levels for staff, tenants, and visitors
              </li>
              <li>
                Integration with time and attendance systems for workforce
                management
              </li>
            </ul>
          </p>
          <p className="text-brand-dark dark:text-brand-white text-base leading-relaxed mb-6">
            Smart access control is the future of secure, efficient property
            management—delivering both safety and convenience in one package.
          </p>
        </div>
      </div>
    </article>
  );
}
