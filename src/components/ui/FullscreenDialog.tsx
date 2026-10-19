import { useLayoutEffect, useRef, type ReactNode } from 'react';

interface FullscreenDialogProps {
  label: string;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

// The native top layer avoids positioning being trapped by animated ancestors
// and supplies focus trapping and restoration.
export default function FullscreenDialog({ label, onClose, className = '', children }: FullscreenDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialog.querySelector<HTMLElement>('[data-dialog-focus]')?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialogRef} aria-label={label} className={`fullscreen-dialog ${className}`}
      onCancel={(event) => { event.preventDefault(); onClose(); }}>
      {children}
    </dialog>
  );
}
