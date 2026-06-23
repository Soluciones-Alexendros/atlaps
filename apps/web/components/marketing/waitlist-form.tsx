"use client";

import { useState, type FormEvent } from "react";

type Estado =
  | { tipo: "idle" }
  | { tipo: "enviando" }
  | { tipo: "ok" }
  | { tipo: "error"; mensaje: string };

export function WaitlistForm() {
  const [estado, setEstado] = useState<Estado>({ tipo: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const rgpd = data.get("rgpd") === "on";
    const honeypot = String(data.get("nickname") ?? "");

    if (honeypot) {
      // Bot detected — silenciar.
      setEstado({ tipo: "ok" });
      form.reset();
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEstado({
        tipo: "error",
        mensaje: "Introduce una dirección de correo válida.",
      });
      return;
    }
    if (!rgpd) {
      setEstado({
        tipo: "error",
        mensaje: "Necesitamos tu consentimiento RGPD para añadirte.",
      });
      return;
    }

    setEstado({ tipo: "enviando" });

    // Día J · POST real a /api/waitlist · de momento simulamos respuesta OK.
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setEstado({ tipo: "ok" });
      form.reset();
    } catch {
      setEstado({
        tipo: "error",
        mensaje: "Algo ha fallado. Inténtalo de nuevo en un momento.",
      });
    }
  }

  if (estado.tipo === "ok") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-amber-signal/60 bg-paper-bone/80 text-blueprint-deep rounded-lg border p-6 text-sm"
      >
        <p className="font-medium">Gracias. Quedas en la lista.</p>
        <p className="text-ink-pencil mt-2">
          Te escribiremos en cuanto el Planificador esté disponible para tu plaza. Sin spam, sin
          compartir tu correo con nadie.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="waitlist-help">
      <div
        aria-hidden="true"
        className="absolute top-[-9999px] left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Si eres humano, no rellenes este campo:
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className="text-blueprint-deep text-sm font-medium">Correo electrónico</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="tu@correo.es"
          className="border-blueprint-soft/40 bg-paper-bone text-blueprint-deep placeholder:text-ink-pencil/60 focus:border-blueprint-deep mt-2 w-full rounded-md border px-4 py-2.5 text-base focus:outline-none"
        />
      </label>

      <label className="text-ink-pencil flex items-start gap-3 text-sm">
        <input type="checkbox" name="rgpd" required className="accent-amber-signal mt-1 h-4 w-4" />
        <span>
          He leído la{" "}
          <a
            href="/legal/privacy"
            className="decoration-blueprint-soft hover:text-blueprint-deep underline underline-offset-2"
          >
            política de privacidad
          </a>{" "}
          y consiento que Iniciativa Alexendros, S.L. me escriba sobre Atlaps. Puedo retirarme
          cuando quiera.
        </span>
      </label>

      <button
        type="submit"
        disabled={estado.tipo === "enviando"}
        className="bg-blueprint-deep text-paper-bone hover:bg-blueprint-mid inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium shadow-sm transition-colors disabled:opacity-60"
      >
        {estado.tipo === "enviando" ? "Enviando…" : "Apuntarme a la lista"}
      </button>

      <p id="waitlist-help" className="text-ink-pencil text-xs">
        Servicio en construcción. POST real a `/api/waitlist` con Supabase + Resend en Día J
        (11-may).
      </p>

      {estado.tipo === "error" && (
        <p
          role="alert"
          className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-900"
        >
          {estado.mensaje}
        </p>
      )}
    </form>
  );
}
