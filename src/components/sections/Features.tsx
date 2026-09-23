export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Fast & Reliable',
      description: 'Experience lightning-fast load times and unmatched reliability for uninterrupted learning.'
    },
    {
      icon: '🧠',
      title: 'Smart Analytics',
      description: 'Track your progress with intelligent insights that help you focus on areas of improvement.'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Connect with a vibrant community of learners and experts to share knowledge and grow together.'
    }
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Edorapad?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the features that make our platform the best choice for your educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-gray-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-4xl mb-6 inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-2xl shadow-[0_4px_10px_rgba(45,140,122,0.1)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
