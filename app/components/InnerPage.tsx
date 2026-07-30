"use client";

import {
  ArrowLeft,
  ArrowUpLeft,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CircleGauge,
  Factory,
  Globe2,
  Handshake,
  Link2,
  Mail,
  MapPin,
  Network,
  Package,
  Phone,
  Send,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  Truck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer, Header } from "./HomePage";

export type InnerPageKey =
  | "about"
  | "subsidiaries"
  | "value-chain"
  | "capabilities"
  | "news"
  | "contact";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const pageHeaders: Record<
  InnerPageKey,
  { eyebrow: string; title: string; description: string }
> = {
  about: {
    eyebrow: "شناخت گروه",
    title: "درباره هلدینگ صباح",
    description:
      "دو دهه تجربه، توسعه زیرساخت و مدیریت یکپارچه برای ساخت زنجیره‌ای قدرتمند در صنعت لبنیات ایران.",
  },
  subsidiaries: {
    eyebrow: "ساختار گروه",
    title: "شرکت‌های زیرمجموعه",
    description:
      "شبکه‌ای از شرکت‌های تخصصی که تأمین، تولید، بسته‌بندی، پشتیبانی، بازرگانی و توزیع را در یک ساختار منسجم گرد هم آورده‌اند.",
  },
  "value-chain": {
    eyebrow: "از تأمین تا فروش",
    title: "زنجیره ارزش یکپارچه",
    description:
      "فرایندی پیوسته و کنترل‌شده که کیفیت، سرعت و بهره‌وری را در تمام مراحل عملیات گروه تضمین می‌کند.",
  },
  capabilities: {
    eyebrow: "توان عملیاتی",
    title: "توانمندی‌های گروه صنعتی صباح",
    description:
      "ترکیبی از ظرفیت تولید، سرمایه انسانی، مدیریت چندشرکتی و شبکه توزیع که مزیت رقابتی پایدار گروه را شکل می‌دهد.",
  },
  news: {
    eyebrow: "رسانه و رویدادها",
    title: "اخبار گروه صنعتی صباح",
    description:
      "تازه‌ترین خبرهای توسعه، تولید، سرمایه‌گذاری و رویدادهای سازمانی گروه صنعتی صباح.",
  },
  contact: {
    eyebrow: "ارتباط با گروه",
    title: "تماس با ما",
    description:
      "برای همکاری‌های تجاری، ارتباط با شرکت‌های گروه و دریافت اطلاعات بیشتر با ما در تماس باشید.",
  },
};

const companies: { title: string; area: string; icon: LucideIcon }[] = [
  { title: "صنایع شیر فجر گنبد", area: "تولید محصولات لبنی", icon: Factory },
  {
    title: "تولیدی فرآورده‌های لبنی گلستان",
    area: "فرآوری و تولید",
    icon: Package,
  },
  { title: "صنایع شیر فجر آساک قوچان", area: "تولید محصولات لبنی", icon: Factory },
  { title: "صباح پودر فجر", area: "محصولات پودری", icon: CircleGauge },
  { title: "صنایع بسته‌بندی فجر گلستان", area: "بسته‌بندی صنعتی", icon: Package },
  { title: "خوراک دام و طیور مینو صباح", area: "تأمین و پشتیبانی", icon: Wrench },
  { title: "صباح پخش فجر گنبد", area: "توزیع محصولات", icon: Truck },
  { title: "صباح شیر فجر", area: "تأمین شیر خام", icon: CircleGauge },
  { title: "بازرگانی فجر صباح جهان", area: "بازرگانی و تجارت", icon: Globe2 },
  { title: "سردخانه تهران", area: "نگهداری و زنجیره سرد", icon: Snowflake },
  { title: "شرکت نوین ظرف صباح", area: "تولید ظروف", icon: Package },
];

const process: IconItem[] = [
  {
    title: "تأمین",
    description:
      "تأمین پایدار مواد اولیه و دریافت روزانه شیر خام با کنترل دقیق شاخص‌های کیفی.",
    icon: Truck,
  },
  {
    title: "تولید",
    description:
      "فرآوری در خطوط صنعتی پیشرفته با ظرفیت بالا و استانداردهای کنترل کیفیت.",
    icon: Factory,
  },
  {
    title: "بسته‌بندی",
    description:
      "بسته‌بندی ایمن، دقیق و متناسب با نیاز بازار در مجموعه‌های تخصصی گروه.",
    icon: Package,
  },
  {
    title: "سردخانه",
    description:
      "حفظ پیوسته زنجیره سرد و نگهداری محصول در شرایط استاندارد تا زمان ارسال.",
    icon: Snowflake,
  },
  {
    title: "توزیع",
    description:
      "شبکه گسترده لجستیک و توزیع برای پوشش سریع و منظم بازارهای هدف.",
    icon: Truck,
  },
  {
    title: "فروش",
    description:
      "مدیریت کانال‌های فروش و توسعه بازار با تکیه بر داده، تجربه و ارتباط پایدار.",
    icon: ShoppingCart,
  },
];

const capabilityItems: IconItem[] = [
  {
    title: "یکپارچگی زنجیره ارزش",
    description:
      "مدیریت هماهنگ تمام حلقه‌ها از تأمین مواد اولیه تا توزیع و فروش نهایی.",
    icon: Link2,
  },
  {
    title: "ظرفیت تولید بالا",
    description:
      "زیرساخت صنعتی و خطوط فرآوری برای پاسخ‌گویی پایدار به تقاضای گسترده بازار.",
    icon: Factory,
  },
  {
    title: "مدیریت چندشرکتی",
    description:
      "راهبری منسجم شرکت‌های تخصصی با ساختار تصمیم‌گیری شفاف و هدف‌محور.",
    icon: Users,
  },
  {
    title: "زیرساخت توزیع گسترده",
    description:
      "پوشش جغرافیایی مؤثر با ناوگان، مراکز توزیع و نظام لجستیک هماهنگ.",
    icon: Network,
  },
  {
    title: "بازرگانی و پشتیبانی",
    description:
      "توانمندی تجاری، تأمین، پشتیبانی و توسعه همکاری‌های داخلی و بین‌المللی.",
    icon: Globe2,
  },
  {
    title: "تولید از صفر تا صد",
    description:
      "کنترل کامل فرایندهای تولید و پشتیبانی برای حفظ کیفیت و افزایش بهره‌وری.",
    icon: Wrench,
  },
];

const newsItems = [
  {
    category: "توسعه",
    date: "۷ مرداد ۱۴۰۵",
    title: "برنامه توسعه ظرفیت تولید در شرکت‌های گروه صنعتی صباح",
    description:
      "برنامه تازه گروه با تمرکز بر ارتقای بهره‌وری خطوط و توسعه زیرساخت‌های تولید تدوین شد.",
  },
  {
    category: "عملیات",
    date: "۲۸ تیر ۱۴۰۵",
    title: "تقویت شبکه یکپارچه توزیع محصولات صباح",
    description:
      "هماهنگی عملیاتی میان مراکز توزیع با هدف افزایش سرعت و دقت خدمت‌رسانی توسعه یافت.",
  },
  {
    category: "سرمایه انسانی",
    date: "۱۸ تیر ۱۴۰۵",
    title: "برگزاری دوره تخصصی مدیران شرکت‌های زیرمجموعه",
    description:
      "مدیران گروه در یک دوره تخصصی، رویکردهای نوین مدیریت عملیات را مرور کردند.",
  },
  {
    category: "کیفیت",
    date: "۹ تیر ۱۴۰۵",
    title: "به‌روزرسانی فرایندهای کنترل کیفیت در زنجیره تولید",
    description:
      "نظام پایش شاخص‌های کیفی با ابزارهای دقیق‌تر و گزارش‌دهی یکپارچه ارتقا یافت.",
  },
  {
    category: "بازرگانی",
    date: "۲۹ خرداد ۱۴۰۵",
    title: "توسعه همکاری‌های بازرگانی و تأمین گروه",
    description:
      "ظرفیت‌های جدید همکاری برای پایداری تأمین و توسعه بازارهای هدف بررسی شد.",
  },
  {
    category: "فناوری",
    date: "۱۵ خرداد ۱۴۰۵",
    title: "حرکت به سوی پایش هوشمند عملیات تولید",
    description:
      "زیرساخت داده و گزارش‌های مدیریتی برای تصمیم‌گیری سریع‌تر در حال توسعه است.",
  },
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
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PageHero({ page }: { page: InnerPageKey }) {
  const content = pageHeaders[page];

  return (
    <section className={`inner-hero inner-hero--${page}`}>
      <div className="inner-hero__image" aria-hidden="true" />
      <div className="inner-hero__overlay" aria-hidden="true" />
      <div className="inner-hero__grid" aria-hidden="true" />
      <div className="site-container inner-hero__content">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <nav className="breadcrumbs" aria-label="مسیر صفحه">
            <Link href="/">صفحه اصلی</Link>
            <ArrowLeft size={13} aria-hidden="true" />
            <span>{content.title}</span>
          </nav>
          <span className="inner-hero__eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </motion.div>
      </div>
      <span className="inner-hero__index" aria-hidden="true">
        SABAH / {page.toUpperCase()}
      </span>
    </section>
  );
}

function InnerHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="inner-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <i aria-hidden="true" />
      {description && <p>{description}</p>}
    </div>
  );
}

function AboutContent() {
  const metrics = [
    { value: "۲۰", label: "سال تجربه", icon: Award },
    { value: "۱۰۰۰", label: "تن دریافت روزانه", icon: CircleGauge },
    { value: "۱۱", label: "شرکت تخصصی", icon: Building2 },
    { value: "۶", label: "حلقه زنجیره ارزش", icon: Link2 },
  ];

  return (
    <>
      <section className="inner-section inner-section--light">
        <div className="site-container inner-story">
          <Reveal className="inner-story__copy">
            <InnerHeading
              eyebrow="داستان صباح"
              title="ساخت یک گروه صنعتی یکپارچه"
            />
            <p>
              گروه صنعتی صباح قریب به ۲۰ سال است که محصولات لبنی تولید می‌کند و
              روزانه هزار تن شیر خام دریافتی دارد. این گروه با توسعه مستمر
              زیرساخت، فناوری و سرمایه انسانی، جایگاهی اثرگذار در صنعت لبنیات
              کشور ایجاد کرده است.
            </p>
            <p>
              حضور ۱۱ شرکت تخصصی در ساختار گروه، امکان مدیریت پیوسته فرایندها
              از تأمین تا تولید، نگهداری، توزیع و فروش را فراهم کرده است.
            </p>
          </Reveal>
          <Reveal className="inner-story__visual" delay={0.12}>
            <div className="inner-story__image" role="img" aria-label="دفتر مرکزی گروه صنعتی صباح" />
            <div className="inner-story__badge">
              <strong>صباح</strong>
              <span>تجربه، ساختار، توسعه</span>
            </div>
          </Reveal>
        </div>
        <div className="site-container inner-metrics">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Reveal key={metric.label} delay={index * 0.06}>
                <Icon aria-hidden="true" />
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="inner-section inner-section--navy">
        <div className="site-container">
          <Reveal>
            <InnerHeading
              eyebrow="جهت‌گیری سازمانی"
              title="ماموریت، چشم‌انداز و ارزش‌ها"
              description="اصولی که تصمیم‌ها، سرمایه‌گذاری‌ها و مسیر رشد گروه صنعتی صباح را هدایت می‌کنند."
            />
          </Reveal>
          <div className="principles-grid">
            {[
              {
                title: "ماموریت",
                text: "خلق ارزش پایدار از طریق تولید باکیفیت، عملیات یکپارچه و پاسخ‌گویی حرفه‌ای به بازار.",
                icon: BriefcaseBusiness,
              },
              {
                title: "چشم‌انداز",
                text: "تثبیت جایگاه یک گروه صنعتی پیشرو و مرجع در زنجیره ارزش صنعت لبنیات ایران.",
                icon: BarChart3,
              },
              {
                title: "ارزش‌های سازمانی",
                text: "کیفیت، مسئولیت‌پذیری، شفافیت، توسعه سرمایه انسانی و بهبود مستمر.",
                icon: ShieldCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} className="principle-card" delay={index * 0.08}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function SubsidiariesContent() {
  return (
    <section className="inner-section inner-section--light">
      <div className="site-container">
        <Reveal>
          <InnerHeading
            eyebrow="شبکه شرکت‌ها"
            title="ساختاری تخصصی برای یک هدف مشترک"
            description="هر شرکت بخشی تخصصی از عملیات گروه را بر عهده دارد و در چارچوب راهبردی واحد فعالیت می‌کند."
          />
        </Reveal>
        <div className="inner-companies-grid">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <Reveal key={company.title} delay={(index % 4) * 0.05}>
                <motion.article className="inner-company-card" whileHover={{ y: -6 }}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <Icon aria-hidden="true" />
                  </div>
                  <small>{company.area}</small>
                  <h2>{company.title}</h2>
                  <Link href="/contact">
                    ارتباط با گروه
                    <ArrowLeft size={15} />
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="inner-structure-band">
          <div>
            <Handshake aria-hidden="true" />
            <span>یک مدیریت راهبردی</span>
          </div>
          <strong>۱۱ شرکت، یک زنجیره منسجم</strong>
          <Link href="/value-chain">
            مشاهده زنجیره ارزش
            <ArrowLeft size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ValueChainContent() {
  return (
    <section className="inner-section inner-section--light">
      <div className="site-container">
        <Reveal>
          <InnerHeading
            eyebrow="فرایند یکپارچه"
            title="شش حلقه، یک جریان عملیاتی"
            description="هماهنگی میان حلقه‌ها، امکان کنترل کیفیت و مدیریت مؤثر ظرفیت را در کل گروه فراهم می‌کند."
          />
        </Reveal>
        <div className="inner-process">
          {process.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="inner-process__item" delay={index * 0.06}>
                <span className="inner-process__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="inner-process__icon">
                  <Icon aria-hidden="true" />
                </div>
                <div className="inner-process__copy">
                  <small>مرحله {index + 1}</small>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="inner-process__line" aria-hidden="true" />
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="inner-chain-cta">
        <div className="site-container">
          <div>
            <span>کنترل یکپارچه عملیات</span>
            <h2>کیفیت در تمام مسیر، از مبدأ تا بازار</h2>
          </div>
          <Link href="/capabilities">
            مشاهده توانمندی‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesContent() {
  return (
    <>
      <section className="inner-section inner-section--light">
        <div className="site-container">
          <Reveal>
            <InnerHeading
              eyebrow="مزیت‌های راهبردی"
              title="زیرساختی برای رشد پایدار"
              description="توانمندی‌های صباح حاصل هم‌افزایی ظرفیت صنعتی، مدیریت، فناوری و شبکه بازار است."
            />
          </Reveal>
          <div className="inner-capabilities-grid">
            {capabilityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 3) * 0.07}>
                  <motion.article className="inner-capability-card" whileHover={{ y: -6 }}>
                    <div>
                      <Icon aria-hidden="true" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="capability-showcase">
        <div className="capability-showcase__image" aria-hidden="true" />
        <div className="capability-showcase__overlay" aria-hidden="true" />
        <div className="site-container capability-showcase__content">
          <Reveal>
            <span>مقیاس عملیات</span>
            <strong>۱۰۰۰ تن</strong>
            <h2>دریافت روزانه شیر خام</h2>
            <p>
              ظرفیتی که با شبکه شرکت‌های تخصصی، زیرساخت تولید و مدیریت هماهنگ
              پشتیبانی می‌شود.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function NewsContent() {
  return (
    <section className="inner-section inner-section--light">
      <div className="site-container">
        <Reveal>
          <InnerHeading
            eyebrow="آخرین رویدادها"
            title="تازه‌ترین اخبار گروه"
            description="گزارش کوتاه تازه‌ترین برنامه‌ها و رویدادهای گروه صنعتی صباح."
          />
        </Reveal>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 0.07}>
              <article className={`news-card news-card--${(index % 3) + 1}`}>
                <div className="news-card__media">
                  <span>{item.category}</span>
                </div>
                <div className="news-card__body">
                  <time>
                    <CalendarDays size={15} aria-hidden="true" />
                    {item.date}
                  </time>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={`mailto:info@sabahholding.com?subject=${encodeURIComponent(item.title)}`}>
                    درخواست اطلاعات بیشتر
                    <ArrowUpLeft size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="inner-section inner-section--light">
      <div className="site-container contact-layout">
        <Reveal className="contact-details">
          <InnerHeading
            eyebrow="اطلاعات تماس"
            title="گفت‌وگو با گروه صنعتی صباح"
            description="پیام شما برای واحد مرتبط ارسال خواهد شد. برای ارتباط فوری می‌توانید از اطلاعات زیر استفاده کنید."
          />
          <address>
            <div>
              <span><MapPin aria-hidden="true" /></span>
              <p>
                <small>نشانی دفتر مرکزی</small>
                تهران، بلوار نلسون ماندلا، پلاک ۳۲
              </p>
            </div>
            <div>
              <span><Phone aria-hidden="true" /></span>
              <p>
                <small>شماره تماس</small>
                <a href="tel:+982142345678">۰۲۱-۴۲۳۴۵۶۷۸</a>
              </p>
            </div>
            <div>
              <span><Mail aria-hidden="true" /></span>
              <p>
                <small>پست الکترونیک</small>
                <a href="mailto:info@sabahholding.com">info@sabahholding.com</a>
              </p>
            </div>
          </address>
          <div className="contact-map">
            <MapPin aria-hidden="true" />
            <span>دفتر مرکزی گروه صنعتی صباح</span>
            <small>تهران، بلوار نلسون ماندلا</small>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.1}>
          <span className="contact-form-wrap__eyebrow">فرم ارتباط</span>
          <h2>پیام خود را برای ما بنویسید</h2>
          <form action="mailto:info@sabahholding.com" method="post" encType="text/plain">
            <div className="form-row">
              <label>
                نام و نام خانوادگی
                <input name="name" type="text" required placeholder="نام شما" />
              </label>
              <label>
                شماره تماس
                <input name="phone" type="tel" inputMode="tel" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
              </label>
            </div>
            <label>
              پست الکترونیک
              <input name="email" type="email" required placeholder="name@example.com" dir="ltr" />
            </label>
            <label>
              موضوع پیام
              <select name="subject" defaultValue="">
                <option value="" disabled>انتخاب موضوع</option>
                <option value="همکاری تجاری">همکاری تجاری</option>
                <option value="ارتباط با شرکت‌های گروه">ارتباط با شرکت‌های گروه</option>
                <option value="رسانه و روابط عمومی">رسانه و روابط عمومی</option>
                <option value="سایر">سایر</option>
              </select>
            </label>
            <label>
              متن پیام
              <textarea name="message" rows={5} required placeholder="پیام خود را بنویسید..." />
            </label>
            <button type="submit">
              ارسال از طریق ایمیل
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function PageContent({ page }: { page: InnerPageKey }) {
  switch (page) {
    case "about":
      return <AboutContent />;
    case "subsidiaries":
      return <SubsidiariesContent />;
    case "value-chain":
      return <ValueChainContent />;
    case "capabilities":
      return <CapabilitiesContent />;
    case "news":
      return <NewsContent />;
    case "contact":
      return <ContactContent />;
  }
}

export function InnerPage({ page }: { page: InnerPageKey }) {
  return (
    <>
      <Header />
      <main>
        <PageHero page={page} />
        <PageContent page={page} />
      </main>
      <Footer />
    </>
  );
}
