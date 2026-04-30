/* global React */
// Atlaps icon set — 24×24, stroke 1.5, geometric, current color

const Icon = ({ children, size = 24, strokeWidth = 1.5, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

// — Protocols —
const IcRadio    = (p) => <Icon {...p}><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" /></Icon>;
const IcWifi     = (p) => <Icon {...p}><path d="M5 12.55a11 11 0 0 1 14 0M8.5 16.05a6 6 0 0 1 7 0M2 8.82a15 15 0 0 1 20 0" /><circle cx="12" cy="20" r="0.5" fill="currentColor" /></Icon>;
const IcBluetooth= (p) => <Icon {...p}><path d="m7 7 10 10-5 5V2l5 5L7 17" /></Icon>;
const IcCable    = (p) => <Icon {...p}><path d="M4 9V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v9a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V8" /><path d="M18 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 11h6" /></Icon>;
const IcNetwork  = (p) => <Icon {...p}><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M5 16v-4h14v4M12 8v4" /></Icon>;
const IcSignal   = (p) => <Icon {...p}><path d="M2 20h2M7 16v4M12 12v8M17 8v12M22 4v16" /></Icon>;
const IcAntenna  = (p) => <Icon {...p}><path d="M2 12 7 2M22 12 17 2M4.5 7h15M12 22V8" /><circle cx="12" cy="6" r="2" /></Icon>;
const IcBroadcast= (p) => <Icon {...p}><circle cx="12" cy="12" r="2" /><path d="M5.93 18.07A10 10 0 0 1 5.93 5.93M18.07 5.93a10 10 0 0 1 0 12.14M8.93 15.07A6 6 0 0 1 8.93 8.93M15.07 8.93a6 6 0 0 1 0 6.14" /></Icon>;

// — Rooms —
const IcChefHat  = (p) => <Icon {...p}><path d="M6 13h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z" /><path d="M6 13a4 4 0 0 1-1-7.75A4 4 0 0 1 12 5a4 4 0 0 1 7-.75A4 4 0 0 1 18 13M9 17h6" /></Icon>;
const IcSofa     = (p) => <Icon {...p}><path d="M3 12V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /><path d="M3 12a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2M5 19v2M19 19v2M6 12h12" /></Icon>;
const IcBed      = (p) => <Icon {...p}><path d="M2 11v9M2 14h20v6M22 14V8a2 2 0 0 0-2-2H10v8" /><circle cx="6" cy="11" r="2" /></Icon>;
const IcBath     = (p) => <Icon {...p}><path d="M3 12h18v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4ZM5 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2M5 20l-1 2M19 20l1 2" /></Icon>;
const IcTreePine = (p) => <Icon {...p}><path d="m12 2-5 7h3l-4 6h3l-4 5h14l-4-5h3l-4-6h3z" /><path d="M12 17v5" /></Icon>;
const IcCar      = (p) => <Icon {...p}><path d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM5 12h14" /></Icon>;
const IcDoorOpen = (p) => <Icon {...p}><path d="M13 4h3a2 2 0 0 1 2 2v14M2 20h20M13 4 4 5v15l9 1V4ZM10 12v.01" /></Icon>;
const IcBriefcase= (p) => <Icon {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M2 13h20" /></Icon>;

// — Actions —
const IcPlusCircle = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></Icon>;
const IcListChecks = (p) => <Icon {...p}><path d="m3 6 2 2 4-4M3 14l2 2 4-4M13 6h8M13 12h8M13 18h8" /></Icon>;
const IcFileDown   = (p) => <Icon {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" /><path d="M14 3v6h6M12 12v6M9 15l3 3 3-3" /></Icon>;
const IcRefreshCw  = (p) => <Icon {...p}><path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" /></Icon>;
const IcRuler      = (p) => <Icon {...p}><path d="M21.3 8.7 15.3 2.7a1 1 0 0 0-1.4 0L2.7 13.9a1 1 0 0 0 0 1.4l6 6a1 1 0 0 0 1.4 0L21.3 10.1a1 1 0 0 0 0-1.4Z" /><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2" /></Icon>;
const IcLayers     = (p) => <Icon {...p}><path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" /></Icon>;
const IcMap        = (p) => <Icon {...p}><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Z" /><path d="M9 3v16M15 5v16" /></Icon>;
const IcShare      = (p) => <Icon {...p}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></Icon>;

// Decorative / status icons
const IcCheck    = (p) => <Icon {...p}><path d="m4 12 5 5 11-11" /></Icon>;
const IcX        = (p) => <Icon {...p}><path d="M5 5l14 14M19 5 5 19" /></Icon>;
const IcAlert    = (p) => <Icon {...p}><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17v.01" /></Icon>;
const IcInfo     = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8v.01" /></Icon>;
const IcChevDown = (p) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
const IcChevUp   = (p) => <Icon {...p}><path d="m6 15 6-6 6 6" /></Icon>;
const IcChevR    = (p) => <Icon {...p}><path d="m9 6 6 6-6 6" /></Icon>;
const IcChevL    = (p) => <Icon {...p}><path d="m15 6-6 6 6 6" /></Icon>;
const IcSun      = (p) => <Icon {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></Icon>;
const IcMoon     = (p) => <Icon {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" /></Icon>;
const IcSearch   = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></Icon>;
const IcCopy     = (p) => <Icon {...p}><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Icon>;

const ATLAPS_ICON_GRID = [
  { group: "Protocolos", items: [
    ["KNX", IcRadio], ["Matter", IcWifi], ["Zigbee", IcBluetooth], ["Z-Wave", IcCable],
    ["Modbus", IcNetwork], ["BACnet", IcSignal], ["DALI", IcAntenna], ["Wi-Fi", IcBroadcast],
  ]},
  { group: "Estancias", items: [
    ["Cocina", IcChefHat], ["Salón", IcSofa], ["Dormitorio", IcBed], ["Baño", IcBath],
    ["Exterior", IcTreePine], ["Garaje", IcCar], ["Pasillo", IcDoorOpen], ["Oficina", IcBriefcase],
  ]},
  { group: "Acciones", items: [
    ["Añadir", IcPlusCircle], ["BOM", IcListChecks], ["PDF", IcFileDown], ["Sincronizar", IcRefreshCw],
    ["Medir", IcRuler], ["Capa", IcLayers], ["Plano", IcMap], ["Compartir", IcShare],
  ]},
];

Object.assign(window, {
  Icon,
  IcRadio, IcWifi, IcBluetooth, IcCable, IcNetwork, IcSignal, IcAntenna, IcBroadcast,
  IcChefHat, IcSofa, IcBed, IcBath, IcTreePine, IcCar, IcDoorOpen, IcBriefcase,
  IcPlusCircle, IcListChecks, IcFileDown, IcRefreshCw, IcRuler, IcLayers, IcMap, IcShare,
  IcCheck, IcX, IcAlert, IcInfo, IcChevDown, IcChevUp, IcChevR, IcChevL, IcSun, IcMoon, IcSearch, IcCopy,
  ATLAPS_ICON_GRID,
});
