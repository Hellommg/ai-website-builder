import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  const [email, setEmail] = useState('')
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
          <span className="text-blue-300 text-sm font-semibold">✨ AI-Powered Website Builder</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Build Websites with AI
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Create stunning, professional websites in <span className="text-blue-300 font-bold">minutes</span>, not days. 
          Let AI generate your content, images, and design. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">No coding required.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
          >
            🚀 Start Free Trial
          </Link>
          <button
            onClick={() => setShowDemo(!showDemo)}
            className="px-8 py-4 border-2 border-purple-400 rounded-lg font-bold text-lg hover:bg-purple-400/10 transition"
          >
            📺 Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
          <div>
            <div className="text-4xl font-bold text-blue-400">10K+</div>
            <div className="text-gray-400">Websites Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400">2M+</div>
            <div className="text-gray-400">Pages Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400">50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </div>

        {/* Demo Video Placeholder */}
        {showDemo && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/50">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-gray-300">Demo video coming soon</p>
                  <p className="text-gray-500 text-sm mt-2">See how easy it is to build a website</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Feature - Live Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
          <div className="relative bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* Browser Tab */}
            <div className="bg-slate-900 border-b border-slate-700 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-gray-400 text-sm">example.ai-website.com</div>
            </div>

            {/* Website Preview */}
            <div className="bg-white text-slate-900 min-h-96">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
                <h1 className="text-4xl font-black mb-4">Your Awesome Business</h1>
                <p className="text-xl text-blue-100 mb-8">Professional Website Built in Minutes with AI</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                  Get Started Now
                </button>
              </div>

              <div className="px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {[
                    { icon: '⚡', title: 'Lightning Fast', desc: 'Deployed instantly to global CDN' },
                    { icon: '🔒', title: 'Secure', desc: 'SSL, backups, and security included' },
                    { icon: '📈', title: 'Analytics', desc: 'Track visitors and conversions' },
                  ].map((feature, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-8 text-center">
                  <p className="text-gray-600">© 2024 Your Business. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '🤖',
              title: 'AI Content Generation',
              desc: 'Write compelling copy, headlines, and descriptions instantly',
              features: ['Blog posts', 'Product descriptions', 'Meta tags', 'Call-to-actions']
            },
            {
              icon: '🖼️',
              title: 'AI Image Generation',
              desc: 'Create unique, professional images without stock photos',
              features: ['Product images', 'Hero banners', 'Social media', 'Custom artwork']
            },
            {
              icon: '🎨',
              title: 'Drag & Drop Builder',
              desc: 'Beautiful designs without touching a single line of code',
              features: ['Pre-built blocks', 'Templates', 'Responsive design', 'Real-time preview']
            },
            {
              icon: '🚀',
              title: 'One-Click Deploy',
              desc: 'Publish your website to the world instantly',
              features: ['Free hosting', 'SSL certificate', 'Global CDN', 'Auto backups']
            },
            {
              icon: '🌐',
              title: 'Custom Domain',
              desc: 'Connect your own domain or get a free subdomain',
              features: ['DNS management', 'Email forwarding', 'SSL included', 'Easy setup']
            },
            {
              icon: '📊',
              title: 'Analytics & SEO',
              desc: 'Track visitors and optimize for search engines',
              features: ['Visitor tracking', 'SEO tools', 'Heat maps', 'Conversion tracking']
            },
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition hover:shadow-lg hover:shadow-purple-500/20">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.desc}</p>
              <div className="flex flex-wrap gap-2">
                {feature.features.map((f, j) => (
                  <span key={j} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Starter',
              price: 'Free',
              desc: 'For trying it out',
              color: 'slate',
              features: ['1 website', '50 AI requests/mo', 'Basic templates', 'Community support']
            },
            {
              name: 'Pro',
              price: '$49',
              period: '/month',
              desc: 'For growing businesses',
              color: 'blue',
              popular: true,
              features: ['Unlimited websites', 'Unlimited AI', 'Premium templates', '100+ integrations', 'Priority support', 'Advanced analytics']
            },
            {
              name: 'Premium',
              price: '$99',
              period: '/month',
              desc: 'For scaling fast',
              color: 'purple',
              features: ['Everything in Pro', 'White-label option', 'API access', 'Dedicated manager', '24/7 phone support', 'Custom integrations']
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-xl border transition ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600/30 to-purple-600/30 border-purple-500/50 shadow-2xl shadow-purple-500/30 scale-105'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold">
                  ⭐ Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.period && <span className="text-gray-400">{plan.period}</span>}
              </div>

              <button className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}>
                Get Started
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Not sure? Start with our free plan. No credit card required.</p>
          <Link
            to="/dashboard"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
          >
            Try Free Now
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '1', title: 'Sign Up', desc: 'Create your free account in 30 seconds' },
            { number: '2', title: 'Tell AI', desc: 'Describe your business to our AI' },
            { number: '3', title: 'Customize', desc: 'Edit and personalize your design' },
            { number: '4', title: 'Launch', desc: 'Deploy and go live instantly' },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-black">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-5xl font-black text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-400">
          Loved by Creators
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Chen',
              role: 'Freelance Designer',
              content: 'I launched my portfolio in 10 minutes! The AI content generation saved me hours.',
              avatar: '👩‍💻'
            },
            {
              name: 'Marcus Johnson',
              role: 'Small Business Owner',
              content: 'Finally, I have a professional website. No expensive web developers needed!',
              avatar: '👨‍💼'
            },
            {
              name: 'Emily Rodriguez',
              role: 'Content Creator',
              content: 'The AI generates better copy than I could write myself. Highly recommend!',
              avatar: '👩‍🎨'
            },
          ].map((testimonial, i) => (
            <div key={i} className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-500/50 transition">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.content}"</p>
              <div className="mt-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 opacity-50"></div>

          <div className="relative text-center py-24 px-8">
            <h2 className="text-5xl font-black mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join thousands of entrepreneurs, freelancers, and small businesses creating with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-white rounded-lg font-bold text-lg hover:bg-white/10 transition"
              >
                View Pricing
              </Link>
            </div>

            <p className="text-blue-100 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">✨ AI Builder</h4>
              <p className="text-gray-400 text-sm">Create stunning websites with AI in minutes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 AI Website Builder. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
