"use client";

/**
 * Ruta de visual-review para capturar error.tsx (misma cáscara que global-error).
 * No enlazada desde el portal.
 */
export default function PreviewErrorPage(): never {
  throw new Error("preview-error-500");
}
