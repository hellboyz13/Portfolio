import Link from 'next/link';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/jeremynky' },
  { name: 'GitHub', url: 'https://github.com/jeremynky' },
  { name: 'Email', url: 'mailto:jeremyngkaiyong@gmail.com' },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target={link.url.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
          className="text-sm text-[#737373] hover:text-[#22c55e] transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
