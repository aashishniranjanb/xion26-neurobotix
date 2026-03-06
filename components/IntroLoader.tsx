"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"reach" | "touch" | "power" | "reveal" | "done">("reach");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("touch"), 1600);
    const t2 = setTimeout(() => setPhase("power"), 2000);
    const t3 = setTimeout(() => setPhase("reveal"), 2500);
    const t4 = setTimeout(() => { setPhase("done"); onComplete(); }, 4000);

    const interval = setInterval(() => {
      setProgress((p) => { if (p >= 100) { clearInterval(interval); return 100; } return p + 1.6; });
    }, 60);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearInterval(interval);
    };
  }, [onComplete]);

  const touched = phase === "touch" || phase === "power" || phase === "reveal";
  const powered = phase === "power" || phase === "reveal";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#010101" }}
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `linear-gradient(rgba(255,215,0,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.7) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }} />

          {/* Power ripple when touched */}
          <AnimatePresence>
            {touched && (
              <>
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} className="absolute rounded-full pointer-events-none"
                    style={{
                      left: "50%", top: "44%",
                      transform: "translate(-50%,-50%)",
                      border: "1px solid rgba(255,215,0,0.6)",
                    }}
                    initial={{ width: 20, height: 20, opacity: 0.8 }}
                    animate={{ width: 500, height: 500, opacity: 0 }}
                    transition={{ duration: 1.2, delay: i * 0.3, ease: "easeOut" }}
                  />
                ))}
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: "50%", top: "44%",
                    transform: "translate(-50%,-50%)",
                    background: "radial-gradient(circle, rgba(255,215,0,0.25) 0%, transparent 65%)",
                  }}
                  initial={{ width: 0, height: 0, opacity: 0 }}
                  animate={{ width: 600, height: 600, opacity: powered ? 1 : 0.6 }}
                  transition={{ duration: 0.6 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* ── HANDS ROW ── */}
          <div className="relative flex items-center justify-center w-full" style={{ height: 260 }}>

            {/* LEFT — ROBOT HAND (gold) from left */}
            <motion.div
              className="absolute"
              initial={{ x: "-52vw", opacity: 0 }}
              animate={{ x: touched ? -20 : -175, opacity: 1 }}
              transition={{
                x: { duration: touched ? 0.35 : 1.4, ease: touched ? [0.22,1,0.36,1] : [0.16,1,0.3,1] },
                opacity: { duration: 0.5, delay: 0.1 },
              }}
            >
              <RobotHand glowing={powered} />
            </motion.div>

            {/* RIGHT — HUMAN HAND (dark→gold) from right */}
            <motion.div
              className="absolute"
              initial={{ x: "52vw", opacity: 0 }}
              animate={{ x: touched ? 20 : 175, opacity: 1 }}
              transition={{
                x: { duration: touched ? 0.35 : 1.4, ease: touched ? [0.22,1,0.36,1] : [0.16,1,0.3,1] },
                opacity: { duration: 0.5, delay: 0.2 },
              }}
            >
              <HumanHand powered={powered} />
            </motion.div>

            {/* Spark at fingertip contact point */}
            <AnimatePresence>
              {phase === "touch" && (
                <motion.div key="spark" className="absolute pointer-events-none"
                  style={{ left: "50%", top: "38%", transform: "translate(-50%,-50%)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.5], scale: [0, 2.5, 1.6] }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Spark />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sustained glow at contact point */}
            {powered && (
              <motion.div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: "50%", top: "38%",
                  transform: "translate(-50%,-50%)",
                  width: 40, height: 40,
                  background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,215,0,0.8) 40%, transparent 70%)",
                  boxShadow: "0 0 30px 10px rgba(255,215,0,0.6)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8], scale: [0.5, 1, 0.9] }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
              />
            )}
          </div>

          {/* ── TEXT REVEAL ── */}
          <motion.div
            className="text-center px-6 -mt-2"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            animate={phase === "reveal"
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 50, filter: "blur(20px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              fontSize: "clamp(4.5rem, 13vw, 10rem)",
              fontWeight: 900,
              letterSpacing: "0.1em",
              lineHeight: 0.95,
              textTransform: "uppercase",
              background: "linear-gradient(180deg, #fffbe0 0%, #FFD700 28%, #FFB800 58%, #9a6e00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 60px rgba(255,215,0,0.6))",
            }}>
              XION<br />2026
            </div>

            <motion.div
              initial={{ opacity: 0, letterSpacing: "1.4em" }}
              animate={phase === "reveal" ? { opacity: 1, letterSpacing: "0.5em" } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: "clamp(1rem, 3vw, 1.7rem)",
                fontWeight: 900,
                color: "#FFD700",
                textTransform: "uppercase",
                marginTop: "0.8rem",
                letterSpacing: "0.5em",
              }}
            >
              NeuroBotix
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={phase === "reveal" ? { opacity: 0.45 } : {}}
              transition={{ delay: 0.6 }}
              style={{
                color: "#b8860b",
                fontSize: "0.6rem",
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                marginTop: "0.5rem",
              }}
            >
              Inspired by brains. Built by engineers.
            </motion.div>
          </motion.div>

          {/* ── BOOT BAR ── */}
          <div className="absolute bottom-10 w-[260px] sm:w-[340px]">
            <div className="flex justify-between mb-2" style={{
              fontSize: "0.6rem", letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#7a5c00",
            }}>
              <span>Boot Sequence</span>
              <span style={{ color: "#FFD700" }}>{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div className="w-full overflow-hidden rounded-full" style={{ height: 2, background: "rgba(184,134,11,0.15)" }}>
              <div className="h-full rounded-full" style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #7a5c00, #FFD700, #fffbe0)",
                boxShadow: "0 0 12px rgba(255,215,0,0.7)",
                transition: "width 0.06s linear",
              }} />
            </div>
            <div className="flex justify-between mt-1.5">
              {[0,25,50,75,100].map(t => (
                <div key={t} style={{ width: 1, height: 4, background: progress >= t ? "#FFD700" : "#1e1e1e" }} />
              ))}
            </div>
          </div>

          {/* Corner brackets */}
          {["top-5 left-5 border-t-2 border-l-2","top-5 right-5 border-t-2 border-r-2","bottom-5 left-5 border-b-2 border-l-2","bottom-5 right-5 border-b-2 border-r-2"].map((c,i) => (
            <motion.div key={i} className={`absolute w-8 h-8 ${c}`}
              style={{ borderColor: "rgba(255,215,0,0.2)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 + i * 0.08 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════════
   ROBOT HAND — Gold mechanical, fingers pointing RIGHT
   Styled like a real robotic hand (knuckles, joints, plating)
══════════════════════════════════════════════ */
function RobotHand({ glowing }: { glowing: boolean }) {
  const G = "#C9920A";   // base gold
  const GL = "#FFD700";  // light gold
  const GD = "#5a3d00";  // dark shadow
  const GH = "#fff4a0";  // highlight

  return (
    <svg width="260" height="200" viewBox="0 0 260 200" fill="none"
      style={{ filter: glowing ? "drop-shadow(0 0 24px rgba(255,215,0,0.9))" : "drop-shadow(0 6px 18px rgba(0,0,0,0.95))" }}>

      {/* ── ARM / FOREARM coming from left ── */}
      <rect x="0" y="72" width="88" height="56" rx="10" fill={GD} stroke={G} strokeWidth="1.5"/>
      {/* Arm panel engravings */}
      <rect x="8" y="80" width="72" height="8" rx="3" fill={G} opacity="0.2"/>
      <rect x="8" y="94" width="72" height="8" rx="3" fill={G} opacity="0.15"/>
      <rect x="8" y="108" width="72" height="8" rx="3" fill={G} opacity="0.1"/>
      {/* Arm rivets */}
      <circle cx="14" cy="78" r="4.5" fill={G} stroke={GD} strokeWidth="1"/>
      <circle cx="14" cy="122" r="4.5" fill={G} stroke={GD} strokeWidth="1"/>
      <circle cx="74" cy="78" r="4.5" fill={G} stroke={GD} strokeWidth="1"/>
      <circle cx="74" cy="122" r="4.5" fill={G} stroke={GD} strokeWidth="1"/>
      {/* Arm highlight strip */}
      <rect x="8" y="74" width="72" height="3" rx="1.5" fill={GH} opacity="0.15"/>

      {/* ── WRIST ROTATOR ── */}
      <ellipse cx="90" cy="100" rx="10" ry="28" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <ellipse cx="90" cy="100" rx="5" ry="14" fill={GD} opacity="0.5"/>
      <circle cx="90" cy="85" r="4" fill={GD}/>
      <circle cx="90" cy="100" r="4" fill={GD}/>
      <circle cx="90" cy="115" r="4" fill={GD}/>

      {/* ── PALM BODY ── */}
      <rect x="94" y="56" width="68" height="88" rx="13" fill={GL} stroke={GD} strokeWidth="2"/>
      {/* Palm plate lines */}
      <rect x="102" y="66" width="52" height="12" rx="4" fill={GD} opacity="0.4"/>
      <rect x="102" y="84" width="52" height="12" rx="4" fill={GD} opacity="0.3"/>
      <rect x="102" y="102" width="52" height="12" rx="4" fill={GD} opacity="0.2"/>
      <rect x="102" y="120" width="52" height="12" rx="4" fill={GD} opacity="0.15"/>
      {/* Palm highlight */}
      <rect x="100" y="58" width="52" height="4" rx="2" fill={GH} opacity="0.3"/>
      {/* Knuckle ridge */}
      <rect x="156" y="58" width="8" height="86" rx="4" fill={GD} opacity="0.6"/>

      {/* ── FINGER 1: INDEX (topmost) ── */}
      <rect x="158" y="30" width="56" height="22" rx="8" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <rect x="164" y="34" width="14" height="14" rx="4" fill={GD} opacity="0.55"/>
      <rect x="182" y="34" width="14" height="14" rx="4" fill={GD} opacity="0.4"/>
      {/* Fingertip */}
      <rect x="207" y="26" width="16" height="30" rx="7" fill={GD} stroke={glowing ? "#FFD700" : G} strokeWidth="1.5"/>
      <rect x="210" y="30" width="10" height="6" rx="2" fill={GL} opacity="0.4"/>
      {/* Knuckle dot */}
      <circle cx="164" cy="41" r="3.5" fill={GD}/>
      {glowing && <circle cx="222" cy="41" r="5" fill="#FFD700" opacity="0.95"/>}

      {/* ── FINGER 2: MIDDLE ── */}
      <rect x="158" y="57" width="60" height="22" rx="8" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <rect x="164" y="61" width="14" height="14" rx="4" fill={GD} opacity="0.55"/>
      <rect x="182" y="61" width="14" height="14" rx="4" fill={GD} opacity="0.4"/>
      <rect x="211" y="53" width="16" height="30" rx="7" fill={GD} stroke={glowing ? "#FFD700" : G} strokeWidth="1.5"/>
      <rect x="214" y="57" width="10" height="6" rx="2" fill={GL} opacity="0.4"/>
      <circle cx="164" cy="68" r="3.5" fill={GD}/>
      {glowing && <circle cx="226" cy="68" r="5" fill="#FFD700" opacity="0.95"/>}

      {/* ── FINGER 3: RING ── */}
      <rect x="158" y="84" width="56" height="22" rx="8" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <rect x="164" y="88" width="14" height="14" rx="4" fill={GD} opacity="0.55"/>
      <rect x="182" y="88" width="14" height="14" rx="4" fill={GD} opacity="0.4"/>
      <rect x="207" y="80" width="16" height="30" rx="7" fill={GD} stroke={glowing ? "#FFD700" : G} strokeWidth="1.5"/>
      <rect x="210" y="84" width="10" height="6" rx="2" fill={GL} opacity="0.4"/>
      <circle cx="164" cy="95" r="3.5" fill={GD}/>
      {glowing && <circle cx="222" cy="95" r="5" fill="#FFD700" opacity="0.95"/>}

      {/* ── FINGER 4: PINKY ── */}
      <rect x="158" y="110" width="44" height="20" rx="7" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <rect x="164" y="114" width="12" height="12" rx="3" fill={GD} opacity="0.5"/>
      <rect x="180" y="114" width="12" height="12" rx="3" fill={GD} opacity="0.35"/>
      <rect x="195" y="107" width="14" height="26" rx="6" fill={GD} stroke={glowing ? "#FFD700" : G} strokeWidth="1.5"/>
      <circle cx="164" cy="120" r="3" fill={GD}/>
      {glowing && <circle cx="208" cy="120" r="4.5" fill="#FFD700" opacity="0.9"/>}

      {/* ── THUMB ── */}
      <rect x="100" y="140" width="50" height="20" rx="8" fill={GL} stroke={GD} strokeWidth="1.5"/>
      <rect x="106" y="144" width="14" height="12" rx="3" fill={GD} opacity="0.5"/>
      <rect x="124" y="144" width="14" height="12" rx="3" fill={GD} opacity="0.35"/>
      <rect x="144" y="153" width="18" height="20" rx="7" fill={GD} stroke={glowing ? "#FFD700" : G} strokeWidth="1.5"/>
      {glowing && <circle cx="153" cy="167" r="4" fill="#FFD700" opacity="0.9"/>}
    </svg>
  );
}


function HumanHand({ powered }: { powered: boolean }) {
  const base = powered ? "#C9920A" : "#1a1a1a";
  const mid  = powered ? "#FFD700" : "#2e2e2e";
  const hi   = powered ? "#fff4a0" : "#3a3a3a";
  const stroke = powered ? "#FFD700" : "#444";

  return (
    <motion.svg
      width="230" height="210"
      viewBox="0 0 230 210"
      fill="none"
      animate={{ filter: powered ? "drop-shadow(0 0 28px rgba(255,215,0,0.9))" : "drop-shadow(0 6px 18px rgba(0,0,0,0.9))" }}
      transition={{ duration: 0.5 }}
      // Flip horizontally — human hand comes from right, fingers point left
      style={{ transform: "scaleX(-1)" }}
    >
      {/* ── FOREARM / WRIST from right ── */}
      <motion.rect x="0" y="80" width="90" height="52" rx="10"
        animate={{ fill: base, stroke }} strokeWidth="1.5" transition={{ duration: 0.5 }}/>
      <motion.rect x="8" y="88" width="74" height="7" rx="3"
        animate={{ fill: mid }} opacity={0.25} transition={{ duration: 0.5 }}/>
      <motion.rect x="8" y="101" width="74" height="7" rx="3"
        animate={{ fill: mid }} opacity={0.18} transition={{ duration: 0.5 }}/>
      {/* Wrist bone bumps */}
      <motion.ellipse cx="88" cy="90" rx="7" ry="5"
        animate={{ fill: mid }} transition={{ duration: 0.5 }}/>
      <motion.ellipse cx="88" cy="122" rx="7" ry="5"
        animate={{ fill: mid }} transition={{ duration: 0.5 }}/>

      {/* ── PALM ── organic shape */}
      <motion.path
        d="M88 60 C88 50 100 44 112 46 L170 48 C182 48 190 56 190 68 L190 148 C190 158 182 164 172 162 L108 160 C96 158 88 150 88 140 Z"
        animate={{ fill: mid, stroke }} strokeWidth="1.5" transition={{ duration: 0.5 }}/>
      {/* Palm crease lines */}
      <motion.path d="M100 80 Q140 76 175 82" stroke={hi} strokeWidth="1.2" strokeLinecap="round" opacity={0.3}
        animate={{ stroke: hi }} transition={{ duration: 0.5 }}/>
      <motion.path d="M100 100 Q140 96 178 102" stroke={hi} strokeWidth="1" strokeLinecap="round" opacity={0.2}
        animate={{ stroke: hi }} transition={{ duration: 0.5 }}/>
      <motion.path d="M100 118 Q138 115 176 120" stroke={hi} strokeWidth="1" strokeLinecap="round" opacity="0.15"
        animate={{ stroke: hi }} transition={{ duration: 0.5 }}/>

      {/* ── INDEX FINGER — extended, pointing left (toward robot) ── */}
      <motion.path
        d="M188 52 C188 42 196 36 204 38 L218 40 C226 42 230 50 228 58 L224 90 C222 98 214 102 206 100 L194 96 C186 94 184 86 186 78 Z"
        animate={{ fill: mid, stroke }} strokeWidth="1.5" transition={{ duration: 0.5 }}/>
      {/* Index knuckle */}
      <motion.ellipse cx="192" cy="68" rx="5" ry="4"
        animate={{ fill: base }} transition={{ duration: 0.5 }}/>
      <motion.ellipse cx="192" cy="82" rx="5" ry="4"
        animate={{ fill: base }} transition={{ duration: 0.5 }}/>
      {/* Fingertip */}
      <motion.ellipse cx="226" cy="52" rx="6" ry="10"
        animate={{ fill: hi, stroke }} strokeWidth="1" transition={{ duration: 0.5 }}/>
      {/* Fingernail */}
      <motion.ellipse cx="226" cy="46" rx="4" ry="5"
        animate={{ fill: base }} opacity={0.6} transition={{ duration: 0.5 }}/>
      {powered && (
        <motion.circle cx="230" cy="52" r="7"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.6,1,0.7], scale: [0.5,1.3,1] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          fill="#FFD700" opacity="0.9"
        />
      )}

      {/* ── MIDDLE FINGER — slightly curled ── */}
      <motion.path
        d="M188 78 C192 68 200 64 208 66 L218 70 C224 72 226 80 222 88 L216 108 C212 116 204 118 198 114 L190 108 C184 104 184 94 188 86 Z"
        animate={{ fill: base, stroke }} strokeWidth="1.2" opacity={0.85} transition={{ duration: 0.5 }}/>
      <motion.ellipse cx="192" cy="90" rx="4.5" ry="3.5"
        animate={{ fill: mid }} opacity={0.5} transition={{ duration: 0.5 }}/>

      {/* ── RING FINGER — curled ── */}
      <motion.path
        d="M186 102 C188 92 196 88 204 92 L212 96 C218 100 218 110 212 116 L204 126 C198 132 190 130 186 122 L184 114 C182 108 184 106 186 102 Z"
        animate={{ fill: base, stroke }} strokeWidth="1.2" opacity={0.8} transition={{ duration: 0.5 }}/>

      {/* ── PINKY — tucked ── */}
      <motion.path
        d="M184 118 C186 110 192 108 198 112 L204 118 C208 124 206 132 200 136 L194 140 C188 142 184 138 183 132 L182 124 C181 120 182 120 184 118 Z"
        animate={{ fill: base, stroke }} strokeWidth="1.2" opacity={0.75} transition={{ duration: 0.5 }}/>

      {/* ── THUMB — tucked to side ── */}
      <motion.path
        d="M90 130 C82 120 82 108 90 102 L104 96 C112 92 120 98 118 108 L116 128 C114 138 106 144 98 140 Z"
        animate={{ fill: mid, stroke }} strokeWidth="1.2" opacity={0.9} transition={{ duration: 0.5 }}/>
      <motion.ellipse cx="96" cy="112" rx="5" ry="7"
        animate={{ fill: base }} opacity={0.4} transition={{ duration: 0.5 }}/>
    </motion.svg>
  );
}

/* ── SPARK BURST ── */
function Spark() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      {[0,20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340].map((a, i) => {
        const r = (a * Math.PI) / 180;
        const len = i % 3 === 0 ? 55 : i % 2 === 0 ? 38 : 25;
        return (
          <line key={a}
            x1={60 + Math.cos(r) * 7} y1={60 + Math.sin(r) * 7}
            x2={60 + Math.cos(r) * len} y2={60 + Math.sin(r) * len}
            stroke={i % 4 === 0 ? "#fffbe0" : i % 2 === 0 ? "#FFD700" : "#b8860b"}
            strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
            strokeLinecap="round"
            opacity={i % 3 === 0 ? 1 : 0.65}
          />
        );
      })}
      <circle cx="60" cy="60" r="9" fill="#FFD700"/>
      <circle cx="60" cy="60" r="4.5" fill="white" opacity="0.95"/>
    </svg>
  );
}