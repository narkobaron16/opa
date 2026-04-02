import React from 'react';
const VideoNews = () => {
    const videos = [
        {
            title: "Mars Exploration: Unveiling Alien Landscapes",
            desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
            embedId: "D8pnmwOXhoY",
        },
        {
            title: "Blockchain Explained: A Revolution in Finance",
            desc: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
            duration: "2.30 min",
            embedId: "6nDmtt1I4TY",
        },
        {
            title: "Breaking the Silence: Mental Health Awareness in the Workplace",
            desc: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces.",
            duration: "2.30 min",
            embedId: "pQpFebyALV0",
        },
        {
            title: "Revolutionizing Investment Strategies",
            desc: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
            duration: "2.30 min",
            embedId: "-8hUiJYXfVY",
        }
    ];
    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen p-6 md:p-10">
            <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {videos.map((video, index) => (
                        <div key={index} className="group">
                            <div className="relative aspect-video mb-6 overflow-hidden rounded-2xl border border-white/5 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="text-xl font-medium mb-3 group-hover:text-gray-300 transition-colors">
                                {video.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                {video.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VideoNews;