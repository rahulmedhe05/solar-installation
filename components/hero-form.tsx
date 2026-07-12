"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { Sparkles } from "lucide-react";

interface HeroFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

// Form field configuration for solar installation
const solarFormConfig = {
  title: "Get Solar Quote",
  subtitle: "Save Up to 90% on Electricity",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", required: true },
    { name: "mobile", label: "Mobile Number", type: "tel", required: true },
    { name: "service", label: "Service Required", type: "select", options: ["Residential Solar", "Commercial Solar", "Industrial Solar", "Solar Maintenance", "Other"], required: true },
    { name: "requirement", label: "Your Requirement", type: "textarea", required: true },
  ],
};

// Business metadata for solar installation
const solarMeta = { phone: "919033451995", domain: "solarinstallationvadodara.in" };

export function HeroForm({ business, area, keyword }: HeroFormProps) {
  const config = solarFormConfig;
  const meta = solarMeta;
  const areaName = getAreaDisplayName(area);
  const isMainVadodara = area === "solar-installation-in-vadodara" || areaName === "Vadodara";
  const locationText = isMainVadodara ? "Vadodara" : `${areaName}, Vadodara`;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let message = `*New Solar Installation Enquiry*\n\n`;

    config.fields.forEach((field) => {
      if (formData[field.name]) {
        message += `*${field.label}:* ${formData[field.name]}\n`;
      }
    });

    message += `*Area:* ${locationText}\n`;
    if (keyword) message += `*Interest:* ${keyword}\n`;
    message += `\n_Enquiry via ${meta.domain}_`;

    const whatsappURL = `https://wa.me/${meta.phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 shadow-2xl w-full">
      <div className="mb-3 pb-2 border-b border-gray-200">
        <div className="flex items-center gap-1.5 text-amber-600 mb-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wider">Quick Enquiry</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {config.title}
        </h3>
        <p className="text-xs text-gray-600 mt-0.5">{config.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          {config.fields.filter((f) => f.type === "text" || f.type === "tel").map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <Input
                type={field.type}
                placeholder={field.label}
                value={formData[field.name] || ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                required={field.required}
                className="h-10 text-sm px-3"
              />
            </div>
          ))}
        </div>

        {config.fields.filter((f) => f.type === "select" || f.type === "textarea").map((field) => (
          <div key={field.name}>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === "select" && field.options ? (
              <div className="grid grid-cols-2 gap-1.5">
                {field.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData({ ...formData, [field.name]: option })}
                    className={`px-2.5 py-1.5 text-xs rounded-lg border-2 transition-all font-medium ${
                      formData[field.name] === option
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-200 text-gray-700 hover:border-orange-300 bg-gray-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <Textarea
                placeholder={`Enter your ${field.label.toLowerCase()}...`}
                value={formData[field.name] || ""}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                required={field.required}
                rows={2}
                className="text-sm px-3 py-2 resize-none"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 text-sm mt-1 shadow-lg active:scale-[0.98]"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {isSubmitting ? "Sending..." : "Send on WhatsApp"}
        </button>
      </form>
    </div>
  );
}
