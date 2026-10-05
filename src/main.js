@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;800&display=swap');

:root {
  --bg: #f4f7fb;
  --card: #ffffff;
  --primary: #1f6feb;
  --primary-soft: #eaf2ff;
  --success: #1abf73;
  --success-soft: #eafaf2;
  --danger: #ef5a5a;
  --danger-soft: #fff0f0;
  --text: #1d2736;
  --muted: #667085;
  --border: #e4e7ec;
  --shadow: 0 14px 30px rgba(16, 24, 40, 0.08);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  font-family: 'Vazirmatn', sans-serif;
  background: linear-gradient(180deg, #eef4ff 0%, #f6f8fc 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button,
input {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 64px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(228, 231, 236, 0.8);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 22px 26px;
  backdrop-filter: blur(12px);
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 0.8rem;
}

h1 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

button,
.upload-btn {
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 700;
}

button:hover,
.upload-btn:hover {
  transform: translateY(-1px);
}

.secondary {
  background: #eef2ff;
  color: #243d85;
}

.upload-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: white;
  box-shadow: 0 10px 24px rgba(31, 111, 235, 0.28);
  position: relative;
  overflow: hidden;
}

.upload-btn input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.content {
  margin-top: 28px;
}

.toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: min(100%, 360px);
}

.search-box label {
  font-weight: 700;
}

.search-box input {
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  outline: none;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.03);
}

.search-box input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(31, 111, 235, 0.12);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 20px 18px;
}

.stat-card .label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 0.92rem;
}

.stat-card .icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.stat-card .value {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
  font-weight: 800;
  margin: 0;
}

.stat-card.present .icon {
  background: var(--success-soft);
  color: var(--success);
}

.stat-card.absent .icon {
  background: var(--danger-soft);
  color: var(--danger);
}

.stat-card.total .icon {
  background: var(--primary-soft);
  color: var(--primary);
}

.panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 18px 20px 10px;
}

.panel-header {
  padding: 8px 6px 16px;
}

.panel-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 620px;
}

th,
td {
  padding: 14px 12px;
  border-bottom: 1px solid var(--border);
  text-align: center;
}

th {
  background: #f9fafb;
  color: var(--muted);
  font-size: 0.85rem;
}

tbody tr:hover {
  background: #fafcff;
}

.empty-state {
  color: var(--muted);
  text-align: center;
  padding: 24px 0;
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .actions {
    width: 100%;
    justify-content: space-between;
  }

  .upload-btn,
  .secondary {
    flex: 1;
  }
}
