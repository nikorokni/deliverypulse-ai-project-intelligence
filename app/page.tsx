"use client";

import { useMemo, useState } from "react";

type View = "overview" | "delivery" | "risks" | "roadmap";

const nav: { id: View; label: string }[] = [
  { id: "overview", label: "Command center" },
  { id: "delivery", label: "Delivery" },
  { id: "risks", label: "Risks" },
  { id: "roadmap", label: "Roadmap" },
];

const risks = [
  { id: "R-014", title: "Identity API dependency", owner: "Platform", impact: "Critical", probability: 82, due: "12 Aug" },
  { id: "R-021", title: "Mobile QA capacity", owner: "Quality", impact: "High", probability: 68, due: "14 Aug" },
  { id: "R-008", title: "Analytics event gaps", owner: "Data", impact: "Medium", probability: 44, due: "16 Aug" },
];

const work = [
  { label: "Checkout redesign", value: 88, color: "mint" },
  { label: "Identity migration", value: 61, color: "amber" },
  { label: "Mobile onboarding", value: 73, color: "blue" },
  { label: "Event instrumentation", value: 47, color: "violet" },
];

const teams = [
  { name: "Backend", load: 118, tone: "danger", people: 6 },
  { name: "Mobile", load: 96, tone: "warning", people: 4 },
  { name: "Web", load: 84, tone: "healthy", people: 5 },
  { name: "Data", load: 72, tone: "healthy", people: 3 },
];

function Icon({ name }: { name: "grid" | "pulse" | "risk" | "roadmap" | "spark" | "arrow" }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
    pulse: <path d="M3 12h4l2.5-6 4.5 12 2.5-6H21"/>,
    risk: <><path d="M12 3 2.8 19h18.4L12 3Z"/><path d="M12 9v4M12 16h.01"/></>,
    roadmap: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h4a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3"/></>,
    spark: <path d="m12 2 1.3 5.2L18 10l-4.7 2.8L12 18l-1.3-5.2L6 10l4.7-2.8L12 2Z"/>,
    arrow: <path d="m9 18 6-6-6-6"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [view, setView] = useState<View>("overview");
  const [scenario, setScenario] = useState<"current" | "trim" | "delay">("current");
  const [resolved, setResolved] = useState<string[]>([]);
  const metrics = useMemo(() => {
    if (scenario === "trim") return { confidence: 86, date: "29 Aug", scope: "-2 features", risk: "Moderate" };
    if (scenario === "delay") return { confidence: 94, date: "12 Sep", scope: "Full scope", risk: "Low" };
    return { confidence: 62, date: "29 Aug", scope: "Full scope", risk: "High" };
  }, [scenario]);

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark"><i/><i/><i/></span><span>Delivery<span>Pulse</span></span></div>
        <p className="workspace-label">Workspace</p>
        <div className="workspace"><div className="workspace-icon">N</div><div><strong>Nova Commerce</strong><small>Growth portfolio</small></div><span>⌄</span></div>
        <nav aria-label="Primary navigation">
          {nav.map((item, index) => <button key={item.id} className={view === item.id ? "active" : ""} onClick={() => setView(item.id)}><Icon name={(index === 0 ? "grid" : index === 1 ? "pulse" : index === 2 ? "risk" : "roadmap")}/>{item.label}{item.id === "risks" && <b>3</b>}</button>)}
        </nav>
        <div className="sidebar-foot"><div className="health-dot"/><div><strong>All systems operational</strong><small>Synced 2 minutes ago</small></div></div>
      </aside>

      <section className="content">
        <header className="topbar"><div><p>Portfolio / Nova Commerce</p><h1>{nav.find(n => n.id === view)?.label}</h1></div><div className="top-actions"><button className="icon-btn" aria-label="Notifications">●</button><div className="avatar">NR</div><div className="user"><strong>Niko Rokni</strong><small>Product lead</small></div></div></header>

        {view === "overview" && <>
          <section className="hero">
            <div><span className="eyebrow"><Icon name="spark"/>AI DELIVERY BRIEF</span><h2>Your release needs one decision,<br/>not another status meeting.</h2><p>Identity migration is blocking three critical paths. Reducing scope by two features raises on-time confidence from 62% to 86%.</p></div>
            <button onClick={() => setScenario("trim")}>Apply recommended scenario <Icon name="arrow"/></button>
          </section>

          <div className="scenario-row"><span>Release scenario</span>{(["current","trim","delay"] as const).map(s => <button key={s} onClick={() => setScenario(s)} className={scenario === s ? "selected" : ""}>{s === "current" ? "Current plan" : s === "trim" ? "Trim scope" : "Delay 2 weeks"}</button>)}</div>

          <section className="metric-grid">
            <article className="metric primary"><div className="metric-head"><span>Release confidence</span><em className={metrics.confidence > 80 ? "good" : "bad"}>{metrics.confidence > 80 ? "↑ 24 pts" : "↓ 11 pts"}</em></div><div className="score"><strong>{metrics.confidence}</strong><small>%</small><div className="ring" style={{"--score": `${metrics.confidence * 3.6}deg`} as React.CSSProperties}/></div><p>{metrics.confidence > 80 ? "Plan is within acceptable delivery tolerance." : "At risk — intervention recommended this week."}</p></article>
            <article className="metric"><div className="metric-head"><span>Target release</span><i>R-24.8</i></div><strong className="metric-value">{metrics.date}</strong><p>16 working days remaining</p><div className="micro-calendar"><b/><b/><b/><b/><b/><b/><b className="warn"/><b className="warn"/><b/><b/><b/><b/></div></article>
            <article className="metric"><div className="metric-head"><span>Scope position</span><i>{metrics.risk}</i></div><strong className="metric-value">{metrics.scope}</strong><p>38 of 52 stories completed</p><div className="progress"><span style={{width: scenario === "trim" ? "82%" : "73%"}}/></div><div className="legend"><span>Delivered 73%</span><span>Remaining 27%</span></div></article>
            <article className="metric"><div className="metric-head"><span>Open risks</span><em className="bad">3 require action</em></div><strong className="metric-value">7</strong><p>Across 4 active workstreams</p><div className="risk-stack"><span className="critical">2 critical</span><span className="high">3 high</span><span>2 medium</span></div></article>
          </section>

          <section className="dashboard-grid">
            <article className="panel workstreams"><div className="panel-title"><div><h3>Workstream health</h3><p>Delivery progress against current plan</p></div><button onClick={() => setView("delivery")}>View delivery</button></div>{work.map(w => <div className="work-row" key={w.label}><div><strong>{w.label}</strong><span>{w.value}%</span></div><div className="track"><i className={w.color} style={{width:`${w.value}%`}}/></div></div>)}</article>
            <article className="panel capacity"><div className="panel-title"><div><h3>Team capacity</h3><p>Allocated load for this sprint</p></div><span className="live">LIVE</span></div>{teams.map(t => <div className="team-row" key={t.name}><div><strong>{t.name}</strong><small>{t.people} people</small></div><div className="load-track"><i className={t.tone} style={{width:`${Math.min(t.load,100)}%`}}/></div><b className={t.tone}>{t.load}%</b></div>)}</article>
          </section>

          <section className="panel risk-panel"><div className="panel-title"><div><h3>Risks requiring a decision</h3><p>Ranked by probability × delivery impact</p></div><button onClick={() => setView("risks")}>Open risk register</button></div><div className="risk-table"><div className="risk-header"><span>Risk</span><span>Owner</span><span>Impact</span><span>Probability</span><span>Due</span><span/></div>{risks.filter(r => !resolved.includes(r.id)).map(r => <div className="risk-line" key={r.id}><span><b>{r.id}</b><strong>{r.title}</strong></span><span>{r.owner}</span><span><em className={`impact ${r.impact.toLowerCase()}`}>{r.impact}</em></span><span><i className="prob"><b style={{width:`${r.probability}%`}}/></i>{r.probability}%</span><span>{r.due}</span><button onClick={() => setResolved([...resolved,r.id])} aria-label={`Resolve ${r.title}`}>Resolve</button></div>)}</div></section>
        </>}

        {view === "delivery" && <DetailPage kicker="DELIVERY OPERATIONS" title="Sprint health & flow efficiency" intro="Track throughput, cycle time and delivery blockers across the portfolio."><div className="detail-cards"><MiniStat label="Sprint velocity" value="47 pts" note="+8% vs. 4-sprint average"/><MiniStat label="Cycle time" value="4.2 days" note="0.7 days above target"/><MiniStat label="Blocked work" value="11.5%" note="Identity API is the primary cause"/></div><div className="panel chart-panel"><div className="panel-title"><div><h3>Six-sprint throughput</h3><p>Completed story points vs. committed scope</p></div><span className="status-chip">Stable trend</span></div><div className="bar-chart">{[64,72,58,81,76,88].map((v,i)=><div key={i}><i style={{height:`${v}%`}}/><span>S{i+19}</span></div>)}</div></div></DetailPage>}
        {view === "risks" && <DetailPage kicker="PORTFOLIO CONTROL" title="Risk register" intro="Prioritised exposure with owners, due dates and a clear path to resolution."><div className="risk-board">{risks.map(r => <article key={r.id} className={resolved.includes(r.id) ? "resolved" : ""}><div><span>{r.id}</span><em className={`impact ${r.impact.toLowerCase()}`}>{r.impact}</em></div><h3>{r.title}</h3><p>Owner: {r.owner} · Due {r.due}</p><div className="probability"><i style={{width:`${r.probability}%`}}/><b>{r.probability}% probability</b></div><button onClick={() => setResolved(resolved.includes(r.id) ? resolved.filter(x=>x!==r.id) : [...resolved,r.id])}>{resolved.includes(r.id) ? "Reopen" : "Mark resolved"}</button></article>)}</div></DetailPage>}
        {view === "roadmap" && <DetailPage kicker="PRODUCT STRATEGY" title="Outcome-led roadmap" intro="Connect customer outcomes to executable milestones without turning the roadmap into a feature list."><div className="roadmap"><RoadmapQuarter q="NOW · Q3" title="Reduce checkout friction" items={["One-click identity","Mobile onboarding","Event baseline"]} tone="mint"/><RoadmapQuarter q="NEXT · Q4" title="Increase repeat purchase" items={["Smart reorder","Loyalty wallet","Lifecycle triggers"]} tone="blue"/><RoadmapQuarter q="LATER · Q1" title="Expand merchant value" items={["Partner API","Risk insights","Regional rollout"]} tone="violet"/></div></DetailPage>}
      </section>
    </main>
  );
}

function DetailPage({kicker,title,intro,children}:{kicker:string;title:string;intro:string;children:React.ReactNode}){return <section className="detail-page"><span className="detail-kicker">{kicker}</span><h2>{title}</h2><p className="detail-intro">{intro}</p>{children}</section>}
function MiniStat({label,value,note}:{label:string;value:string;note:string}){return <article><span>{label}</span><strong>{value}</strong><p>{note}</p></article>}
function RoadmapQuarter({q,title,items,tone}:{q:string;title:string;items:string[];tone:string}){return <article className={tone}><span>{q}</span><h3>{title}</h3>{items.map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><p>{x}</p></div>)}</article>}
