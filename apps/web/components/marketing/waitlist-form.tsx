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
        className="rounded-lg border border-amber-signal/60 bg-paper-bone/80 p-6 text-sm text-blueprint-deep"
      >
        <p className="font-medium">Gracias. Quedas en la lista.</p>
        <p className="mt-2 text-ink-pencil">
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
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Si eres humano, no rellenes este campo:
          <input type="text" name="nickname" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-blueprint-deep">Correo electrónico</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="tu@correo.es"
          className="mt-2 w-full rounded-md border border-blueprint-soft/40 bg-paper-bone px-4 py-2.5 text-base text-blueprint-deep placeholder:text-ink-pencil/60 focus:border-blueprint-deep focus:outline-none"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-ink-pencil">
        <input type="checkbox" name="rgpd" required className="mt-1 h-4 w-4 accent-amber-signal" />
        <span>
          He leído la{" "}
          <a
            href="/legal/privacy"
            className="underline decoration-blueprint-soft underline-offset-2 hover:text-blueprint-deep"
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
        className="inline-flex items-center justify-center rounded-md bg-blueprint-deep px-6 py-3 text-base font-medium text-paper-bone shadow-sm transition-colors hover:bg-blueprint-mid disabled:opacity-60"
      >
        {estado.tipo === "enviando" ? "Enviando…" : "Apuntarme a la lista"}
      </button>

      <p id="waitlist-help" className="text-xs text-ink-pencil">
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
