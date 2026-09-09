// BurnLoop Design System Builder — Figma Plugin v1.1
// Main plugin code (runs in Figma sandbox)

figma.showUI(__html__, { width: 280, height: 360, title: 'BurnLoop Design System' });

// ─── Helpers ────────────────────────────────────────────────────────────────

function hexToRgb(h) {
  h = h.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const n = parseInt(h, 16);
  return { r: ((n >> 16) & 255) / 255, g: ((n >> 8) & 255) / 255, b: (n & 255) / 255 };
}

function solid(hexStr, opacity) {
  return [{ type: 'SOLID', color: hexToRgb(hexStr), opacity: opacity ?? 1 }];
}

function linearGrad(stops) {
  return [{
    type: 'GRADIENT_LINEAR',
    gradientTransform: [[1, 0, 0], [0, 1, 0]],
    gradientStops: stops.map(s => ({ position: s.p, color: { ...hexToRgb(s.h), a: 1 } })),
  }];
}

async function paintStyle(name, paints) {
  const s = figma.createPaintStyle(); s.name = name; s.paints = paints; return s;
}

async function loadFont(style) {
  try { await figma.loadFontAsync({ family: 'Inter', style }); } catch (_) {}
}

async function textStyle(name, size, weight, lh, ls) {
  await loadFont(weight);
  const s = figma.createTextStyle();
  s.name          = name;
  s.fontName      = { family: 'Inter', style: weight };
  s.fontSize      = size;
  s.lineHeight    = { unit: 'PIXELS', value: lh };
  s.letterSpacing = { unit: 'PERCENT', value: ls };
  return s;
}

function frame(name, w, h, x, y) {
  const f = figma.createFrame();
  f.name = name; f.resize(w, h); f.x = x; f.y = y;
  f.fills = []; f.clipsContent = false;
  return f;
}

function rect(name, w, h, fillHex, radius) {
  const r = figma.createRectangle();
  r.name = name; r.resize(w, h);
  r.fills = solid(fillHex); r.cornerRadius = radius ?? 0;
  return r;
}

async function text(str, col, size, weight, x, y, maxW) {
  await loadFont(weight);
  const t = figma.createText();
  t.characters = str; t.fontSize = size;
  t.fontName = { family: 'Inter', style: weight };
  t.fills = solid(col);
  t.x = x; t.y = y;
  if (maxW) t.resize(maxW, t.height);
  return t;
}

function progress(step, label) {
  figma.ui.postMessage({ type: 'progress', step, label });
}

// ─── Main build ─────────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  if (msg.type !== 'build') return;

  try {

    // ── STEP 0: Color styles ───────────────────────────────────────────────
    progress(0, 'Creating color styles…');

    const COLORS = [
      ['Color/Brand/Deep Purple',          '#3B1D8A'],
      ['Color/Brand/Violet',               '#7C3AED'],
      ['Color/Brand/Accent Violet',        '#9B40D6'],
      ['Color/Brand/Meal Card Purple',     '#7B5CB6'],
      ['Color/Brand/Orange',               '#F97316'],
      ['Color/Gradient/Orange',            '#F97316'],
      ['Color/Gradient/Hot Pink',          '#C026D3'],
      ['Color/Gradient/Deep Violet',       '#6D28D9'],
      ['Color/Ring/Orange',                '#F97316'],
      ['Color/Ring/Coral',                 '#F43F5E'],
      ['Color/Ring/Pink',                  '#EC4899'],
      ['Color/Ring/Violet',                '#7C3AED'],
      ['Color/Ring/Track',                 '#E5E7EB'],
      ['Color/Background/Primary',         '#FAFAF9'],
      ['Color/Background/Card',            '#F3F4F6'],
      ['Color/Background/Lavender',        '#F0EDFB'],
      ['Color/Background/Input',           '#EEEEEE'],
      ['Color/Background/Dark',            '#3B1D8A'],
      ['Color/Background/Elevated',        '#EDE9FE'],
      ['Color/Background/Streak',          '#FFF3E4'],
      ['Color/Background/Metric Tile',     '#3D3D3D'],
      ['Color/Text/Primary',               '#111827'],
      ['Color/Text/Secondary',             '#6B7280'],
      ['Color/Text/On Dark',               '#FFFFFF'],
      ['Color/Text/On Dark Muted',         '#C4B5FD'],
      ['Color/Text/Accent',                '#9B40D6'],
      ['Color/Text/Energy',                '#F97316'],
      ['Color/Border/Subtle',              '#E5E7EB'],
      ['Color/Border/Input',               '#D1D5DB'],
      ['Color/Border/Focus',               '#7C3AED'],
      ['Color/Status/Elevated Bg',         '#EDE9FE'],
      ['Color/Status/Elevated Fg',         '#7C3AED'],
      ['Color/Status/Burned',              '#22C55E'],
      ['Color/Status/Consumed',            '#F97316'],
      ['Color/Status/Success',             '#10B981'],
      ['Color/Status/Warning',             '#F59E0B'],
      ['Color/Status/Danger',              '#EF4444'],
      ['Color/Interactive/Button Primary', '#8B3FD9'],
      ['Color/Interactive/Button Pause',   '#F97316'],
      ['Color/Interactive/Button Stop',    '#EF4444'],
      ['Color/Interactive/Button Neutral', '#4B5563'],
      ['Color/Interactive/Divider',        '#E5E7EB'],
    ];
    for (const [name, hex] of COLORS) await paintStyle(name, solid(hex));

    // gradient style
    const gs = figma.createPaintStyle();
    gs.name = 'Color/Gradient/Brand Diagonal';
    gs.paints = linearGrad([{ h: '#F97316', p: 0 }, { h: '#C026D3', p: 0.5 }, { h: '#6D28D9', p: 1 }]);

    // ── STEP 1: Typography styles ──────────────────────────────────────────
    progress(1, 'Creating typography styles…');

    const TYPE = [
      ['Text/Display/D1',      48, 'Bold',     56, -2  ],
      ['Text/Display/D2',      36, 'Bold',     44, -1.5],
      ['Text/Heading/H1',      30, 'Bold',     38, -1  ],
      ['Text/Heading/H2',      24, 'SemiBold', 32, -0.5],
      ['Text/Heading/H3',      20, 'SemiBold', 28, -0.3],
      ['Text/Heading/H4',      17, 'SemiBold', 24,  0  ],
      ['Text/Body/Large',      17, 'Regular',  26,  0  ],
      ['Text/Body/Regular',    15, 'Regular',  22,  0  ],
      ['Text/Body/Small',      13, 'Regular',  18,  0  ],
      ['Text/Label/Large',     15, 'Medium',   20,  0.1],
      ['Text/Label/Regular',   13, 'Medium',   18,  0.1],
      ['Text/Label/Small',     11, 'Medium',   16,  0.2],
      ['Text/Caption/Regular', 12, 'Regular',  16,  0  ],
      ['Text/Caption/Bold',    12, 'Bold',     16,  0  ],
      ['Text/Metric/Calorie',  64, 'Bold',     72, -3  ],
      ['Text/Metric/Large',    48, 'Bold',     56, -2  ],
      ['Text/Metric/Medium',   32, 'Bold',     40, -1  ],
      ['Text/Button/Large',    17, 'SemiBold', 22,  0  ],
      ['Text/Button/Regular',  15, 'SemiBold', 20,  0  ],
      ['Text/Button/Small',    13, 'SemiBold', 18,  0  ],
    ];
    for (const [name, size, weight, lh, ls] of TYPE) {
      await textStyle(name, size, weight, lh, ls);
    }

    // ── STEP 2: Effect styles ──────────────────────────────────────────────
    progress(2, 'Creating effect styles…');

    const effs = [
      ['Elevation/1 — Card',   { r:0,g:0,b:0,a:0.06 }, {x:0,y:1},  4 ],
      ['Elevation/2 — Modal',  { r:0,g:0,b:0,a:0.10 }, {x:0,y:4}, 16 ],
      ['Elevation/3 — Sheet',  { r:0,g:0,b:0,a:0.18 }, {x:0,y:8}, 32 ],
    ];
    for (const [name, color, offset, radius] of effs) {
      const es = figma.createEffectStyle(); es.name = name;
      es.effects = [{ type:'DROP_SHADOW', color, offset, radius, spread:0, visible:true, blendMode:'NORMAL' }];
    }
    const blurStyle = figma.createEffectStyle();
    blurStyle.name = 'Blur/Background Blur';
    blurStyle.effects = [{ type: 'BACKGROUND_BLUR', radius: 20, visible: true }];

    // ── STEP 3: Foundations page ───────────────────────────────────────────
    progress(3, 'Building Foundations page…');

    figma.currentPage.name = '🎨 Foundations';
    const page = figma.currentPage;

    // title
    page.appendChild(await text('BurnLoop — Color Tokens', '#111827', 22, 'Bold', 0, 0));

    // color swatches
    const groups = [
      { label: 'Brand Core',    cols: ['#3B1D8A','#7C3AED','#9B40D6','#F97316'],  names: ['Deep Purple','Violet','Accent Violet','Orange'] },
      { label: 'Gradient',      cols: ['#F97316','#C026D3','#6D28D9'],             names: ['Orange','Hot Pink','Deep Violet'] },
      { label: 'Backgrounds',   cols: ['#FAFAF9','#F3F4F6','#F0EDFB','#EEEEEE','#3B1D8A','#EDE9FE','#FFF3E4','#3D3D3D'], names:['Primary','Card','Lavender','Input','Dark','Elevated','Streak','Metric'] },
      { label: 'Text',          cols: ['#111827','#6B7280','#FFFFFF','#C4B5FD','#9B40D6','#F97316'], names:['Primary','Secondary','On Dark','On Dark Muted','Accent','Energy'] },
      { label: 'Status',        cols: ['#10B981','#F59E0B','#EF4444','#22C55E','#F97316'],           names:['Success','Warning','Danger','Burned','Consumed'] },
      { label: 'Interactive',   cols: ['#8B3FD9','#F97316','#EF4444','#4B5563','#E5E7EB'],           names:['Btn Primary','Btn Pause','Btn Stop','Btn Neutral','Divider'] },
    ];

    let gx = 0, gy = 48;
    for (const g of groups) {
      page.appendChild(await text(g.label, '#6B7280', 11, 'Medium', gx, gy - 18));
      let sx = gx;
      for (let i = 0; i < g.cols.length; i++) {
        const sw = frame(`Swatch/${g.label}/${g.names[i]}`, 72, 104, sx, gy);
        sw.fills = solid('#FFFFFF'); sw.cornerRadius = 10;
        const cr = rect('fill', 72, 72, g.cols[i], 10); cr.y = 0;
        const lb = await text(g.names[i], '#111827', 9, 'Regular', 4, 74);
        const hx = await text(g.cols[i], '#6B7280', 8, 'Regular', 4, 87);
        sw.appendChild(cr); sw.appendChild(lb); sw.appendChild(hx);
        page.appendChild(sw);
        sx += 80;
      }
      gx += g.cols.length * 80 + 40;
    }

    // gradient bar
    gy = 200;
    page.appendChild(await text('Brand Gradient', '#111827', 18, 'Bold', 0, gy));
    const gbar = figma.createRectangle();
    gbar.name = 'Brand Gradient'; gbar.resize(400, 64); gbar.x = 0; gbar.y = gy + 32;
    gbar.cornerRadius = 16;
    gbar.fills = linearGrad([{ h:'#F97316', p:0 }, { h:'#C026D3', p:0.5 }, { h:'#6D28D9', p:1 }]);
    page.appendChild(gbar);
    page.appendChild(await text('#F97316  →  #C026D3  →  #6D28D9', '#6B7280', 11, 'Regular', 0, gy + 108));

    // typography specimens
    gy = 340;
    page.appendChild(await text('Typography Scale — Inter', '#111827', 18, 'Bold', 0, gy));
    const specimens = [
      ['Display D1 — 48px Bold',       48, 'Bold',     'BurnLoop'],
      ['Display D2 — 36px Bold',       36, 'Bold',     'Great Job!'],
      ['Heading H1 — 30px Bold',       30, 'Bold',     'You burned'],
      ['Heading H2 — 24px SemiBold',   24, 'SemiBold', 'Body basics'],
      ['Heading H3 — 20px SemiBold',   20, 'SemiBold', 'Your goal'],
      ['Body Large — 17px Regular',    17, 'Regular',  'Personalize BurnLoop around this goal'],
      ['Body Regular — 15px Regular',  15, 'Regular',  'Every burn counts toward your daily balance.'],
      ['Body Small — 13px Regular',    13, 'Regular',  'Come back later to keep the streak alive.'],
      ['Label Large — 15px Medium',    15, 'Medium',   'CALORIES BURNED'],
      ['Metric Calorie — 64px Bold',   64, 'Bold',     '101'],
      ['Button Large — 17px SemiBold', 17, 'SemiBold', 'Done'],
    ];
    let ty = gy + 40;
    for (const [label, size, weight, sample] of specimens) {
      page.appendChild(await text(label, '#9B40D6', 10, 'Medium', 0, ty));
      ty += 16;
      page.appendChild(await text(sample, '#111827', size, weight, 0, ty));
      ty += size + 20;
    }

    // spacing scale
    let spx = 860, spy = 40;
    page.appendChild(await text('Spacing — 8pt grid', '#111827', 18, 'Bold', spx, spy - 32));
    for (const [name, val] of [['Space/2',2],['Space/4',4],['Space/8',8],['Space/12',12],['Space/16',16],['Space/20',20],['Space/24',24],['Space/32',32],['Space/40',40],['Space/48',48],['Space/64',64]]) {
      const b = rect(name, Math.max(val, 2), 20, '#7C3AED', 4); b.x = spx; b.y = spy;
      page.appendChild(b);
      page.appendChild(await text(`${name}  ${val}px`, '#6B7280', 10, 'Regular', spx + val + 8, spy + 2));
      spy += 36;
    }

    // radius scale
    let rx = 1060, ry2 = 40;
    page.appendChild(await text('Border Radius', '#111827', 18, 'Bold', rx, ry2 - 32));
    for (const [name, val] of [['Radius/None',0],['Radius/XS',4],['Radius/SM',8],['Radius/MD',12],['Radius/LG',16],['Radius/XL',20],['Radius/2XL',24],['Radius/Full',9999]]) {
      const r2 = rect(name, 64, 64, '#EDE9FE', Math.min(val, 32)); r2.x = rx; r2.y = ry2;
      page.appendChild(r2);
      page.appendChild(await text(`${name}  ${val === 9999 ? 'pill' : val + 'px'}`, '#6B7280', 10, 'Regular', rx + 72, ry2 + 24));
      ry2 += 80;
    }

    // ── STEP 4: Components page ────────────────────────────────────────────
    progress(4, 'Building Components page…');

    let compPage = null;
    for (const p of figma.root.children) {
      if (p.name === '🧱 Components') { compPage = p; break; }
    }
    if (!compPage) { compPage = figma.createPage(); compPage.name = '🧱 Components'; }
    figma.currentPage = compPage;

    // — Buttons —
    compPage.appendChild(await text('Button / Primary', '#111827', 13, 'Bold', 0, 0));
    const btnData = [
      ['Default',  '#8B3FD9', '#FFFFFF', 1   ],
      ['Hover',    '#7C3AED', '#FFFFFF', 1   ],
      ['Pressed',  '#6D28D9', '#FFFFFF', 1   ],
      ['Disabled', '#E5E7EB', '#9CA3AF', 1   ],
    ];
    let bx = 0;
    for (const [state, fill, tcolor] of btnData) {
      const bf = frame(`Component/Button/Primary/${state}`, 160, 48, bx, 24);
      bf.fills = solid(fill); bf.cornerRadius = 9999;
      const bl = await text(state === 'Disabled' ? 'Done' : 'Done', tcolor, 15, 'SemiBold', 0, 13);
      bl.textAlignHorizontal = 'CENTER'; bl.resize(160, 22);
      bf.appendChild(bl); compPage.appendChild(bf); bx += 176;
    }

    // Secondary buttons
    compPage.appendChild(await text('Button / Secondary', '#111827', 13, 'Bold', 0, 96));
    const sec = [['Default','#8B3FD9'],['Hover','#7C3AED'],['Pressed','#6D28D9'],['Disabled','#D1D5DB']];
    bx = 0;
    for (const [state, strokeCol] of sec) {
      const bf = frame(`Component/Button/Secondary/${state}`, 140, 48, bx, 120);
      bf.fills = []; bf.cornerRadius = 9999; bf.strokeWeight = 1.5;
      bf.strokes = solid(strokeCol);
      const bl = await text('Save', strokeCol, 15, 'SemiBold', 0, 13);
      bl.textAlignHorizontal = 'CENTER'; bl.resize(140, 22);
      bf.appendChild(bl); compPage.appendChild(bf); bx += 156;
    }

    // Workout buttons
    compPage.appendChild(await text('Button / Workout Controls', '#111827', 13, 'Bold', 0, 192));
    for (const [label, fill, x2] of [['⏸  Pause','#F97316',0],['⏹  Stop','#EF4444',156],['▶  Start','#4B5563',312]]) {
      const bf = frame(`Component/Button/Workout/${label}`, 140, 48, x2, 216);
      bf.fills = solid(fill); bf.cornerRadius = 9999;
      const bl = await text(label, '#FFFFFF', 15, 'SemiBold', 0, 13);
      bl.textAlignHorizontal = 'CENTER'; bl.resize(140, 22);
      bf.appendChild(bl); compPage.appendChild(bf);
    }

    // Badge
    compPage.appendChild(await text('Badge / Elevated', '#111827', 13, 'Bold', 0, 296));
    const badge = frame('Component/Badge/Elevated', 88, 26, 0, 320);
    badge.fills = solid('#EDE9FE'); badge.cornerRadius = 9999;
    badge.appendChild(await text('Elevated', '#7C3AED', 12, 'Medium', 12, 5));
    compPage.appendChild(badge);

    // Stepper input
    compPage.appendChild(await text('Component / Stepper Input', '#111827', 13, 'Bold', 0, 376));
    const stepper = frame('Component/Input/Stepper', 180, 96, 0, 400);
    stepper.fills = solid('#EEEEEE'); stepper.cornerRadius = 16;
    stepper.appendChild(await text('Age', '#6B7280', 12, 'Regular', 14, 12));
    stepper.appendChild(await text('30 years', '#111827', 22, 'Bold', 14, 32));
    stepper.appendChild(await text('−', '#111827', 18, 'Bold', 14, 66));
    stepper.appendChild(await text('+', '#111827', 18, 'Bold', 148, 66));
    const div = rect('divider', 1, 22, '#D1D5DB', 0); div.x = 82; div.y = 66;
    stepper.appendChild(div); compPage.appendChild(stepper);

    // Goal tiles
    compPage.appendChild(await text('Component / Goal Tile', '#111827', 13, 'Bold', 220, 376));
    const selTile = frame('Component/GoalTile/Selected', 148, 96, 220, 400);
    selTile.cornerRadius = 16;
    selTile.fills = linearGrad([{h:'#F97316',p:0},{h:'#C026D3',p:0.5},{h:'#6D28D9',p:1}]);
    selTile.appendChild(await text('✦', '#FFFFFF', 18, 'Bold', 14, 10));
    selTile.appendChild(await text('Stay Healthy', '#FFFFFF', 13, 'SemiBold', 14, 40));
    selTile.appendChild(await text('Personalize BurnLoop', '#FFFFFF', 10, 'Regular', 14, 60));
    compPage.appendChild(selTile);

    const unselTile = frame('Component/GoalTile/Unselected', 148, 96, 384, 400);
    unselTile.cornerRadius = 16; unselTile.fills = solid('#F3F4F6');
    unselTile.appendChild(await text('🔥', '#111827', 18, 'Regular', 14, 10));
    unselTile.appendChild(await text('Lose Weight', '#111827', 13, 'SemiBold', 14, 40));
    unselTile.appendChild(await text('Personalize BurnLoop', '#6B7280', 10, 'Regular', 14, 60));
    compPage.appendChild(unselTile);

    // Motivational card
    compPage.appendChild(await text('Component / Card / Motivational', '#111827', 13, 'Bold', 0, 528));
    const motCard = frame('Component/Card/Motivational', 340, 96, 0, 552);
    motCard.fills = solid('#F0EDFB'); motCard.cornerRadius = 16;
    motCard.appendChild(await text('⚡ Keep up the momentum 💪', '#111827', 13, 'SemiBold', 16, 14));
    motCard.appendChild(await text('Every burn counts toward your daily balance.\nCome back later to keep the streak alive.', '#6B7280', 12, 'Regular', 16, 38));
    compPage.appendChild(motCard);

    // Snapshot card (dark)
    compPage.appendChild(await text('Component / Card / Snapshot (Dark)', '#111827', 13, 'Bold', 0, 680));
    const snap = frame('Component/Card/Snapshot', 340, 172, 0, 704);
    snap.fills = solid('#3B1D8A'); snap.cornerRadius = 20;
    snap.appendChild(await text('Your BurnLoop snapshot', '#FFFFFF', 14, 'SemiBold', 16, 14));
    const snapBadge = frame('Badge/BMI', 84, 22, 240, 12);
    snapBadge.fills = solid('#5B2DA8'); snapBadge.cornerRadius = 9999;
    snapBadge.appendChild(await text('BMI 25.8', '#FFFFFF', 11, 'Medium', 8, 4));
    snap.appendChild(snapBadge);
    snap.appendChild(await text('BurnLoop will pay closer attention to\ncarb load, sugar spikes, and steadier\nmeal choices.', '#C4B5FD', 12, 'Regular', 16, 42));
    snap.appendChild(await text('Height  5\'8"', '#FFFFFF', 12, 'Regular', 16, 116));
    snap.appendChild(await text('Weight  170 lb', '#FFFFFF', 12, 'Regular', 180, 116));
    snap.appendChild(await text('Goal  Manage Diabetes', '#FFFFFF', 12, 'Regular', 16, 142));
    compPage.appendChild(snap);

    // Profile header banner
    compPage.appendChild(await text('Component / Banner / Profile Header', '#111827', 13, 'Bold', 0, 908));
    const banner = frame('Component/Banner/ProfileHeader', 390, 136, 0, 932);
    banner.fills = solid('#3B1D8A'); banner.cornerRadius = 20;
    banner.appendChild(await text('Set up your profile', '#FFFFFF', 20, 'Bold', 20, 18));
    banner.appendChild(await text('A more complete profile helps BurnLoop tailor\nmeal scan, body insights, payoff guidance,\nand optional BMI context.', '#C4B5FD', 12, 'Regular', 20, 52));
    compPage.appendChild(banner);

    // ── Finish ────────────────────────────────────────────────────────────
    figma.currentPage = page;
    figma.viewport.scrollAndZoomIntoView(page.children);
    figma.ui.postMessage({ type: 'done' });

  } catch (err) {
    figma.ui.postMessage({ type: 'error', message: err.message });
    console.error(err);
  }
};
