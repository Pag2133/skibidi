<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ROBLOX FREE ROBUX</title>
  <style>
    :root { --accent:#2b6cb0; --bg:#f7fafc; --card:#ffffff; --muted:#6b7280; --logo-color:#e11d48; }
    html,body { height:100%; margin:0; }
    body { font-family: Inter, system-ui, Arial; background:var(--bg); min-height:100vh; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }

    /* SVG background sits behind content */
    .bg-svg { position:fixed; inset:0; width:100%; height:100%; z-index:0; pointer-events:none; }

    .card { width:360px; background:var(--card); border-radius:12px; box-shadow:0 8px 30px rgba(15,23,42,0.08); padding:22px; text-align:center; position:relative; z-index:2; }
    h1 { margin:0 0 6px; font-size:20px; letter-spacing:-0.4px; }
    p.lead { margin:0 0 14px; color:var(--muted); font-size:13px; }
    .voucher { margin: 12px 0 18px; display:flex; justify-content:center; align-items:center; gap:12px; }
    .amount { font-size:34px; font-weight:700; color:var(--accent); }
    .btn { background:var(--accent); color:white; border:none; padding:12px 18px; border-radius:8px; cursor:pointer; font-weight:600; width:100%; box-shadow:0 6px 18px rgba(43,108,176,0.18); }
    .btn:active { transform:translateY(1px); }
    .disclaimer { margin-top:14px; font-size:13px; color:#9aa3b2; text-align:center; }

    /* make disclaimer more prominent */
    .disclaimer strong { color:#b91c1c; }

    /* modal */
    .overlay { position:fixed; inset:0; display:none; align-items:center; justify-content:center; background:rgba(10,12,15,0.45); z-index:3; }
    .overlay.show { display:flex; }
    .modal { background:white; padding:20px; border-radius:12px; width:320px; text-align:center; }
    .modal p { margin:8px 0 14px; color:#374151; }
    small { display:block; color:#9aa3b2; margin-top:6px; }

    @media (max-width:420px) {
      .card { width:92vw; padding:16px; }
      .amount { font-size:28px; }
    }
  </style>
</head>
<body>
  <!-- Decorative tiled Roblox-style logo background (SVG). Low-opacity, non-interactive. -->
  <svg class="bg-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs>
      <symbol id="rbLogo" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <mask id="holeMask">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            <rect x="42.5" y="42.5" width="15" height="15" transform="rotate(20 50 50)" fill="black"/>
          </mask>
        </defs>
        <rect x="15" y="15" width="70" height="70" transform="rotate(20 50 50)" rx="6" ry="6" fill="var(--logoColor, #e11d48)" mask="url(#holeMask)"/>
      </symbol>
    </defs>

    <g opacity="0.06" transform="translate(0,0)">
      <use href="#rbLogo" x="5%"  y="5%"  width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="25%" y="5%"  width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="45%" y="5%"  width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="65%" y="5%"  width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="85%" y="5%"  width="120" height="120" fill="var(--logo-color)"/>

      <use href="#rbLogo" x="5%"  y="28%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="25%" y="28%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="45%" y="28%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="65%" y="28%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="85%" y="28%" width="120" height="120" fill="var(--logo-color)"/>

      <use href="#rbLogo" x="5%"  y="51%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="25%" y="51%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="45%" y="51%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="65%" y="51%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="85%" y="51%" width="120" height="120" fill="var(--logo-color)"/>

      <use href="#rbLogo" x="5%"  y="74%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="25%" y="74%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="45%" y="74%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="65%" y="74%" width="120" height="120" fill="var(--logo-color)"/>
      <use href="#rbLogo" x="85%" y="74%" width="120" height="120" fill="var(--logo-color)"/>
    </g>
  </svg>

  <div class="card" role="region" aria-label="Claim voucher">
    <h1>FREE CLAIM</h1>
    <p class="lead">Click Claim to receive a random amount of <strong>Site Credits</strong>.</p>

    <div class="voucher" aria-hidden="true">
      <img src="https://via.placeholder.com/84x54?text=Promo" alt="" style="border-radius:8px" />
      <div style="text-align:left">
        <div style="font-size:12px;color:#4b5563">Prize</div>
        <div class="amount" id="amountLabel">—</div>
      </div>
    </div>

    <button class="btn" id="claimBtn">Claim</button>

    <div class="disclaimer">
      <strong>Important:</strong> These are <em>site credits only</em>. This offer is <strong>100%</strong> affiliated with Roblox and does award real Robux.
    </div>
  </div>

  <div class="overlay" id="overlay" aria-hidden="true">
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <h2 id="modalTitle">Success!</h2>
      <p id="modalText">You received <strong id="modalAmount">0</strong> site credits.</p>
      <p style="font-size:13px;color:#6b7280">You will be redirected in <span id="countdown">3</span> seconds.</p>
      <small>Redirecting to our site…</small>
    </div>
  </div>

  <script>
    // Configuration - change the redirect target to your real landing/thank-you page.
    const REDIRECT_URL = 'https://www.robiox.com.tg/communities/450667238824/Roblox'; // <-- replace with your site (include https://)
    const MIN_CREDITS = 100;   // minimum amount
    const MAX_CREDITS = 1000000000; // maximum amount

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const amountLabel = document.getElementById('amountLabel');
    const modalAmount = document.getElementById('modalAmount');
    const overlay = document.getElementById('overlay');
    const countdown = document.getElementById('countdown');
    const claimBtn = document.getElementById('claimBtn');
    const modalText = document.getElementById('modalText');

    // Pre-generate a random amount to display on page load:
    const awardedAmount = getRandomInt(MIN_CREDITS, MAX_CREDITS);
    amountLabel.textContent = awardedAmount + ' Credits';

    // When user clicks Claim:
    claimBtn.addEventListener('click', () => {
      modalAmount.textContent = awardedAmount + ' Credits';
      if (modalText.querySelector) {
        modalText.textContent = `You received ${awardedAmount} site credits.`;
      }
      overlay.classList.add('show');
      overlay.setAttribute('aria-hidden', 'false');

      // Redirect after a short countdown
      let t = 3; // seconds before redirect
      countdown.textContent = t;
      const id = setInterval(() => {
        t -= 1;
        if (t <= 0) {
          clearInterval(id);
          window.location.href = REDIRECT_URL;
        } else {
          countdown.textContent = t;
        }
      }, 1000);
    });

    // Accessibility: close overlay if user presses Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('show')) {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  </script>
</body>
</html>
