import { Twitter, Linkedin, Github, ArrowUpRight, LucideIcon } from 'lucide-react';

const ContactLink = ({ text, href = "#" }: { text: string; href?: string }) => (
    <a
        href={href}
        className="flex items-center justify-between w-full bg-[#161616] border border-white/5 p-4 rounded-lg group hover:border-yellow-400/50 transition-all duration-300"
    >
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{text}</span>
        <ArrowUpRight className="w-4 h-4 text-yellow-400" />
    </a>
);

const SocialBox = ({ Icon }: { Icon: LucideIcon }) => (
    <a
        href="#"
        className="w-12 h-12 flex items-center justify-center bg-[#161616] border border-white/5 rounded-lg text-white hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-sm"
    >
        <Icon className="w-5 h-5" />
    </a>
);

export const ContactInfo = () => {
    return (
        <section className="border-b border-white/5 px-6 md:px-10 bg-[#050505]">
            {/* Убрали border и rounded у контейнера.
               Оставили только divide-x для внутренних линий.
            */}
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/10">

                {/* Каждая колонка теперь имеет отступы, но линии только МЕЖДУ ними */}
                <div className="space-y-6 py-6 md:p-8 first:pl-0 last:pr-0">
                    <h3 className="text-white text-sm font-medium">General Inquiries</h3>
                    <div className="space-y-3">
                        <ContactLink text="contact@ai-podcasts.com" />
                        <ContactLink text="+1 (123) 456-7890" />
                    </div>
                </div>

                <div className="space-y-6 py-6 md:p-8 lg:px-10">
                    <h3 className="text-white text-sm font-medium">Technical Support</h3>
                    <div className="space-y-3">
                        <ContactLink text="contact@ai-podcasts.com" />
                        <ContactLink text="+1 (123) 456-7890" />
                    </div>
                </div>

                <div className="space-y-6 py-6 md:p-8 lg:px-10">
                    <h3 className="text-white text-sm font-medium">Our Office</h3>
                    <div className="space-y-4">
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Address: 123 AI Tech Avenue, Techville, 54321
                        </p>
                        <ContactLink text="Get Directions" />
                    </div>
                </div>

                <div className="space-y-6 py-6 md:p-8 last:pr-0 lg:pl-10">
                    <h3 className="text-white text-sm font-medium">Connect with Us</h3>
                    <div className="flex gap-3">
                        <SocialBox Icon={Twitter} />
                        {/* Иконка в центре на макете похожа на Medium или логотип из двух кругов */}
                        <SocialBox Icon={Github} />
                        <SocialBox Icon={Linkedin} />
                    </div>
                </div>

            </div>
        </section>
    );
};