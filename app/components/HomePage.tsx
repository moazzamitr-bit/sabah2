"use client";

import {
  ArrowLeft,
  Award,
  Box,
  BriefcaseBusiness,
  Building2,
  Camera,
  ChartNoAxesCombined,
  ChevronLeft,
  CircleGauge,
  Factory,
  Globe2,
  Languages,
  Link2,
  Mail,
  MapPin,
  Menu,
  Network,
  Package,
  Phone,
  Send,
  ShoppingCart,
  Snowflake,
  Truck,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type IconItem = {
  title: string;
  icon: LucideIcon;
};

const navigation = [
  { label: "صفحه اصلی", href: "/" },
  { label: "درباره هلدینگ", href: "/about" },
  { label: "شرکت‌های زیرمجموعه", href: "/subsidiaries" },
  { label: "زنجیره ارزش", href: "/value-chain" },
  { label: "توانمندی‌ها", href: "/capabilities" },
  { label: "اخبار", href: "/news" },
  { label: "تماس با ما", href: "/contact" },
];

const statistics = [
  {
    value: "۲۰",
    label: "نزدیک به\nسال تجربه",
    icon: Award,
  },
  {
    value: "۱۰۰۰",
    label: "تن شیر خام\nدریافتی روزانه",
    icon: CircleGauge,
  },
  {
    value: "۱۱",
    label: "شرکت\nزیرمجموعه",
    icon: Building2,
  },
  {
    value: "۱۵",
    label: "شرکت توزیع\nمحصولات",
    icon: Network,
  },
  {
    value: "زنجیره ارزش",
    label: "از تأمین تا فروش",
    icon: Link2,
  },
];

const valueChain: IconItem[] = [
  { title: "تأمین", icon: Truck },
  { title: "تولید", icon: Factory },
  { title: "بسته‌بندی", icon: Package },
  { title: "سردخانه", icon: Snowflake },
  { title: "توزیع", icon: Truck },
  { title: "فروش", icon: ShoppingCart },
];

const subsidiaries: IconItem[] = [
  { title: "صنایع شیر فجر گنبد", icon: Factory },
  { title: "تولیدی فرآورده‌های لبنی گلستان", icon: Package },
  { title: "صنایع شیر فجر آساک قوچان", icon: Factory },
  { title: "صباح پودر فجر", icon: Box },
  { title: "صنایع بسته‌بندی فجر گلستان", icon: Package },
  { title: "خوراک دام و طیور مینو صباح", icon: Wrench },
  { title: "صباح شیر فجر", icon: CircleGauge },
  { title: "بازرگانی فجر صباح جهان", icon: Globe2 },
  { title: "سردخانه تهران", icon: Snowflake },
  { title: "شرکت نوین ظرف صباح", icon: Box },
];

const capabilities: IconItem[] = [
  { title: "یکپارچگی زنجیره ارزش", icon: Link2 },
  { title: "ظرفیت تولید بالا", icon: Factory },
  { title: "مدیریت چندشرکتی", icon: Users },
  { title: "زیرساخت توزیع گسترده", icon: Truck },
  { title: "توانمندی بازرگانی و پشتیبانی", icon: Globe2 },
  { title: "تولید از صفر تا صد", icon: Wrench },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SabahMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="گروه صنعتی صباح">
      <div className="brand-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="brand-copy">
        <small>گروه صنعتی</small>
        <strong>صباح</strong>
      </div>
      {!compact && <span className="brand-divider" aria-hidden="true" />}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-container header-inner">
        <Link href="/" className="logo-link" aria-label="صفحه اصلی گروه صنعتی صباح">
          <SabahMark compact />
        </Link>

        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button language-button" aria-label="تغییر زبان به انگلیسی">
            <Languages size={17} aria-hidden="true" />
            <span>EN</span>
          </button>
          <button
            className="icon-button menu-button"
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <motion.div
        id="mobile-navigation"
        className="mobile-nav"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, visibility: "visible" },
          closed: { opacity: 0, y: -12, transitionEnd: { visibility: "hidden" } },
        }}
        transition={{ duration: 0.22 }}
      >
        <nav aria-label="ناوبری موبایل">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ChevronLeft size={17} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
}) {
  return (
    <Link href={href} className={`cta-button cta-button--${variant}`}>
      <span>{children}</span>
      <ArrowLeft size={18} aria-hidden="true" />
    </Link>
  );
}

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section id="home" ref={sectionRef} className="hero-section">
      <motion.div
        className="hero-background"
        style={{ y: reduceMotion ? 0 : imageY }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="technical-grid" aria-hidden="true" />
      <div className="site-container hero-content">
        <motion.p
          className="hero-kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          گروه صنعتی صباح
          <span />
          از تأمین تا فروش
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          قدرت یک زنجیره کامل
          <span>در صنعت لبنیات</span>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
        >
          گروه صنعتی صباح، هلدینگی یکپارچه و پیشرو در تولید، توزیع و فروش
          محصولات لبنی
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46 }}
        >
          <CTAButton href="/about">معرفی هلدینگ</CTAButton>
          <CTAButton href="/subsidiaries" variant="outline">
            شرکت‌های زیرمجموعه
          </CTAButton>
        </motion.div>
      </div>
      <div className="hero-side-label" aria-hidden="true">
        SABAH INDUSTRIAL HOLDING
      </div>
    </section>
  );
}

function StatsPanel() {
  return (
    <section className="stats-wrap" aria-label="آمار گروه صنعتی صباح">
      <div className="site-container">
        <Reveal className="stats-panel">
          {statistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={`${stat.value}-${stat.label}`}
                className="stat-item"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
              >
                <Icon className="stat-icon" aria-hidden="true" />
                <div className="stat-copy">
                  <strong
                    className={stat.value.length > 4 ? "stat-value--text" : ""}
                  >
                    {stat.value}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              </motion.article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  light?: boolean;
  align?: "center" | "right";
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        light ? "section-heading--light" : ""
      }`}
    >
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      <i aria-hidden="true" />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="site-container about-grid">
        <Reveal className="about-copy">
          <SectionHeading
            eyebrow="معرفی گروه"
            title="درباره هلدینگ صباح"
            align="right"
          />
          <p>
            گروه صنعتی صباح قریب به ۲۰ سال است که محصولات لبنی تولید می‌کند و
            روزانه هزار تن شیر خام دریافتی دارد.
          </p>
          <p>
            این گروه صنعتی با در اختیار داشتن ۱۱ شرکت، زنجیره ارزش خود را از
            تأمین تا توزیع و فروش تکمیل کرده است.
          </p>
          <Link href="/value-chain" className="text-link">
            مشاهده زنجیره ارزش
            <ArrowLeft size={18} />
          </Link>
        </Reveal>
        <Reveal className="about-visual" delay={0.12}>
          <div className="about-image" role="img" aria-label="ساختمان مدرن گروه صنعتی صباح">
            <div className="building-sign">
              <SabahMark compact />
            </div>
            <div className="image-index" aria-hidden="true">
              <strong>۲۰</strong>
              <span>سال تجربه و توسعه</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValueChain() {
  return (
    <section id="value-chain" className="value-section dark-section">
      <div className="technical-dots" aria-hidden="true" />
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="از تأمین تا فروش"
            title="زنجیره ارزش یکپارچه صباح"
            light
          />
        </Reveal>
        <div className="value-flow">
          {valueChain.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                className="value-step-wrap"
                delay={index * 0.07}
              >
                <motion.article className="value-step" whileHover={{ y: -5 }}>
                  <div className="value-icon">
                    <Icon aria-hidden="true" />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <strong>{item.title}</strong>
                </motion.article>
                {index < valueChain.length - 1 && (
                  <div className="value-connector" aria-hidden="true">
                    <span />
                    <ChevronLeft />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SubsidiariesGrid() {
  return (
    <section id="subsidiaries" className="subsidiaries-section">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="ساختار گروه"
            title="شرکت‌های زیرمجموعه"
          />
          <p className="section-lead">
            شبکه‌ای تخصصی از شرکت‌های تولیدی، پشتیبانی، بازرگانی و توزیع که
            زنجیره ارزش صباح را کامل می‌کنند.
          </p>
        </Reveal>
        <div className="subsidiaries-grid">
          {subsidiaries.map((company, index) => {
            const Icon = company.icon;
            return (
              <Reveal
                key={company.title}
                className="subsidiary-reveal"
                delay={(index % 5) * 0.045}
              >
                <motion.article
                  className="subsidiary-card"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.22 }}
                >
                  <span className="company-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon aria-hidden="true" />
                  <h3>{company.title}</h3>
                  <i aria-hidden="true" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="capabilities-section dark-section">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="مزیت‌های راهبردی"
            title="توانمندی‌های گروه صنعتی صباح"
            light
          />
        </Reveal>
        <div className="capabilities-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                className="capability-item"
                delay={index * 0.06}
              >
                <div className="capability-icon">
                  <Icon aria-hidden="true" />
                </div>
                <strong>{item.title}</strong>
                <span aria-hidden="true" />
              </Reveal>
            );
          })}
        </div>
        <Reveal className="capacity-band" delay={0.2}>
          <div>
            <ChartNoAxesCombined aria-hidden="true" />
            <span>ظرفیت عملیاتی</span>
          </div>
          <strong>۱۰۰۰ تن</strong>
          <p>دریافت روزانه شیر خام در شبکه تولید گروه</p>
        </Reveal>
      </div>
    </section>
  );
}

function CorporateCTA() {
  return (
    <section id="news" className="corporate-cta">
      <div className="corporate-cta__background" aria-hidden="true" />
      <div className="corporate-cta__overlay" aria-hidden="true" />
      <div className="site-container">
        <Reveal className="corporate-cta__content">
          <span>آینده‌ای بر پایه ساختار و توان عملیاتی</span>
          <h2>ساختاری یکپارچه برای خلق ارزش پایدار</h2>
          <p>
            گروه صنعتی صباح با تکیه بر تجربه، زیرساخت، سرمایه انسانی و شبکه
            گسترده تولید و توزیع، آینده صنعت لبنیات را توسعه می‌دهد.
          </p>
          <CTAButton href="/subsidiaries">مشاهده ساختار گروه</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-line-art" aria-hidden="true" />
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <SabahMark />
          <p>
            هلدینگی پیشرو و یکپارچه در صنعت لبنیات ایران با تکیه بر تجربه،
            دانش، فناوری و سرمایه انسانی برای خلق ارزش پایدار.
          </p>
          <div className="socials" aria-label="شبکه‌های اجتماعی">
            <a href="#" aria-label="لینکدین">
              <BriefcaseBusiness size={18} />
            </a>
            <a href="#" aria-label="اینستاگرام">
              <Camera size={18} />
            </a>
            <a href="#" aria-label="تلگرام">
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>دسترسی سریع</h3>
          <ul>
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <ChevronLeft size={14} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h3>اطلاعات تماس</h3>
          <address>
            <p>
              <MapPin size={18} />
              تهران، بلوار نلسون ماندلا، پلاک ۳۲
            </p>
            <a href="tel:+982142345678">
              <Phone size={18} />
              تلفن: ۰۲۱-۴۲۳۴۵۶۷۸
            </a>
            <p>
              <Phone size={18} />
              فکس: ۰۲۱-۴۲۳۴۵۶۷۹
            </p>
            <a href="mailto:info@sabahholding.com">
              <Mail size={18} />
              info@sabahholding.com
            </a>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="site-container">
          <span>© 2026 Sabah Industrial Group. All Rights Reserved.</span>
          <span>طراحی و توسعه وب‌سایت گروه صنعتی صباح</span>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsPanel />
        <AboutSection />
        <ValueChain />
        <SubsidiariesGrid />
        <CapabilitiesSection />
        <CorporateCTA />
      </main>
      <Footer />
    </>
  );
}
