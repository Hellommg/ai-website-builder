import React from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      color: 'from-slate-700 to-slate-800',
      features: [
        { icon: '✓', text: '1 Website', included: true },
        { icon: '✓', text: 'Basic AI content (50/month)', included: true },
        { icon: '✓', text: '3 Templates', included: true },
        { icon: '✗', text: 'Custom Domain', included: false },
        { icon: '✗', text: 'Email Support', included: false },
        { icon: '✗', text: 'Advanced Analytics', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'For growing businesses',
      color: 'from-blue-600 to-purple-600',
      popular: true,
      features: [
        { icon: '✓', text: 'Unlimited Websites', included: true },
        { icon: '✓', text: 'Unlimited AI Requests', included: true },
        { icon: '✓', text: '100+ Premium Templates', included: true },
        { icon: '✓', text: 'Custom Domain Support', included: true },
        { icon: '✓', text: 'Email & Chat Support', included: true },
        { icon: '✓', text: 'Analytics Dashboard', included: true },
      ],
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'For scale-ups',
      color: 'from-purple-600 to-pink-600',
      features: [
        { icon: '✓', text: 'Everything in Pro', included: true },
        { icon: '✓', text: '24/7 Priority Support', included: true },
        { icon: '✓', text: 'White-Label Option', included: true },
        { icon: '✓', text: 'API Access', included: true },
        { icon: '✓', text: 'Dedicated Account Manager', included: true },
        { icon: '✓', text: 'Advanced Integrations', included: true },
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen py-24">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Simple, Transparent Pricing
          </h1>
          <p className="text-2xl text-gray-300 mb-4">Start free. Upgrade anytime.</p>
          <p className="text-gray-400">No credit card required. Cancel anytime.</p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-800/50 border border-slate-700 rounded-lg p-1">
            <button className="px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-600 font-bold">
              Monthly
            </button>
            <button className="px-6 py-2 rounded text-gray-400 font-bold">
              Annually <span className="text-green-400 text-sm ml-2">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-50 blur`}></div>

              <div className={`relative bg-slate-900/90 backdrop-blur rounded-2xl p-8 h-full border ${
                plan.popular ? 'border-purple-500/50' : 'border-slate-700/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-bold flex items-center gap-2">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Plan Name & Description */}
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                  {plan.name === 'Starter' && <p className="text-sm text-gray-500">Forever free</p>}
                </div>

                {/* CTA Button */}
                <Link
                  to="/dashboard"
                  className={`block text-center w-full py-3 rounded-lg font-bold mb-8 transition ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-slate-800 border border-slate-700 hover:border-purple-500'
                  }`}
                >
                  Get Started
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className={feature.included ? 'text-green-400' : 'text-gray-600'}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span className={feature.included ? 'text-gray-200' : 'text-gray-600'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Detailed Comparison
          </h2>

          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-6 font-bold">Feature</th>
                  <th className="text-center p-6 font-bold">Starter</th>
                  <th className="text-center p-6 font-bold bg-gradient-to-b from-purple-600/20 to-transparent">Pro</th>
                  <th className="text-center p-6 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Websites', '1', '∞', '∞'],
                  ['AI Requests/month', '50', '∞', '∞'],
                  ['Templates', '3', '100+', '150+'],
                  ['Storage', '1GB', '50GB', '500GB'],
                  ['Bandwidth', '10GB', '200GB', 'Unlimited'],
                  ['Domain Support', '✗', '✓', '✓'],
                  ['Email Support', '✗', '✓', '✓'],
                  ['Phone Support', '✗', '✗', '✓'],
                  ['API Access', '✗', '✗', '✓'],
                  ['White Label', '✗', '✗', '✓'],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-700 ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
                    <td className="p-6 font-bold text-gray-200">{row[0]}</td>
                    <td className="p-6 text-center text-gray-400">{row[1]}</td>
                    <td className="p-6 text-center text-white bg-purple-600/10">{row[2]}</td>
                    <td className="p-6 text-center text-gray-400">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'Can I change plans anytime?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate charges accordingly.'
              },
              {
                q: 'Is there a free trial for paid plans?',
                a: 'Yes! Get 14 days free on Pro and Premium plans. No credit card required to start.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express) through Stripe. For annual plans, we also offer invoice billing.'
              },
              {
                q: 'Do you offer refunds?',
                a: '30-day money-back guarantee on all paid plans. If you\'re not satisfied, we\'ll refund your payment, no questions asked.'
              },
              {
                q: 'Can I use one account for multiple websites?',
                a: 'Yes! Pro and Premium plans include unlimited websites. Starter plan is limited to 1 website.'
              },
              {
                q: 'Is there an annual discount?',
                a: 'Yes! Pay annually and save 20% on any plan. Starter plan remains free forever.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-500/50 transition">
                <h3 className="font-bold text-lg mb-3 text-purple-300">Q: {item.q}</h3>
                <p className="text-gray-300">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of creators building with AI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
