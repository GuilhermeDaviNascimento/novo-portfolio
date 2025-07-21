interface ButtonProps {
  children: React.ReactNode;
  variation?: 'primary' | 'secondary' | 'danger' | 'third' | 'four';
}

export default function Button({ children, variation = 'primary' }: ButtonProps) {
  const baseClasses =
    'px-4 py-2 rounded-full font-medium transition-all duration-200 hover:cursor-pointer flex items-center gap-2';

  const variations: Record<string, string> = {
    primary:
      'bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#f1f1f1] hover:border-[#0f3d3e] hover:text-[#111827]',
    secondary: 'text-[#111827] border border-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-white',
    third: 'text-[#111827] hover:underline',
    four: 'bg-[#0f3d3e] border border-[#0f3d3e] text-white hover:bg-[#ffffff] hover:border-[#0f3d3e] hover:text-[#111827]',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const classes = `${baseClasses} ${variations[variation] || variations.primary}`;

  return <button className={classes}>{children}</button>;
}
