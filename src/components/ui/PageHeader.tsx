import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  contentWidth?: 'wide' | 'narrow';
  spacingAfter?: 'default' | 'none';
  actions?: ReactNode;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, contentWidth = 'wide', spacingAfter = 'default', actions, children }: PageHeaderProps) {
  return (
    <div className={`pt-[calc(4.5rem+env(safe-area-inset-top)+1.5rem)] xl:pt-[calc(5rem+env(safe-area-inset-top)+2rem)] ${spacingAfter === 'default' ? 'mb-8 sm:mb-10' : ''}`}>
      <div className={`px-4 sm:px-6 mx-auto ${contentWidth === 'narrow' ? 'max-w-5xl' : 'max-w-site'}`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-midnight"
          >
            {title}
          </h1>
          {actions}
        </div>
        {subtitle && (
          <p
            className="mt-3 text-lg text-midnight/65 max-w-2xl"
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div
            className="mt-3"
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
