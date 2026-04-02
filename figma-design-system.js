// ============================================================
//  BURNLOOP — FIGMA DESIGN SYSTEM BUILDER
//  Paste this entire file into:
//  Figma → Plugins → Development → Open Console → paste & run
//  OR use as a one-off plugin via "Run last plugin"
// ============================================================

(async () => {

  // ─────────────────────────────────────────────
  // 0. HELPERS
  // ─────────────────────────────────────────────

  function hex(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const n = parseInt(h, 16);
    return {
      r: ((n >> 16) & 255) / 255,
      g: ((n >> 8)  & 255) / 255,
      b: (  n       & 255) / 255,
    };
  }

  function solidPaint(hexStr, opacity = 1) {
    return [{ type: 'SOLID', color: hex(hexStr), opacity }];
  }

  function linearPaint(stops) {
    // stops: [{ hex, pos }]
    return [{
      type: 'GRADIENT_LINEAR',
      gradientTransform: [[1, 0, 0], [0, 1, 0]],
      gradientStops: stops.map(s => ({
        position: s.pos,
        color: { ...hex(s.hex), a: 1 },
      })),
    }];
  }

  async function createPaintStyle(name, paints) {
    const s = figma.createPaintStyle();
    s.name  = name;
    s.paints = paints;
    return s;
  }

  async function createTextStyle(name, props) {
    const s = figma.createTextStyle();
    s.name          = name;
    s.fontName      = { family: props.family || 'Inter', style: props.style || 'Regular' };
    s.fontSize      = props.size;
    s.lineHeight    = props.lineHeight
      ? { unit: 'PIXELS', value: props.lineHeight }
      : { unit: 'AUTO' };
    s.letterSpacing = props.letterSpacing
      ? { unit: 'PERCENT', value: props.letterSpacing }
      : { unit: 'PERCENT', value: 0 };
    return s;
  }

  async function createEffectStyle(name, effects) {
    const s = figma.createEffectStyle();
    s.name    = name;
    s.effects = effects;
    return s;
  }

  function makeFrame(name, w, h, x, y) {
    const f     = figma.createFrame();
    f.name      = name;
    f.resize(w, h);
    f.x         = x;
    f.y         = y;
    f.fills     = [];
    f.clipsContent = false;
    return f;
  }

  function makeRect(name, w, h, fillHex, radius = 0) {
    const r    = figma.createRectangle();
    r.name     = name;
    r.resize(w, h);
    r.fills    = solidPaint(fillHex);
    r.cornerRadius = radius;
    return r;
  }

  async function makeText(content, hexColor, size, weight, x, y) {
    await figma.loadFontAsync({ family: 'Inter', style: weight });
    const t     = figma.createText();
    t.characters = content;
    t.fontSize   = size;
    t.fontName   = { family: 'Inter', style: weight };
    t.fills      = solidPaint(hexColor);
    t.x          = x;
    t.y          = y;
    return t;
  }

  // ─────────────────────────────────────────────
  // 1. COLOR STYLES
  // ─────────────────────────────────────────────

  const COLORS = [
    // Brand Core
    { name: 'Color/Brand/Deep Purple',     hex: '#3B1D8A' },
    { name: 'Color/Brand/Violet',          hex: '#7C3AED' },
    { name: 'Color/Brand/Accent Violet',   hex: '#9B40D6' },
    { name: 'Color/Brand/Orange',          hex: '#F97316' },
    // Gradient stops (documented as solid swatches)
    { name: 'Color/Gradient/Orange',       hex: '#F97316' },
    { name: 'Color/Gradient/Hot Pink',     hex: '#C026D3' },
    { name: 'Color/Gradient/Deep Violet',  hex: '#6D28D9' },
    // Ring arc
    { name: 'Color/Ring/Orange',           hex: '#F97316' },
    { name: 'Color/Ring/Coral',            hex: '#F43F5E' },
    { name: 'Color/Ring/Pink',             hex: '#EC4899' },
    { name: 'Color/Ring/Violet',           hex: '#7C3AED' },
    { name: 'Color/Ring/Track',            hex: '#E5E7EB' },
    // Backgrounds
    { name: 'Color/Background/Primary',    hex: '#FAFAF9' },
    { name: 'Color/Background/Card',       hex: '#F3F4F6' },
    { name: 'Color/Background/Lavender',   hex: '#F0EDFB' },
    { name: 'Color/Background/Input',      hex: '#EEEEEE' },
    { name: 'Color/Background/Dark',       hex: '#3B1D8A' },
    { name: 'Color/Background/Elevated',   hex: '#EDE9FE' },
    { name: 'Color/Background/Streak',     hex: '#FFF3E4' },
    { name: 'Color/Background/MetricTile', hex: '#3D3D3D' },
    // Text
    { name: 'Color/Text/Primary',          hex: '#111827' },
    { name: 'Color/Text/Secondary',        hex: '#6B7280' },
    { name: 'Color/Text/On Dark',          hex: '#FFFFFF' },
    { name: 'Color/Text/On Dark Muted',    hex: '#C4B5FD' },
    { name: 'Color/Text/Accent',           hex: '#9B40D6' },
    { name: 'Color/Text/Energy',           hex: '#F97316' },
    // Borders
    { name: 'Color/Border/Subtle',         hex: '#E5E7EB' },
    { name: 'Color/Border/Input',          hex: '#D1D5DB' },
    { name: 'Color/Border/Focus',          hex: '#7C3AED' },
    // Status
    { name: 'Color/Status/Elevated Bg',    hex: '#EDE9FE' },
    { name: 'Color/Status/Elevated Fg',    hex: '#7C3AED' },
    { name: 'Color/Status/Burned',         hex: '#22C55E' },
    { name: 'Color/Status/Consumed',       hex: '#F97316' },
    { name: 'Color/Status/Success',        hex: '#10B981' },
    { name: 'Color/Status/Warning',        hex: '#F59E0B' },
    { name: 'Color/Status/Danger',         hex: '#EF4444' },
    // Interactive
    { name: 'Color/Interactive/Button Primary',  hex: '#8B3FD9' },
    { name: 'Color/Interactive/Button Pause',    hex: '#F97316' },
    { name: 'Color/Interactive/Button Stop',     hex: '#EF4444' },
    { name: 'Color/Interactive/Button Neutral',  hex: '#4B5563' },
    { name: 'Color/Interactive/Divider',         hex: '#E5E7EB' },
  ];

  for (const c of COLORS) {
    await createPaintStyle(c.name, solidPaint(c.hex));
  }

  // Gradient style
  const grad = figma.createPaintStyle();
  grad.name  = 'Color/Gradient/Brand Diagonal';
  grad.paints = linearPaint([
    { hex: '#F97316', pos: 0    },
    { hex: '#C026D3', pos: 0.5  },
    { hex: '#6D28D9', pos: 1    },
  ]);

  // ─────────────────────────────────────────────
  // 2. TYPOGRAPHY STYLES
  // ─────────────────────────────────────────────

  const TYPE_STYLES = [
    { name: 'Text/Display/D1',       size: 48, style: 'Bold',        lh: 56,  ls: -2   },
    { name: 'Text/Display/D2',       size: 36, style: 'Bold',        lh: 44,  ls: -1.5 },
    { name: 'Text/Heading/H1',       size: 30, style: 'Bold',        lh: 38,  ls: -1   },
    { name: 'Text/Heading/H2',       size: 24, style: 'SemiBold',    lh: 32,  ls: -0.5 },
    { name: 'Text/Heading/H3',       size: 20, style: 'SemiBold',    lh: 28,  ls: -0.3 },
    { name: 'Text/Heading/H4',       size: 17, style: 'SemiBold',    lh: 24,  ls: 0    },
    { name: 'Text/Body/Large',       size: 17, style: 'Regular',     lh: 26,  ls: 0    },
    { name: 'Text/Body/Regular',     size: 15, style: 'Regular',     lh: 22,  ls: 0    },
    { name: 'Text/Body/Small',       size: 13, style: 'Regular',     lh: 18,  ls: 0    },
    { name: 'Text/Label/Large',      size: 15, style: 'Medium',      lh: 20,  ls: 0.1  },
    { name: 'Text/Label/Regular',    size: 13, style: 'Medium',      lh: 18,  ls: 0.1  },
    { name: 'Text/Label/Small',      size: 11, style: 'Medium',      lh: 16,  ls: 0.2  },
    { name: 'Text/Caption/Regular',  size: 12, style: 'Regular',     lh: 16,  ls: 0    },
    { name: 'Text/Caption/Bold',     size: 12, style: 'Bold',        lh: 16,  ls: 0    },
    { name: 'Text/Metric/Calorie',   size: 64, style: 'Bold',        lh: 72,  ls: -3   },
    { name: 'Text/Metric/Large',     size: 48, style: 'Bold',        lh: 56,  ls: -2   },
    { name: 'Text/Metric/Medium',    size: 32, style: 'Bold',        lh: 40,  ls: -1   },
    { name: 'Text/Button/Large',     size: 17, style: 'SemiBold',    lh: 22,  ls: 0    },
    { name: 'Text/Button/Regular',   size: 15, style: 'SemiBold',    lh: 20,  ls: 0    },
    { name: 'Text/Button/Small',     size: 13, style: 'SemiBold',    lh: 18,  ls: 0    },
  ];

  for (const t of TYPE_STYLES) {
    try {
      await figma.loadFontAsync({ family: 'Inter', style: t.style });
      const s = figma.createTextStyle();
      s.name          = t.name;
      s.fontName      = { family: 'Inter', style: t.style };
      s.fontSize      = t.size;
      s.lineHeight    = { unit: 'PIXELS', value: t.lh };
      s.letterSpacing = { unit: 'PERCENT', value: t.ls };
    } catch(e) {
      console.warn(`Skipping font style ${t.style}:`, e.message);
    }
  }

  // ─────────────────────────────────────────────
  // 3. EFFECT STYLES (Shadows + Blur)
  // ─────────────────────────────────────────────

  await createEffectStyle('Elevation/1 — Card', [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.06 },
    offset: { x: 0, y: 1 },
    radius: 4,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL',
  }]);

  await createEffectStyle('Elevation/2 — Modal', [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.10 },
    offset: { x: 0, y: 4 },
    radius: 16,
    spread: 0,
    visible: true,
    blendMode: 'NORMAL',
  }]);

  await createEffectStyle('Elevation/3 — Sheet', [{
    type: 'DROP_SHADOW',
    color: { r: 0, g: 0, b: 0, a: 0.18 },
    offset: { x: 0, y: 8 },
    radius: 32,
    spread: -4,
    visible: true,
    blendMode: 'NORMAL',
  }]);

  await createEffectStyle('Blur/Background Blur', [{
    type: 'BACKGROUND_BLUR',
    radius: 20,
    visible: true,
  }]);

  // ─────────────────────────────────────────────
  // 4. FOUNDATIONS PAGE — visual swatch layout
  // ─────────────────────────────────────────────

  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'SemiBold' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Medium' });

  const page = figma.currentPage;
  page.name  = '🎨 Foundations';

  // ── 4a. Color swatches ──────────────────────

  const colorGroups = [
    { label: 'Brand Core',    items: [
      { label: 'Deep Purple',    hex: '#3B1D8A' },
      { label: 'Violet',         hex: '#7C3AED' },
      { label: 'Accent Violet',  hex: '#9B40D6' },
      { label: 'Orange',         hex: '#F97316' },
    ]},
    { label: 'Gradient Stops', items: [
      { label: 'Orange',         hex: '#F97316' },
      { label: 'Hot Pink',       hex: '#C026D3' },
      { label: 'Deep Violet',    hex: '#6D28D9' },
    ]},
    { label: 'Backgrounds',   items: [
      { label: 'Primary',        hex: '#FAFAF9' },
      { label: 'Card',           hex: '#F3F4F6' },
      { label: 'Lavender',       hex: '#F0EDFB' },
      { label: 'Input',          hex: '#EEEEEE' },
      { label: 'Dark',           hex: '#3B1D8A' },
      { label: 'Elevated',       hex: '#EDE9FE' },
      { label: 'Streak',         hex: '#FFF3E4' },
      { label: 'Metric Tile',    hex: '#3D3D3D' },
    ]},
    { label: 'Text',          items: [
      { label: 'Primary',        hex: '#111827' },
      { label: 'Secondary',      hex: '#6B7280' },
      { label: 'On Dark',        hex: '#FFFFFF', bg: '#3B1D8A' },
      { label: 'On Dark Muted',  hex: '#C4B5FD', bg: '#3B1D8A' },
      { label: 'Accent',         hex: '#9B40D6' },
      { label: 'Energy',         hex: '#F97316' },
    ]},
    { label: 'Status',        items: [
      { label: 'Success',        hex: '#10B981' },
      { label: 'Warning',        hex: '#F59E0B' },
      { label: 'Danger',         hex: '#EF4444' },
      { label: 'Burned',         hex: '#22C55E' },
      { label: 'Consumed',       hex: '#F97316' },
    ]},
    { label: 'Interactive',   items: [
      { label: 'Button Primary', hex: '#8B3FD9' },
      { label: 'Button Pause',   hex: '#F97316' },
      { label: 'Button Stop',    hex: '#EF4444' },
      { label: 'Button Neutral', hex: '#4B5563' },
      { label: 'Divider',        hex: '#E5E7EB' },
    ]},
  ];

  const SW = 80;   // swatch width
  const SH = 80;   // swatch height
  const GAP = 16;
  const GROUP_GAP = 48;

  let gx = 0;
  let gy = 120;

  // Title
  const colorTitle = await makeText('Color Palette', '#111827', 28, 'Bold', 0, 72);
  page.appendChild(colorTitle);

  for (const group of colorGroups) {
    // group label
    const gl = await makeText(group.label, '#6B7280', 13, 'Medium', gx, gy - 24);
    page.appendChild(gl);

    let sx = gx;
    for (const item of group.items) {
      const frame = makeFrame(`Swatch/${group.label}/${item.label}`, SW, SH + 36, sx, gy);
      // background of frame
      frame.fills = solidPaint(item.bg || '#FFFFFF');
      frame.cornerRadius = 12;
      // color rect
      const rect = makeRect('color', SW, SH, item.hex, 12);
      rect.cornerRadius = 10;
      frame.appendChild(rect);
      // label
      const lbl = await makeText(item.label, '#111827', 10, 'Regular', 4, SH + 4);
      frame.appendChild(lbl);
      const hexLbl = await makeText(item.hex, '#6B7280', 9, 'Regular', 4, SH + 17);
      frame.appendChild(hexLbl);
      page.appendChild(frame);
      sx += SW + GAP;
    }
    gx += group.items.length * (SW + GAP) + GROUP_GAP;
  }

  // ── 4b. Gradient swatch ──────────────────────

  gy = 360;
  const gradTitle = await makeText('Brand Gradient', '#111827', 28, 'Bold', 0, gy);
  page.appendChild(gradTitle);

  const gradRect = figma.createRectangle();
  gradRect.name   = 'Gradient/Brand Diagonal';
  gradRect.resize(400, 80);
  gradRect.x      = 0;
  gradRect.y      = gy + 44;
  gradRect.cornerRadius = 16;
  gradRect.fills  = linearPaint([
    { hex: '#F97316', pos: 0   },
    { hex: '#C026D3', pos: 0.5 },
    { hex: '#6D28D9', pos: 1   },
  ]);
  page.appendChild(gradRect);

  const gradLabel = await makeText('Orange #F97316  →  Hot Pink #C026D3  →  Deep Violet #6D28D9', '#6B7280', 12, 'Regular', 0, gy + 140);
  page.appendChild(gradLabel);

  // ── 4c. Typography specimens ─────────────────

  gy = 560;
  const typeTitle = await makeText('Typography Scale  (Inter)', '#111827', 28, 'Bold', 0, gy);
  page.appendChild(typeTitle);

  const typeSpecimens = [
    { label: 'Display / D1 — 48px Bold',          size: 48, weight: 'Bold',     sample: 'BurnLoop' },
    { label: 'Display / D2 — 36px Bold',          size: 36, weight: 'Bold',     sample: 'Great Job!' },
    { label: 'Heading / H1 — 30px Bold',          size: 30, weight: 'Bold',     sample: 'You burned' },
    { label: 'Heading / H2 — 24px SemiBold',      size: 24, weight: 'SemiBold', sample: 'Body basics' },
    { label: 'Heading / H3 — 20px SemiBold',      size: 20, weight: 'SemiBold', sample: 'Your goal' },
    { label: 'Heading / H4 — 17px SemiBold',      size: 17, weight: 'SemiBold', sample: 'Stay Healthy' },
    { label: 'Body / Large — 17px Regular',       size: 17, weight: 'Regular',  sample: 'Personalize BurnLoop around this' },
    { label: 'Body / Regular — 15px Regular',     size: 15, weight: 'Regular',  sample: 'Every burn counts toward your daily balance.' },
    { label: 'Body / Small — 13px Regular',       size: 13, weight: 'Regular',  sample: 'Come back later to keep the streak alive.' },
    { label: 'Label / Large — 15px Medium',       size: 15, weight: 'Medium',   sample: 'CALORIES BURNED' },
    { label: 'Label / Regular — 13px Medium',     size: 13, weight: 'Medium',   sample: 'Age · Weight · Height' },
    { label: 'Label / Small — 11px Medium',       size: 11, weight: 'Medium',   sample: 'years  lb  ft/in  cm' },
    { label: 'Metric / Calorie — 64px Bold',      size: 64, weight: 'Bold',     sample: '101' },
    { label: 'Button / Large — 17px SemiBold',    size: 17, weight: 'SemiBold', sample: 'Done' },
  ];

  let ty = gy + 52;
  for (const spec of typeSpecimens) {
    const lbl = await makeText(spec.label, '#9B40D6', 11, 'Medium', 0, ty);
    page.appendChild(lbl);
    ty += 18;
    const sample = await makeText(spec.sample, '#111827', spec.size, spec.weight, 0, ty);
    page.appendChild(sample);
    ty += spec.size + 24;
  }

  // ── 4d. Spacing scale ────────────────────────

  const spaceStartX = 900;
  const spaceStartY = 120;

  const spaceTitle = await makeText('Spacing Scale  (8pt grid)', '#111827', 28, 'Bold', spaceStartX, spaceStartY - 48);
  page.appendChild(spaceTitle);

  const spacingTokens = [
    { name: 'Space/2',   value: 2  },
    { name: 'Space/4',   value: 4  },
    { name: 'Space/8',   value: 8  },
    { name: 'Space/12',  value: 12 },
    { name: 'Space/16',  value: 16 },
    { name: 'Space/20',  value: 20 },
    { name: 'Space/24',  value: 24 },
    { name: 'Space/32',  value: 32 },
    { name: 'Space/40',  value: 40 },
    { name: 'Space/48',  value: 48 },
    { name: 'Space/56',  value: 56 },
    { name: 'Space/64',  value: 64 },
  ];

  let sy = spaceStartY;
  for (const sp of spacingTokens) {
    const bar = makeRect(sp.name, sp.value, 24, '#7C3AED', 4);
    bar.x = spaceStartX;
    bar.y = sy;
    page.appendChild(bar);
    const lbl = await makeText(`${sp.name}  —  ${sp.value}px`, '#6B7280', 12, 'Regular', spaceStartX + sp.value + 12, sy + 4);
    page.appendChild(lbl);
    sy += 40;
  }

  // ── 4e. Border radius scale ──────────────────

  const radStartX = 1160;
  const radStartY = 120;

  const radTitle = await makeText('Border Radius', '#111827', 28, 'Bold', radStartX, radStartY - 48);
  page.appendChild(radTitle);

  const radii = [
    { name: 'Radius/None',    value: 0  },
    { name: 'Radius/XS',      value: 4  },
    { name: 'Radius/SM',      value: 8  },
    { name: 'Radius/MD',      value: 12 },
    { name: 'Radius/LG',      value: 16 },
    { name: 'Radius/XL',      value: 20 },
    { name: 'Radius/2XL',     value: 24 },
    { name: 'Radius/Full',    value: 9999 },
  ];

  let ry = radStartY;
  for (const rad of radii) {
    const rect = makeRect(rad.name, 80, 80, '#EDE9FE', Math.min(rad.value, 40));
    rect.x = radStartX;
    rect.y = ry;
    page.appendChild(rect);
    const lbl = await makeText(`${rad.name}  —  ${rad.value === 9999 ? '9999 (pill)' : rad.value + 'px'}`, '#6B7280', 12, 'Regular', radStartX + 96, ry + 32);
    page.appendChild(lbl);
    ry += 104;
  }

  // ─────────────────────────────────────────────
  // 5. COMPONENTS PAGE
  // ─────────────────────────────────────────────

  let compPage;
  for (const p of figma.root.children) {
    if (p.name === '🧱 Components') { compPage = p; break; }
  }
  if (!compPage) {
    compPage = figma.createPage();
    compPage.name = '🧱 Components';
  }

  figma.currentPage = compPage;

  async function buildButtonRow(label, variants, startX, startY) {
    const title = await makeText(label, '#111827', 14, 'Bold', startX, startY);
    compPage.appendChild(title);

    let cx = startX;
    for (const v of variants) {
      const f = makeFrame(`Component/Button/${v.variant}/${v.state}`, v.w, 52, cx, startY + 28);
      f.fills         = v.fill ? solidPaint(v.fill, v.fillOpacity || 1) : [];
      f.cornerRadius  = 9999;
      f.strokeWeight  = v.stroke ? 1.5 : 0;
      if (v.stroke) f.strokes = solidPaint(v.stroke);
      const lbl = await makeText(v.label, v.textColor, 17, 'SemiBold', 0, 14);
      lbl.textAlignHorizontal = 'CENTER';
      lbl.resize(v.w, 24);
      f.appendChild(lbl);
      compPage.appendChild(f);
      cx += v.w + 24;
    }
  }

  // Primary button variants
  await buildButtonRow('Button / Primary', [
    { variant: 'Primary', state: 'Default',  label: 'Done',     fill: '#8B3FD9', textColor: '#FFFFFF', w: 200 },
    { variant: 'Primary', state: 'Hover',    label: 'Done',     fill: '#7C3AED', textColor: '#FFFFFF', w: 200 },
    { variant: 'Primary', state: 'Pressed',  label: 'Done',     fill: '#6D28D9', textColor: '#FFFFFF', w: 200 },
    { variant: 'Primary', state: 'Disabled', label: 'Done',     fill: '#E5E7EB', textColor: '#9CA3AF', w: 200 },
  ], 0, 0);

  await buildButtonRow('Button / Secondary', [
    { variant: 'Secondary', state: 'Default',  label: 'Skip',    stroke: '#8B3FD9', textColor: '#8B3FD9', w: 160 },
    { variant: 'Secondary', state: 'Hover',    label: 'Skip',    stroke: '#7C3AED', textColor: '#7C3AED', w: 160 },
    { variant: 'Secondary', state: 'Pressed',  label: 'Skip',    stroke: '#6D28D9', textColor: '#6D28D9', w: 160 },
    { variant: 'Secondary', state: 'Disabled', label: 'Skip',    stroke: '#D1D5DB', textColor: '#9CA3AF', w: 160 },
  ], 0, 120);

  await buildButtonRow('Button / Ghost (Workout)', [
    { variant: 'Ghost', state: 'Pause',  label: '⏸  Pause', fill: '#F97316', textColor: '#FFFFFF', w: 160 },
    { variant: 'Ghost', state: 'Stop',   label: '⏹  Stop',  fill: '#EF4444', textColor: '#FFFFFF', w: 160 },
    { variant: 'Ghost', state: 'Start',  label: '▶  Start', fill: '#4B5563', textColor: '#FFFFFF', w: 160 },
  ], 0, 240);

  // Badge component
  const badgeTitle = await makeText('Badge / Elevated', '#111827', 14, 'Bold', 0, 360);
  compPage.appendChild(badgeTitle);
  const badge = makeFrame('Component/Badge/Elevated', 96, 28, 0, 392);
  badge.fills        = solidPaint('#EDE9FE');
  badge.cornerRadius = 9999;
  const badgeText    = await makeText('Elevated', '#7C3AED', 13, 'Medium', 12, 5);
  badge.appendChild(badgeText);
  compPage.appendChild(badge);

  // Input / Stepper component
  const stepTitle = await makeText('Component / Stepper Input', '#111827', 14, 'Bold', 0, 460);
  compPage.appendChild(stepTitle);

  const stepFrame = makeFrame('Component/Input/Stepper', 200, 100, 0, 494);
  stepFrame.fills        = solidPaint('#EEEEEE');
  stepFrame.cornerRadius = 16;
  const stepLabel  = await makeText('Age', '#6B7280', 13, 'Regular', 16, 14);
  const stepValue  = await makeText('30 years', '#111827', 24, 'Bold', 16, 34);
  const stepMinus  = await makeText('−', '#111827', 20, 'Bold', 16, 70);
  const stepPlus   = await makeText('+', '#111827', 20, 'Bold', 156, 70);
  const stepDivide = makeRect('divider', 1, 24, '#D1D5DB', 0);
  stepDivide.x = 88; stepDivide.y = 70;
  [stepLabel, stepValue, stepMinus, stepPlus, stepDivide].forEach(n => stepFrame.appendChild(n));
  compPage.appendChild(stepFrame);

  // Goal Tile — selected
  const goalTitle = await makeText('Component / Goal Tile', '#111827', 14, 'Bold', 240, 460);
  compPage.appendChild(goalTitle);

  const goalSelected = makeFrame('Component/GoalTile/Selected', 160, 100, 240, 494);
  goalSelected.cornerRadius = 16;
  goalSelected.fills = linearPaint([
    { hex: '#F97316', pos: 0   },
    { hex: '#C026D3', pos: 0.5 },
    { hex: '#6D28D9', pos: 1   },
  ]);
  const goalIcon  = await makeText('✦', '#FFFFFF', 20, 'Bold', 16, 12);
  const goalName  = await makeText('Stay Healthy', '#FFFFFF', 15, 'SemiBold', 16, 44);
  const goalSub   = await makeText('Personalize BurnLoop', '#FFFFFF', 11, 'Regular', 16, 66);
  [goalIcon, goalName, goalSub].forEach(n => goalSelected.appendChild(n));
  compPage.appendChild(goalSelected);

  // Goal Tile — unselected
  const goalUnsel = makeFrame('Component/GoalTile/Unselected', 160, 100, 420, 494);
  goalUnsel.cornerRadius = 16;
  goalUnsel.fills = solidPaint('#F3F4F6');
  const goalIcon2  = await makeText('🔥', '#111827', 20, 'Regular', 16, 12);
  const goalName2  = await makeText('Lose Weight', '#111827', 15, 'SemiBold', 16, 44);
  const goalSub2   = await makeText('Personalize BurnLoop', '#6B7280', 11, 'Regular', 16, 66);
  [goalIcon2, goalName2, goalSub2].forEach(n => goalUnsel.appendChild(n));
  compPage.appendChild(goalUnsel);

  // Card — Motivational
  const motTitle = await makeText('Component / Card / Motivational', '#111827', 14, 'Bold', 0, 640);
  compPage.appendChild(motTitle);

  const motCard = makeFrame('Component/Card/Motivational', 340, 100, 0, 674);
  motCard.fills        = solidPaint('#F0EDFB');
  motCard.cornerRadius = 16;
  const motHeading = await makeText('⚡ Keep up the momentum 💪', '#111827', 14, 'SemiBold', 16, 16);
  const motBody    = await makeText('Every burn counts toward your daily balance.\nCome back later to keep the streak alive.', '#6B7280', 13, 'Regular', 16, 44);
  [motHeading, motBody].forEach(n => motCard.appendChild(n));
  compPage.appendChild(motCard);

  // Card — BurnLoop Snapshot (dark)
  const snapTitle = await makeText('Component / Card / Snapshot (Dark)', '#111827', 14, 'Bold', 0, 820);
  compPage.appendChild(snapTitle);

  const snapCard = makeFrame('Component/Card/Snapshot', 340, 180, 0, 854);
  snapCard.fills        = solidPaint('#3B1D8A');
  snapCard.cornerRadius = 20;
  const snapHeading  = await makeText('Your BurnLoop snapshot', '#FFFFFF', 15, 'SemiBold', 16, 16);
  const snapBMILabel = await makeText('BMI 25.8', '#FFFFFF', 13, 'SemiBold', 230, 14);
  const snapBMIBadge = makeRect('badge', 80, 24, '#5B2DA8', 12);
  snapBMIBadge.x = 230; snapBMIBadge.y = 12;
  const snapSub      = await makeText('BurnLoop will pay closer attention to\ncarb load, sugar spikes, and steadier\nmeal choices.', '#C4B5FD', 13, 'Regular', 16, 44);
  const snapH        = await makeText('Height  5\'8"', '#FFFFFF', 13, 'Regular', 16, 120);
  const snapW        = await makeText('Weight  170 lb', '#FFFFFF', 13, 'Regular', 180, 120);
  const snapG        = await makeText('Goal  Manage Diabetes', '#FFFFFF', 13, 'Regular', 16, 148);
  [snapHeading, snapBMIBadge, snapBMILabel, snapSub, snapH, snapW, snapG].forEach(n => snapCard.appendChild(n));
  compPage.appendChild(snapCard);

  // Profile header banner
  const bannerTitle = await makeText('Component / Banner / Profile Header', '#111827', 14, 'Bold', 0, 1080);
  compPage.appendChild(bannerTitle);

  const banner = makeFrame('Component/Banner/ProfileHeader', 390, 140, 0, 1114);
  banner.fills        = solidPaint('#3B1D8A');
  banner.cornerRadius = 20;
  const bannerH  = await makeText('Set up your profile', '#FFFFFF', 22, 'Bold', 20, 20);
  const bannerSub= await makeText('A more complete profile helps BurnLoop tailor\nmeal scan, body insights, payoff guidance, and\noptional BMI context.', '#C4B5FD', 13, 'Regular', 20, 52);
  [bannerH, bannerSub].forEach(n => banner.appendChild(n));
  compPage.appendChild(banner);

  // ─────────────────────────────────────────────
  // 6. DONE — select all on foundations page
  // ─────────────────────────────────────────────

  figma.currentPage = page;
  figma.viewport.scrollAndZoomIntoView(page.children);

  figma.notify('✅ BurnLoop Design System built! Check 🎨 Foundations + 🧱 Components pages.', { timeout: 6000 });

})().catch(err => {
  figma.notify('❌ Error: ' + err.message, { error: true });
  console.error(err);
});
