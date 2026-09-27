import { IconBox, type IconName } from "@/components/shared/icon-box";
import { contactDetails } from "@/lib/content/contact";
import { getWhatsAppLink } from "@/lib/site-config";

export function ContactInfo() {
  const items = [
    {
      ...contactDetails.phone,
      link: contactDetails.phone.href,
    },
    {
      ...contactDetails.whatsapp,
      link: getWhatsAppLink("general"),
    },
    {
      ...contactDetails.address,
      link: contactDetails.address.href,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Or reach us directly</h2>
      <div className="space-y-3 pt-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4 rounded-2xl bg-muted p-4">
            <IconBox icon={item.icon as IconName} size="sm" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {item.label}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-secondary hover:underline"
              >
                {item.value}
              </a>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}
