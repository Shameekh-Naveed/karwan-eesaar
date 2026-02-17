import { Card, CardContent } from "@/components/ui/card";
import { IconBox, type IconName } from "@/components/shared/icon-box";
import { contactDetails } from "@/lib/content/contact";
import { getWhatsAppLink } from "@/lib/site-config";

export function ContactInfo() {
  const items = [
    {
      ...contactDetails.email,
      link: contactDetails.email.href,
    },
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
      <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
      <p className="text-muted-foreground">
        We&apos;d love to hear from you. Reach out through any of the channels
        below.
      </p>
      <div className="space-y-3 pt-2">
        {items.map((item) => (
          <Card key={item.label} className="border-0 shadow-sm">
            <CardContent className="flex items-center gap-4 p-4">
              <IconBox icon={item.icon as IconName} size="sm" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {item.label}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary hover:underline"
                >
                  {item.value}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
