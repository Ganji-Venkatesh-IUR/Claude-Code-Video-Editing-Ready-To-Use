import React from "react";
import { staticFile } from "remotion";
import { Icon, IconName } from "../../brand/Icon";
import { Scene, pop, prog, useSec } from "../../brand/motion";
import { BRAND, C, F, ZONE } from "../../brand/theme";

const W = 860;
const X = (1080 - W) / 2;

const panel: React.CSSProperties = {
  background: C.panel,
  border: `1px solid ${C.line}`,
  borderRadius: 32,
  boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
};

const mono = (size: number, color: string = C.dim, weight = 400): React.CSSProperties => ({
  fontFamily: F.mono,
  fontSize: size,
  color,
  fontWeight: weight,
  letterSpacing: 1.5,
});

/* ───────── 1. HOOK: perfect idea stuck at 99% ───────── */
const Hook: React.FC = () => {
  const t = useSec();
  const fill = prog(t, 0.3, 2.3);
  const pct = Math.floor(fill * 99);
  const stuck = t > 2.6;
  const flick = stuck ? 0.75 + 0.25 * Math.sin(t * 14) : 1;
  const secs = Math.max(0, t - 0.2);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(Math.floor(secs % 60)).padStart(2, "0");
  const years = Math.min(10, Math.floor(prog(t, 3.0, 1.8) * 10));
  const yP = prog(t, 3.0, 0.4);
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 20, width: W }}>
      <div style={{ ...panel, padding: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 34 }}>
          {[C.red, C.accent, C.green].map((c, i) => (
            <div key={i} style={{ width: 18, height: 18, borderRadius: 9, background: c, opacity: 0.85 }} />
          ))}
          <span style={{ ...mono(26), marginLeft: 14 }}>perfect_idea.exe</span>
        </div>
        <div
          style={{
            fontFamily: F.head,
            fontWeight: 700,
            fontSize: 230,
            lineHeight: 1,
            color: C.accent,
            opacity: flick,
            textShadow: `0 0 60px ${C.accentGlow}`,
          }}
        >
          {pct}%
        </div>
        <div style={{ height: 26, borderRadius: 13, background: "rgba(255,255,255,0.08)", marginTop: 26 }}>
          <div
            style={{
              width: `${fill * 99}%`,
              height: "100%",
              borderRadius: 13,
              background: C.accent,
              boxShadow: `0 0 24px ${C.accentGlow}`,
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 26 }}>
          <span style={mono(28)}>{stuck ? "waiting…" : "loading…"}</span>
          <span style={mono(28, C.text, 700)}>
            {mm}:{ss}
          </span>
        </div>
        <div
          style={{
            marginTop: 30,
            paddingTop: 26,
            borderTop: `1px solid ${C.line}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: yP,
            transform: `translateY(${(1 - yP) * 16}px)`,
          }}
        >
          <span style={mono(28, C.red, 700)}>YEARS WAITING</span>
          <span style={{ ...mono(52, C.red, 700) }}>{String(years).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

/* ───────── 2. GREAT IDEA ✕  vs  ONE SMALL PROBLEM ✓ ───────── */
const Compare: React.FC = () => {
  const t = useSec();
  const aIn = prog(t, 5.12, 0.4);
  const strike = prog(t, 6.5, 0.5);
  const bIn = prog(t, 7.84, 0.45);
  const dimA = 1 - 0.6 * prog(t, 6.9, 0.4);
  const card = (
    icon: IconName,
    title: string,
    sub: string,
    color: string,
    extra?: React.ReactNode,
  ) => (
    <div
      style={{
        ...panel,
        height: 270,
        padding: "0 46px",
        display: "flex",
        alignItems: "center",
        gap: 40,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 40,
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${C.line}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={86} color={color} stroke={1.6} />
      </div>
      <div>
        <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 56, color: C.text, lineHeight: 1.05 }}>{title}</div>
        <div style={{ ...mono(26), marginTop: 14 }}>{sub}</div>
      </div>
      {extra}
    </div>
  );
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 30, width: W }}>
      <div
        style={{
          opacity: aIn * dimA,
          transform: `translateY(${(1 - aIn) * 30}px)`,
          position: "relative",
        }}
      >
        {card(
          "bulb",
          "GREAT IDEA",
          "what people wait for",
          C.dim,
          <>
            <div
              style={{
                position: "absolute",
                left: 30,
                top: "50%",
                height: 8,
                width: `${strike * (W - 60)}px`,
                background: C.red,
                borderRadius: 4,
                boxShadow: `0 0 22px ${C.red}`,
              }}
            />
          </>,
        )}
      </div>
      <div
        style={{
          marginTop: 44,
          opacity: bIn,
          transform: `translateY(${(1 - bIn) * 40}px) scale(${0.96 + 0.04 * bIn})`,
          position: "relative",
        }}
      >
        <div
          style={{
            borderRadius: 32,
            boxShadow: `0 0 0 2px ${C.accent}, 0 0 60px ${C.accentSoft}, 0 0 120px ${C.accentSoft}`,
          }}
        >
          {card("target", "ONE SMALL PROBLEM", "where startups begin", C.accent)}
        </div>
        <div
          style={{
            position: "absolute",
            right: -14,
            top: -22,
            width: 74,
            height: 74,
            borderRadius: 37,
            background: C.green,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${pop(t, 8.5)})`,
          }}
        >
          <Icon name="check" size={44} color="#0B0B0F" stroke={3} />
        </div>
      </div>
    </div>
  );
};

/* ───────── 3. THREE STEPS ───────── */
const Steps: React.FC = () => {
  const t = useSec();
  const rows: { n: string; at: number; title: string; sub: string; icon: IconName }[] = [
    { n: "01", at: 10.36, title: "TARGET AUDIENCE", sub: "Pick one group of people", icon: "target" },
    { n: "02", at: 14.17, title: "ASK QUESTIONS", sub: "Many different types", icon: "chat" },
    { n: "03", at: 17.56, title: "VALIDATE", sub: "Check answers. Find the problem.", icon: "search" },
  ];
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 6, width: W }}>
      {rows.map((r, i) => {
        const p = prog(t, r.at, 0.45);
        const nextAt = rows[i + 1]?.at ?? 99;
        const active = t >= r.at && t < nextAt;
        const dim = active ? 1 : 0.5;
        return (
          <div
            key={r.n}
            style={{
              ...panel,
              height: 190,
              marginBottom: 28,
              padding: "0 40px",
              display: "flex",
              alignItems: "center",
              gap: 34,
              opacity: p * dim,
              transform: `translateX(${(1 - p) * 90}px)`,
              borderColor: active ? C.accent : C.line,
              boxShadow: active
                ? `0 0 0 1px ${C.accent}, 0 0 60px ${C.accentSoft}`
                : panel.boxShadow,
              position: "relative",
            }}
          >
            <div style={{ ...mono(62, C.accent, 700), width: 96 }}>{r.n}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 48, color: C.text, lineHeight: 1.05 }}>
                {r.title}
              </div>
              <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 28, color: C.dim, marginTop: 12 }}>
                {r.sub}
              </div>
            </div>
            <div
              style={{
                width: 118,
                height: 118,
                borderRadius: 32,
                background: active ? C.accentSoft : "rgba(255,255,255,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={r.icon} size={70} color={active ? C.accent : C.dim} />
            </div>
            {i === 2 && (
              <div
                style={{
                  position: "absolute",
                  right: 30,
                  top: -26,
                  padding: "10px 24px",
                  borderRadius: 24,
                  background: C.accent,
                  color: "#0B0B0F",
                  ...mono(24, "#0B0B0F", 700),
                  transform: `scale(${pop(t, 20.6)})`,
                }}
              >
                PROBLEM FOUND
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ───────── 4. THE FORMULA ───────── */
const Formula: React.FC = () => {
  const t = useSec();
  const lab = prog(t, 23.6, 0.5);
  const ph = prog(t, 24.9, 0.5);
  const cards: { at: number; icon: IconName; word: string }[] = [
    { at: 28.48, icon: "person", word: "CUSTOMER" },
    { at: 29.44, icon: "target", word: "PROBLEM" },
    { at: 30.34, icon: "bulb", word: "SOLUTION" },
  ];
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 20, width: W }}>
      <div style={{ opacity: lab, transform: `translateY(${(1 - lab) * 20}px)`, marginBottom: 40 }}>
        <div style={mono(34, C.accent, 700)}>THE FORMULA</div>
        <div style={{ height: 4, width: 150 * lab, background: C.accent, marginTop: 14, borderRadius: 2 }} />
      </div>
      <div style={{ display: "flex", gap: 25 }}>
        {cards.map((c) => {
          const filled = t >= c.at;
          const k = pop(t, c.at, 0.4);
          return (
            <div
              key={c.word}
              style={{
                width: 270,
                height: 470,
                borderRadius: 32,
                background: filled ? C.panel : "transparent",
                border: filled ? `2px solid ${C.accent}` : `2px dashed ${C.line}`,
                boxShadow: filled ? `0 0 70px ${C.accentSoft}` : "none",
                opacity: filled ? 1 : ph,
                transform: `scale(${filled ? 0.94 + 0.06 * k : 1})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 22,
              }}
            >
              {filled ? (
                <>
                  <div
                    style={{
                      fontFamily: F.head,
                      fontWeight: 700,
                      fontSize: 230,
                      lineHeight: 0.9,
                      color: C.accent,
                      textShadow: `0 0 50px ${C.accentGlow}`,
                    }}
                  >
                    1
                  </div>
                  <Icon name={c.icon} size={64} color={C.text} />
                  <div style={mono(28, C.text, 700)}>{c.word}</div>
                </>
              ) : (
                <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 150, color: C.line }}>?</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ───────── 5. RESEARCH DOCUMENT ───────── */
const Doc: React.FC = () => {
  const t = useSec();
  const items = [
    { at: 31.02, text: "Pick your customer" },
    { at: 33.1, text: "Ask the right questions" },
    { at: 35.23, text: "Find the real problem" },
  ];
  const stamp = prog(t, 37.15, 0.35);
  return (
    <div style={{ position: "absolute", left: 150, top: ZONE.visualTop + 6, width: 780 }}>
      <div style={{ ...panel, padding: "40px 46px 44px", height: 600, position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 28, borderBottom: `1px solid ${C.line}` }}>
          <Icon name="doc" size={48} color={C.accent} />
          <span style={mono(25, C.dim)}>startup_validation_guide.pdf</span>
        </div>
        <div style={{ marginTop: 40 }}>
          {items.map((it, i) => {
            const p = prog(t, it.at, 0.4);
            const checked = t >= it.at + 0.65;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 28,
                  marginBottom: 50,
                  opacity: p,
                  transform: `translateX(${(1 - p) * 50}px)`,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 16,
                    border: `3px solid ${checked ? C.accent : C.line}`,
                    background: checked ? C.accent : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: `scale(${checked ? pop(t, it.at + 0.65, 0.3) : 1})`,
                  }}
                >
                  {checked && <Icon name="check" size={38} color="#0B0B0F" stroke={3.4} />}
                </div>
                <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 44, color: C.text }}>{it.text}</div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: "absolute",
            right: 36,
            bottom: 34,
            padding: "12px 30px",
            border: `4px solid ${C.accent}`,
            borderRadius: 16,
            color: C.accent,
            ...mono(36, C.accent, 700),
            letterSpacing: 5,
            opacity: stamp,
            transform: `rotate(-7deg) scale(${1.5 - 0.5 * stamp})`,
            textShadow: `0 0 24px ${C.accentGlow}`,
          }}
        >
          READY
        </div>
      </div>
    </div>
  );
};

/* ───────── 6. CTA: comment IDEA → DM ───────── */
const Cta: React.FC = () => {
  const t = useSec();
  const typed = "IDEA".slice(0, Math.max(0, Math.min(4, Math.floor((t - 39.9) / 0.2) + 1)));
  const sent = t >= 41.05;
  const caret = Math.floor(t * 2.4) % 2 === 0;
  const dm = prog(t, 41.45, 0.5);
  const btn = sent ? 0.96 + 0.04 * prog(t, 41.05, 0.3) : 1;
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 10, width: W }}>
      <div
        style={{
          ...panel,
          height: 128,
          borderRadius: 64,
          padding: "0 22px 0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: sent ? 0.55 : 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {typed ? (
            <span style={mono(54, C.accent, 700)}>{typed}</span>
          ) : (
            <span style={mono(36, C.dim)}>Add a comment…</span>
          )}
          {!sent && <span style={{ width: 4, height: 54, background: caret ? C.accent : "transparent" }} />}
        </div>
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 48,
            background: C.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${btn})`,
          }}
        >
          <Icon name="send" size={46} color="#0B0B0F" stroke={2.2} />
        </div>
      </div>

      <div
        style={{
          ...panel,
          marginTop: 56,
          padding: 40,
          opacity: dm,
          transform: `translateY(${(1 - dm) * 50}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <img
            src={staticFile("brand/avatar.png")}
            style={{ width: 92, height: 92, borderRadius: 46, objectFit: "cover", border: `3px solid ${C.accent}` }}
          />
          <div>
            <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 34, color: C.text }}>{BRAND.handleShort}</div>
            <div style={mono(24, C.dim)}>DIRECT MESSAGE</div>
          </div>
        </div>
        <div
          style={{
            marginTop: 34,
            background: C.accentSoft,
            border: `1px solid rgba(255,176,32,0.35)`,
            borderRadius: 28,
            padding: "28px 32px",
            fontFamily: F.body,
            fontWeight: 500,
            fontSize: 36,
            color: C.text,
          }}
        >
          Here is your research document
        </div>
        <div
          style={{
            marginTop: 22,
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "22px 28px",
            borderRadius: 24,
            background: "rgba(255,255,255,0.05)",
            border: `1px solid ${C.line}`,
          }}
        >
          <Icon name="doc" size={52} color={C.accent} />
          <div style={mono(26, C.text)}>startup_validation_guide.pdf</div>
        </div>
      </div>
    </div>
  );
};

/* ───────── 7. NEXT VIDEO TEASER ───────── */
const Next: React.FC = () => {
  const t = useSec();
  const p = prog(t, 43.7, 0.5);
  return (
    <div style={{ position: "absolute", left: X, top: ZONE.visualTop + 30, width: W }}>
      <div
        style={{
          ...panel,
          height: 520,
          padding: 52,
          position: "relative",
          overflow: "hidden",
          borderColor: C.accent,
          boxShadow: `0 0 0 1px ${C.accent}, 0 0 90px ${C.accentSoft}`,
          opacity: p,
          transform: `translateY(${(1 - p) * 40}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              background: C.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="play" size={28} color="#0B0B0F" />
          </div>
          <span style={mono(32, C.accent, 700)}>NEXT VIDEO</span>
        </div>
        <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 112, color: C.text, lineHeight: 1.0, marginTop: 56 }}>
          THE
          <br />
          <span style={{ color: C.accent, textShadow: `0 0 50px ${C.accentGlow}` }}>SOLUTION</span>
        </div>
        <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 32, color: C.dim, marginTop: 34 }}>
          What should you build for that problem?
        </div>
        <div style={{ position: "absolute", right: 48, top: 48, opacity: 0.9 }}>
          <Icon name="lock" size={64} color={C.dim} />
        </div>
      </div>
    </div>
  );
};

/* ───────── 8. END CARD ───────── */
const End: React.FC = () => {
  const t = useSec();
  const p = prog(t, 47.3, 0.55);
  const chip = prog(t, 48.1, 0.5);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: ZONE.visualTop + 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: p,
        transform: `translateY(${(1 - p) * 40}px)`,
      }}
    >
      <div
        style={{
          width: 330,
          height: 330,
          borderRadius: 165,
          padding: 8,
          boxSizing: "border-box",
          background: `conic-gradient(from 200deg, ${C.accent}, #FFD27A, ${C.accent})`,
          boxShadow: `0 0 90px ${C.accentGlow}`,
        }}
      >
        <img
          src={staticFile("brand/avatar.png")}
          style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: `6px solid ${C.bg}`, boxSizing: "border-box" }}
        />
      </div>
      <div style={{ fontFamily: F.head, fontWeight: 700, fontSize: 70, color: C.text, marginTop: 44, letterSpacing: 1 }}>
        {BRAND.name}
      </div>
      <div style={{ ...mono(36, C.accent, 700), marginTop: 12 }}>{BRAND.handle}</div>
      <div
        style={{
          marginTop: 38,
          padding: "20px 40px",
          borderRadius: 40,
          background: C.accent,
          fontFamily: F.body,
          fontWeight: 600,
          fontSize: 30,
          color: "#0B0B0F",
          opacity: chip,
          transform: `scale(${0.9 + 0.1 * chip})`,
        }}
      >
        {BRAND.endLine}
      </div>
    </div>
  );
};

export const Visuals: React.FC = () => (
  <>
    <Scene from={0.1} to={5.0}>
      <Hook />
    </Scene>
    <Scene from={5.05} to={10.2}>
      <Compare />
    </Scene>
    <Scene from={10.3} to={23.4}>
      <Steps />
    </Scene>
    <Scene from={23.5} to={31.15}>
      <Formula />
    </Scene>
    <Scene from={31.0} to={39.5}>
      <Doc />
    </Scene>
    <Scene from={39.5} to={43.5}>
      <Cta />
    </Scene>
    <Scene from={43.55} to={47.2}>
      <Next />
    </Scene>
    <Scene from={47.25} to={60}>
      <End />
    </Scene>
  </>
);
