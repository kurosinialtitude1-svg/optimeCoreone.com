'use client'

import { useState } from 'react'

const C = {
    opal: '#A8BDBF',
    columbiaBlue: '#C5D7D9',
    ming: '#3F7373',
    palmLeaf: '#768C45',
    // Dark theme backgrounds
    bg: '#0C1414',   // near-black teal
    surface: '#121F1F',   // cards base
    surface2: '#182828',   // slightly lighter cards
    border: '#1E3535',   // subtle borders
    borderGlow: '#3F737360', // ming-tinted border
}

const plans = [
    {
        name: 'Starter',
        monthlyPrice: 149,
        annualPrice: 1490,
        description: 'Perfect for small operations',
        badge: null,
        accent: C.palmLeaf,
        accentDim: '#768C4525',
        features: [
            'Up to 5 production lines',
            'Real-time monitoring',
            'Email alerts',
            'Basic analytics',
            'Mobile app access',
            'Community support',
        ],
        cta: 'Start Free Trial',
        highlighted: false,
    },
    {
        name: 'Professional',
        monthlyPrice: 399,
        annualPrice: 3990,
        description: 'For growing manufacturers',
        badge: 'Most Popular',
        accent: C.opal,
        accentDim: '#A8BDBF20',
        features: [
            'Unlimited production lines',
            'AI-powered predictions',
            'Custom alerts & webhooks',
            'Advanced analytics & reports',
            'Role-based dashboards',
            'API access',
            'Priority support',
            'SSO & audit logs',
        ],
        cta: 'Start Free Trial',
        highlighted: true,
    },
    {
        name: 'Enterprise',
        monthlyPrice: null,
        annualPrice: null,
        description: 'Custom solutions at scale',
        badge: null,
        accent: C.ming,
        accentDim: '#3F737325',
        features: [
            'Everything in Professional',
            'Dedicated account manager',
            'Custom integrations',
            'On-premise deployment',
            'Advanced security & compliance',
            'SLA guarantees',
            'Training & consulting',
            '24/7 phone support',
        ],
        cta: 'Contact Sales',
        highlighted: false,
    },
]

export default function PricingDark() {
    const [isAnnual, setIsAnnual] = useState(false)

    const price = (plan) => {
        if (!plan.monthlyPrice) return 'Custom'
        return isAnnual ? `$${plan.annualPrice}` : `$${plan.monthlyPrice}`
    }

    return (
        <div style={{ background: C.bg, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .p-root {
          font-family: 'Inter', sans-serif;
          color: ${C.columbiaBlue};
        }

        /* ── Ambient glow orbs ── */
        .orb {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .orb-1 {
          width: 500px; height: 500px;
          top: -150px; right: -100px;
          background: ${C.ming}30;
        }
        .orb-2 {
          width: 400px; height: 400px;
          bottom: -120px; left: -80px;
          background: ${C.palmLeaf}20;
        }
        .orb-3 {
          width: 300px; height: 300px;
          top: 45%; left: 40%;
          background: ${C.opal}12;
        }

        /* ── Grid texture ── */
        .grid-overlay {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(${C.opal}06 1px, transparent 1px),
            linear-gradient(90deg, ${C.opal}06 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 90px 24px 100px;
        }

        /* ── Header ── */
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${C.opal};
          border: 1px solid ${C.opal}35;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 28px;
          background: ${C.opal}08;
        }

        .eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: ${C.palmLeaf};
          box-shadow: 0 0 8px ${C.palmLeaf};
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(32px, 4.5vw, 60px);
          font-weight: 700;
          line-height: 1.1;
          color: #e8f0f0;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .section-title .highlight {
          color: transparent;
          -webkit-text-stroke: 1.5px ${C.ming};
          font-style: italic;
        }

        .section-title .accent-word {
          color: ${C.opal};
        }

        .section-subtitle {
          font-size: 16px;
          color: ${C.opal}90;
          font-weight: 300;
          max-width: 460px;
          line-height: 1.8;
          margin-bottom: 52px;
        }

        /* ── Toggle ── */
        .toggle-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 72px;
        }

        .tlabel {
          font-size: 13px;
          color: ${C.opal}60;
          transition: color 0.2s;
          font-weight: 400;
        }
        .tlabel.on { color: #e8f0f0; font-weight: 500; }

        .ttrack {
          width: 50px; height: 26px;
          background: ${C.ming};
          border-radius: 100px;
          position: relative;
          cursor: pointer;
          border: none;
          outline: none;
          box-shadow: 0 0 16px ${C.ming}60;
        }

        .tthumb {
          position: absolute;
          top: 3px; left: 3px;
          width: 20px; height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .tthumb.on { transform: translateX(24px); }

        .save-pill {
          background: ${C.palmLeaf}25;
          border: 1px solid ${C.palmLeaf}50;
          color: ${C.palmLeaf};
          font-size: 11px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.5px;
        }

        /* ── Cards ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 60px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .cards-grid { grid-template-columns: 1fr; }
        }

        .card {
          background: ${C.surface};
          border: 1px solid ${C.border};
          border-radius: 20px;
          padding: 36px 32px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 60%, ${C.opal}04 100%);
          pointer-events: none;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: ${C.ming}60;
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${C.ming}20;
        }

        .card.featured {
          background: linear-gradient(145deg, ${C.surface2}, #0f2020);
          border: 1px solid ${C.ming};
          transform: translateY(-16px) scale(1.03);
          box-shadow:
            0 0 0 1px ${C.ming}40,
            0 40px 80px rgba(0,0,0,0.5),
            0 0 60px ${C.ming}20;
        }

        .card.featured:hover {
          transform: translateY(-22px) scale(1.03);
          box-shadow:
            0 0 0 1px ${C.ming}60,
            0 48px 100px rgba(0,0,0,0.6),
            0 0 80px ${C.ming}30;
        }

        /* Glow line at top of featured */
        .card.featured::after {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${C.opal}, transparent);
        }

        .card-badge {
          position: absolute;
          top: -13px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, ${C.ming}, #5a9a9a);
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 18px;
          border-radius: 100px;
          white-space: nowrap;
          box-shadow: 0 4px 16px ${C.ming}60;
        }

        .accent-bar {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .card-name {
          font-family: 'Cinzel', serif;
          font-size: 22px;
          font-weight: 700;
          color: #e8f0f0;
          margin-bottom: 6px;
          letter-spacing: 1px;
        }

        .card-desc {
          font-size: 13px;
          color: ${C.opal}70;
          font-weight: 300;
          margin-bottom: 28px;
        }

        .price-val {
          font-family: 'Cinzel', serif;
          font-size: 54px;
          font-weight: 900;
          color: #e8f0f0;
          line-height: 1;
          letter-spacing: 2px;
        }

        .card.featured .price-val {
          color: ${C.opal};
        }

        .price-period {
          font-size: 13px;
          color: ${C.opal}60;
          margin-top: 6px;
          font-weight: 300;
        }

        .price-sub {
          font-size: 11px;
          color: ${C.opal}45;
          margin-top: 3px;
        }

        .price-block { margin-bottom: 28px; }

        .cta-btn {
          width: 100%;
          padding: 13px 20px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          border: none;
          transition: all 0.25s ease;
          margin-bottom: 10px;
          letter-spacing: 0.2px;
        }

        .cta-default {
          background: ${C.surface2};
          border: 1px solid ${C.border};
          color: ${C.opal};
        }
        .cta-default:hover {
          border-color: ${C.ming};
          color: #e8f0f0;
          background: ${C.ming}18;
        }

        .cta-featured {
          background: linear-gradient(135deg, ${C.ming}, #5a9a9a);
          color: white;
          box-shadow: 0 8px 24px ${C.ming}50;
        }
        .cta-featured:hover {
          box-shadow: 0 12px 32px ${C.ming}70;
          transform: translateY(-1px);
        }

        .trial-note {
          font-size: 11px;
          color: ${C.opal}40;
          text-align: center;
          margin-bottom: 28px;
        }

        .divider {
          height: 1px;
          background: ${C.border};
          margin-bottom: 24px;
        }

        .card.featured .divider {
          background: ${C.ming}40;
        }

        .feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
        }

        .feat-dot {
          width: 18px; height: 18px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .feat-text {
          font-size: 13px;
          color: ${C.opal}80;
          font-weight: 300;
          line-height: 1.5;
        }

        .card.featured .feat-text {
          color: ${C.columbiaBlue}cc;
        }

        /* ── Comparison Table ── */
        .table-wrap {
          background: ${C.surface};
          border: 1px solid ${C.border};
          border-radius: 20px;
          overflow: hidden;
        }

        .t-head {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: ${C.surface2};
          border-bottom: 1px solid ${C.border};
        }

        .th {
          padding: 18px 24px;
          font-family: 'Cinzel', serif;
          font-size: 13px;
          font-weight: 700;
          color: ${C.opal}80;
          text-align: center;
          letter-spacing: 0.5px;
        }
        .th:first-child { text-align: left; color: #e8f0f0; }

        .t-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-bottom: 1px solid ${C.border}80;
          transition: background 0.15s;
        }
        .t-row:last-child { border-bottom: none; }
        .t-row:hover { background: ${C.surface2}; }

        .td {
          padding: 15px 24px;
          font-size: 13px;
          color: ${C.opal}60;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .td:first-child {
          text-align: left;
          justify-content: flex-start;
          color: #c8dcdc;
          font-weight: 500;
        }

        .td-yes { color: ${C.palmLeaf}; font-weight: 600; }
        .td-dash { color: ${C.border}; }
        .td-val { color: ${C.opal}; font-weight: 500; }
      `}</style>

            <div className="p-root">
                {/* Ambient */}
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
                <div className="grid-overlay" />

                <div className="content">
                    {/* Header */}
                    <span className="eyebrow">Pricing Plans</span>
                    <h2 className="section-title">
                        Simple,<br />
                        <span className="highlight">transparent</span>{' '}
                        <span className="accent-word">pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        Built for manufacturers at every stage — from lean startups to global enterprises.
                    </p>

                    {/* Toggle */}
                    <div className="toggle-row">
                        <span className={`tlabel ${!isAnnual ? 'on' : ''}`}>Monthly</span>
                        <button className="ttrack" onClick={() => setIsAnnual(!isAnnual)} aria-label="Toggle billing">
                            <span className={`tthumb ${isAnnual ? 'on' : ''}`} />
                        </button>
                        <span className={`tlabel ${isAnnual ? 'on' : ''}`}>Annual</span>
                        {isAnnual && <span className="save-pill">Save 17%</span>}
                    </div>

                    {/* Cards */}
                    <div className="cards-grid">
                        {plans.map((plan, i) => (
                            <div key={i} className={`card ${plan.highlighted ? 'featured' : ''}`}>
                                {plan.badge && <div className="card-badge">{plan.badge}</div>}

                                <div className="accent-bar" style={{ background: plan.accent, boxShadow: `0 0 12px ${plan.accent}80` }} />

                                <div className="card-name">{plan.name}</div>
                                <div className="card-desc">{plan.description}</div>

                                <div className="price-block">
                                    <div className="price-val">{price(plan)}</div>
                                    {plan.monthlyPrice && (
                                        <div className="price-period">/ {isAnnual ? 'year' : 'month'}</div>
                                    )}
                                    {plan.monthlyPrice && (
                                        <div className="price-sub">
                                            {isAnnual
                                                ? `$${Math.round(plan.annualPrice / 12)}/mo billed annually`
                                                : 'Billed monthly'}
                                        </div>
                                    )}
                                </div>

                                <button className={`cta-btn ${plan.highlighted ? 'cta-featured' : 'cta-default'}`}>
                                    {plan.cta}
                                </button>
                                {plan.monthlyPrice && (
                                    <p className="trial-note">14-day free trial · No credit card required</p>
                                )}

                                <div className="divider" />

                                {plan.features.map((f, fi) => (
                                    <div key={fi} className="feat-item">
                                        <div className="feat-dot" style={{ background: plan.accentDim }}>
                                            <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                                                <path d="M1 3.5L3 5.5L7 1" stroke={plan.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="feat-text">{f}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Table */}
                    <div className="table-wrap">
                        <div className="t-head">
                            <div className="th">Feature</div>
                            <div className="th">Starter</div>
                            <div className="th">Professional</div>
                            <div className="th">Enterprise</div>
                        </div>
                        {[
                            { feature: 'Production Lines', s: '5', p: 'Unlimited', e: 'Unlimited' },
                            { feature: 'AI Predictions', s: null, p: true, e: true },
                            { feature: 'API Access', s: null, p: true, e: true },
                            { feature: 'On-Premise', s: null, p: null, e: true },
                            { feature: 'Dedicated Support', s: null, p: 'Email', e: '24/7 Phone' },
                        ].map((row, i) => {
                            const cell = (val) => {
                                if (val === null) return <span className="td-dash">—</span>
                                if (val === true) return <span className="td-yes">✓</span>
                                return <span className="td-val">{val}</span>
                            }
                            return (
                                <div key={i} className="t-row">
                                    <div className="td">{row.feature}</div>
                                    <div className="td">{cell(row.s)}</div>
                                    <div className="td">{cell(row.p)}</div>
                                    <div className="td">{cell(row.e)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}