let context: AudioContext | null = null;
let muted = false;

export function isMuted() {
  return muted;
}

export function setMuted(next: boolean) {
  muted = next;
}

function audio(): AudioContext | null {
  if (typeof window === "undefined" || muted) return null;
  if (!context) context = new AudioContext();
  if (context.state === "suspended") void context.resume();
  return context;
}

function tone(
  frequency: number,
  duration: number,
  type: OscillatorType,
  gainValue: number,
  delay = 0,
) {
  const ctx = audio();
  if (!ctx) return;
  const start = ctx.currentTime + delay;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

export function playClick() {
  tone(720, 0.06, "triangle", 0.05);
  tone(1180, 0.045, "sine", 0.03, 0.02);
}

export function playTick() {
  tone(196, 0.045, "square", 0.035);
}

export function playReveal() {
  tone(523.25, 0.12, "sine", 0.055, 0);
  tone(659.25, 0.12, "sine", 0.055, 0.09);
  tone(783.99, 0.2, "sine", 0.06, 0.18);
}

export function resumeAudio() {
  audio();
}
