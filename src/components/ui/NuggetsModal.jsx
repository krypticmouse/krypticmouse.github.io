import { useState, useEffect, useCallback } from 'react';
import { IconBulb, IconX, IconArrowRight } from '@tabler/icons-react';

const TYPE_COLORS = {
  note: '#3b82f6',
  info: '#3b82f6',
  tip: '#a855f7',
  idea: '#a855f7',
  important: '#ec4899',
  warning: '#f59e0b',
  caution: '#f59e0b',
};

const TYPE_ICONS = {
  note: '\u2139',
  info: '\u2139',
  tip: '\uD83D\uDCA1',
  idea: '\uD83D\uDCA1',
  important: '\u2757',
  warning: '\u26A0\uFE0F',
  caution: '\u26A0\uFE0F',
};

export default function NuggetsModal({ nuggets }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!nuggets || nuggets.length === 0) return null;

  function scrollToNugget(id) {
    close();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      el.setAttribute('open', '');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="nuggets-fab"
        aria-label="Open nuggets"
      >
        <IconBulb size={18} />
        <span className="nuggets-fab-label">Nuggets</span>
        <span className="nuggets-fab-count">{nuggets.length}</span>
      </button>

      {open && (
        <div className="nuggets-backdrop" onClick={close}>
          <div className="nuggets-modal" onClick={(e) => e.stopPropagation()}>
            <div className="nuggets-modal-header">
              <div className="nuggets-modal-title-row">
                <IconBulb size={20} />
                <h2>Nuggets</h2>
                <span className="nuggets-modal-count">{nuggets.length}</span>
              </div>
              <button onClick={close} className="nuggets-close" aria-label="Close">
                <IconX size={18} />
              </button>
            </div>

            <div className="nuggets-list">
              {nuggets.map((n) => (
                <button
                  key={n.id}
                  className="nugget-card"
                  style={{ '--nugget-color': TYPE_COLORS[n.type] || TYPE_COLORS.note }}
                  onClick={() => scrollToNugget(n.id)}
                >
                  <span className="nugget-card-icon">{TYPE_ICONS[n.type] || TYPE_ICONS.note}</span>
                  <span className="nugget-card-title">{n.title}</span>
                  <IconArrowRight size={14} className="nugget-card-arrow" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
